"""
Download comments for a public Facebook post.
"""

from facebook_scraper import *
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import facebook_scraper as fs
import json


# enable_logging()
set_cookies("www.facebook.com_cookies.txt")

# def login():
#     with open('facebook_credentials.txt') as file:
#         EMAIL = file.readline().split('"')[1]
#         PASSWORD = file.readline().split('"')[1] #not getting password
#         return EMAIL, PASSWORD

# EMAIL, PASSWORD = login()

def extract_comments(start_id, filename):
    seen = True

    # Read the JSON file
    with open(filename, 'r') as file:
        data = json.load(file)

    # Modify the data as needed
    for idx, vid in enumerate(data['videos']):
        # get the post id (numerical part of link)
        print(vid['link'])
        post_id = ""
        if ('/videos/' in vid['link']):
            post_id = vid['link']
        else:
            post_id = re.search(r'v=(\d+)', vid['link']).group(1)

        if seen:
            if post_id == start_id:
                print("Starting comment extraction with video: " + vid['title'])
                seen = False
            else:
                print("Already extracted comments for: " + vid['title'])
                continue

        likes = 0
        commentsCount = 0
        shares = 0
        comments = []

        # get the post (this gives a generator)
        gen = fs.get_posts(
            post_urls=[post_id],
            options={"comments": True}
        )

        # take 1st element of the generator which is the post we requested
        post = next(gen)

        # extract parts
        likes = post['likes']
        commentsCount = post['comments']
        shares = post['shares']

        if post['comments_full'] == [] :
            print('empty comments ...')
        for idx2, comment in enumerate(post['comments_full']):
            commenter_id = comment['commenter_id']
            comment_text = comment['comment_text']
            commenter_name = comment['commenter_name']
            comment_time = comment['comment_time']
            comment_id = comment['comment_id']
            comment = {
                'commenter_id': commenter_id,
                'comment_text': comment_text,
                'commenter_name': commenter_name,
                'comment_time': comment_time,
                'comment_id': comment_id
            }
            comments.append(comment)

        ################

        # # search for comments
        # for post in get_posts(post_urls=[post_id], options={"comments": True}):
        #     likes = post['likes']
        #     commentsCount = post['comments']
        #     shares = post['shares']

        #     # create list of comments to store
        #     for idx2, comment in enumerate(post['comments_full']):
        #         commenter_id = comment['commenter_id']
        #         comment_text = comment['comment_text']
        #         commenter_name = comment['commenter_name']
        #         comment = {
        #             'commenter_id': commenter_id,
        #             'comment_text': comment_text,
        #             'commenter_name': commenter_name 
        #         }
        #         comments.append(comment)
        
        data['videos'][idx]['likes'] = likes
        data['videos'][idx]['shares'] = shares
        data['videos'][idx]['commentsCount'] = commentsCount
        data['videos'][idx]['comments'] = comments

        print(data['videos'][idx])

        # Write the modified data back to the JSON file
        with open(filename, 'w') as file:
            json.dump(data, file, indent=4, sort_keys=True, default=str)

        print(vid['title'], " video comments saved!")
        time.sleep(5)

extract_comments("311821104406447", 'extracted_data/ranada_posts_extracted_comments.json')

#extract_comments("/carlossiguionreyna/videos/10156913824294107/", 'extracted_data/tordesillas_posts_extracted_comments.json')

# # get the post (this gives a generator)
# gen = fs.get_posts(
#     post_urls=[post_id],
#     options={"comments": True}
# )

# # take 1st element of the generator which is the post we requested
# post = next(gen)

# # extract the comments part
# comments = post['comments_full']

# # process comments as you want...
# for comment in comments:

#     # e.g. ...print them
#     print(comment)

#     # e.g. ...get the replies for them
#     for reply in comment['replies']:
#         print(' ', reply)

