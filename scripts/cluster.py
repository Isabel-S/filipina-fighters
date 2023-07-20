import re
import json
import pandas as pd

# create json of all posts, videos, comments, to exist
def get_all_text(reporter):
    all = []
    # go through text in posts
    # extracted_data/__posts_extracted.html
    with open('extracted_data/'+reporter+'_posts_extracted.json') as data_file:    
        data = json.load(data_file)
        posts = data['posts']
        for post in posts:
            text = post['text']
            user = post['user'] 
            all.append({
                'text': text,
                'user': user,
            })

    # save to new json file
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
            text = title + " " + description
            user = post['user']
            all.append({
                'text': text,
                'user': user,
            })

            # go through comments
            if 'comments' in post:
                comments = post['comments']
                for comment in comments:
                    text = comment['comment_text']
                    user = comment['commenter_id']
                    all.append({
                        'text': text,
                        'user': user,
                    })
            
    # Write findings to files
    with open('nlp/'+reporter+'_all.json', 'w') as file:
        json.dump(all, file, indent=4, sort_keys=True, default=str)

# represent data as matrix


# clean data
#single_matrix['title_subtitle'] = [re.findall(r'\w+', i.lower()) for i in single_matrix['title_subtitle'].fillna('NONE')]


# vectorize data

# group similar sentences

get_all_text('ranada')
get_all_text('tordesillas')