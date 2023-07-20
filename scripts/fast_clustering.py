"""
This is a more complex example on performing clustering on large scale dataset.

This examples find in a large set of sentences local communities, i.e., groups of sentences that are highly
similar. You can freely configure the threshold what is considered as similar. A high threshold will
only find extremely similar sentences, a lower threshold will find more sentence that are less similar.

A second parameter is 'min_community_size': Only communities with at least a certain number of sentences will be returned.

The method for finding the communities is extremely fast, for clustering 50k sentences it requires only 5 seconds (plus embedding comuptation).

In this example, we download a large set of questions from Quora and then find similar questions in this set.
"""
from sentence_transformers import SentenceTransformer, util
import os
import csv
import time
import json
import pickle
import pandas as pd
import numpy as np
from sklearn.manifold import TSNE
import plotly.express as px

def create_cluster(reporter):

    # Model for computing sentence embeddings. We use one trained for similar questions detection
    model = SentenceTransformer('all-MiniLM-L6-v2')

    max_corpus_size = 50000  # We limit our corpus to only the first 50k questions

    # Get all unique sentences from the file
    corpus_sentences = set()
    with open('nlp/'+reporter+'_all.json', 'r') as openfile:
        json_object = json.load(openfile)
        for line in json_object:
            text = line['text']
            if text.strip() != '':
                corpus_sentences.add(text) 

    corpus_sentences = list(corpus_sentences)

    # Encode the corpus
    print("Encode the corpus. This might take a while")
    corpus_embeddings = model.encode(corpus_sentences, batch_size=64, show_progress_bar=True, convert_to_tensor=True)

    print("Start clustering")
    start_time = time.time()

    #Two parameters to tune:
    #min_cluster_size: Only consider cluster that have at least 25 elements
    #threshold: Consider sentence pairs with a cosine-similarity larger than threshold as similar
    clusters = util.community_detection(corpus_embeddings, min_community_size=25, threshold=0.78)

    print("Clustering done after {:.2f} sec".format(time.time() - start_time))

    #Print for all clusters the top 3 and bottom 3 elements
    for i, cluster in enumerate(clusters):
        print("\nCluster {}, #{} Elements ".format(i+1, len(cluster)))
        for sentence_id in cluster[0:3]:
            print("\t", corpus_sentences[sentence_id])
        print("\t", "...")
        for sentence_id in cluster[-3:]:
            print("\t", corpus_sentences[sentence_id])

    # create list of assigned cluster for each sentence
    corpus_cluster = ['0']*len(corpus_sentences)

    for i, cluster in enumerate(clusters):
        for sentence_id in cluster:
            corpus_cluster[sentence_id] = str(i+1)

    # try to visualize data
    X = corpus_embeddings

    # reduce dimensionality
    X_embedded = TSNE(n_components=2).fit_transform(X)

    # remove ones with no cluster
    new_corpus_sentences = []
    new_corpus_cluster = []
    new_X_embedded = []

    for i, cluster in enumerate(corpus_cluster):
        if cluster != '0':
            new_corpus_sentences.append(corpus_sentences[i])
            new_corpus_cluster.append(corpus_cluster[i])
            new_X_embedded.append(X_embedded[i])

    # create a dataframe of the text and their label (cluster)
    df_embeddings = pd.DataFrame(new_X_embedded)
    df_embeddings = df_embeddings.rename(columns={0:'x',1:'y'})
    df_embeddings = df_embeddings.assign(label=new_corpus_cluster)
    df_embeddings = df_embeddings.assign(text=new_corpus_sentences)

    fig = px.scatter(
        df_embeddings, x='x', y='y',
        color='label', labels={'color': 'label'},
        hover_data=['text'], title = 'Embedding Visualization')
    fig.show()

create_cluster('tordesillas')