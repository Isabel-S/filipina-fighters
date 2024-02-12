
from string import punctuation
import json
import re

# temporary function to combine 
def clean():
    terms = []
    with open('nlp/abuse-terms.txt') as og:
        for line in og:
            if line.lower() not in terms:
                terms.append(line.lower())

    new = open("nlp/abuse-terms-clean.txt", "w")
    for line in terms:
        new.write(line)
    new.close()

def create_dictionary():
    # create dictionary of all abuse terms
    # {'word': {
    #            'type': [],
    #            'count': 
    #           }
    # }
    abuse_terms = {}
    with open('nlp/abuse-terms-all.txt') as abuse_terms_file:
        for line in abuse_terms_file:
            type = line.split()[-1].replace('type=', '')
            term = " ".join(line.split()[0:-1])
            abuse_terms[term] = {'type': type, 'count': 0}
    return abuse_terms

def count_abuse(abuse_terms, counts, users, abuse_texts, newtext, ogtext, user, date, true_counts):
    abuse = False
    label_counts = {'credibility': 0,
                    'dilawan': 0,
                    'personal': 0,
                    }
    sublabel_counts = {'other': 0,
                        'racist': 0,
                        'sexist': 0,
                        'homophobic': 0,
                        }
    for term in abuse_terms:
        if re.search(r"\b" + re.escape(term) + r"\b", newtext):
            abuse = True
            abuse_terms[term]['count'] += 1
            counts[abuse_terms[term]['type']] += 1
            if abuse_terms[term]['type'] in label_counts.keys():
                label_counts[abuse_terms[term]['type']] += 1
            else:
                sublabel_counts[abuse_terms[term]['type']] += 1
            
            if (abuse_terms[term]['type'] == 'sexist' or abuse_terms[term]['type'] == 'racist' or abuse_terms[term]['type'] == 'homophobic' or abuse_terms[term]['type'] == 'other'):
                counts['personal'] += 1
    
    if abuse:
        counts['abuse'] += 1
        # break ties
        final_label = "personal"
        for label in label_counts:
            if label_counts[label] > label_counts[final_label]:
                final_label = label
        
        # add to true counts
        true_counts[final_label] += 1

        if final_label == "personal":
            final_sublabel = "other"
            for sublabel in sublabel_counts:
                if sublabel_counts[sublabel] > sublabel_counts[final_sublabel]:
                    final_sublabel = sublabel
            # add to true counts
            true_counts[final_sublabel] += 1
        # save user and comment and date
        # count
    counts['total'] += 1
    return abuse_terms, counts, users, abuse_texts, true_counts

def find_abuse(reporter):
    counts = {'total': 0,
              'abuse': 0,
              'personal': 0,
              'credibility': 0,
              'dilawan': 0,
              'sexist': 0,
              'racist': 0,
              'homophobic': 0,
              'other': 0}
    users = {}
    abuse_texts = {}
    abuse_terms = create_dictionary()
    true_counts = {'personal': 0,
              'credibility': 0,
              'dilawan': 0,
              'sexist': 0,
              'racist': 0,
              'homophobic': 0,
              'other': 0}

    # go through text in posts
    # extracted_data/__posts_extracted.html
    with open('extracted_data/'+reporter+'_posts_extracted.json') as data_file:    
        data = json.load(data_file)
        posts = data['posts']
        for post in posts:
            ogtext = post['text'] 
            date = ""
            newtext=" ".join([i.strip(punctuation) for i in ogtext.split()])

            abuse_terms, counts, users, abuse_texts, true_counts = count_abuse(abuse_terms, counts, users, abuse_texts, newtext, ogtext, post['user'], date, true_counts)
            
    # go through description of videos and comments
    # extracted_data/__posts_extracted_comments.html
    # combine the title and description of a video to one
    with open('extracted_data/'+reporter+'_posts_extracted_comments.json') as data_file:    
        data = json.load(data_file)
        posts = data['videos']
        for post in posts:
            # title and description
            title = post['title']
            description = post['description']
            date = post['date']
            newtext = " ".join([i.strip(punctuation) for i in title.split()])
            newtext += " ".join([i.strip(punctuation) for i in description.split()])

            abuse_terms, counts, users, abuse_texts, true_counts = count_abuse(abuse_terms, counts, users, abuse_texts, newtext, title + " " + description, post['user'], date, true_counts)
            
            # go through comments
            if 'comments' in post:
                comments = post['comments']
                for comment in comments:
                    ogtext = comment['comment_text']
                    newtext=" ".join([i.strip(punctuation) for i in ogtext.split()])
                    
                    abuse_terms, counts, users, abuse_texts, true_counts = count_abuse(abuse_terms, counts, users, abuse_texts, newtext, ogtext, comment['commenter_id'], date, true_counts)
    
    # Write findings to files
    with open('nlp/'+reporter+'_abuse_terms.json', 'w') as file:
        json.dump(abuse_terms, file, indent=4, sort_keys=True, default=str)
    with open('nlp/'+reporter+'_abuse_count.json', 'w') as file:
        json.dump(counts, file, indent=4, sort_keys=True, default=str)
    with open('nlp/'+reporter+'_label_count.json', 'w') as file:
        json.dump(true_counts, file, indent=4, sort_keys=True, default=str)

find_abuse('ranada')
find_abuse('tordesillas')