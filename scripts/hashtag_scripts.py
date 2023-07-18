import json
from string import punctuation
from wordcloud import WordCloud

# creates a dictionary of all hashtags
# and a count of them
def find_tags(reporter, simple):
    tags = {}

    # go through text in posts
    # extracted_data/__posts_extracted.html
    with open('extracted_data/'+reporter+'_posts_extracted.json') as data_file:    
        data = json.load(data_file)
        posts = data['posts']
        for post in posts:
            text = post['text'] 
            texttags = [tag.strip("#") for tag in text.split() if tag.startswith("#")]
            for tag in texttags:
                if simple:
                    tag = tag.lower().strip(punctuation)
                if tag not in tags:
                    tags[tag] = 0
                tags[tag] += 1
    print(tags)

    # go through description of videos and comments
    # extracted_data/__posts_extracted_comments.html
    # combine the title and description of a video to one
    with open('extracted_data/'+reporter+'_posts_extracted_comments.json') as data_file:    
        data = json.load(data_file)
        posts = data['videos']
        for post in posts:
            title = post['title']
            description = post['description']

            texttags = [tag.strip("#") for tag in title.split() if tag.startswith("#")]
            texttags += [tag.strip("#") for tag in description.split() if tag.startswith("#")]

            if 'comments' in post:
                comments = post['comments']
                for comment in comments:
                    texttags += [tag.strip("#") for tag in comment['comment_text'].split() if tag.startswith("#")]
            
            #print(texttags)

            for tag in texttags:
                if simple:
                    tag = '#'+tag.lower().strip(punctuation)
                if tag != '#':
                    if tag not in tags:
                        tags[tag] = 0
                    tags[tag] += 1
    print(tags)

    # Write data to the JSON file
    with open('nlp/'+reporter+'_hashtags.json', 'w') as file:
        json.dump(tags, file, indent=4, sort_keys=True, default=str)


    # Write data to text file for word cloud 

    # create string to write to file
    tagstext = ""
    for tag in tags:
        count = tags[tag]
        tagstext += ((tag + " ") * count)
        tagstext += '\n'

    with open('nlp/'+reporter+'_hashtags.txt', 'w') as f:
        f.write(tagstext)

    # make a word cloud
    # Read the whole text.
    text = open('nlp/'+reporter+'_hashtags.txt').read()
    # Generate a word cloud image
    wc = WordCloud(width = 800, height = 400, collocations=False)
    wordcloud = wc.generate_from_frequencies(tags)
    wordcloud.to_file('nlp/'+reporter+'_hashtags_cloud.png')
    

find_tags('ranada', True)
find_tags('tordesillas', True)