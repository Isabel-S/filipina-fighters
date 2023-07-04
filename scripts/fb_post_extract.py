from cgitb import text
from bs4 import BeautifulSoup as bs
from datetime import datetime
import json

# turn into json format
# {posts:
#     [
#         {
#             username: ,
#             #date: ,
#             text: ,
#             reactions: ,
#             image: ,
#         }
#     ]
# }


def parse_reacts(reacts_string):
    reacts_int = 0
    if reacts_string[-1] == "K":
        reacts_int = int(float(reacts_string[:-1])) * 1000
    elif reacts_string[-1] == "M":
        reacts_int = int(float(reacts_string[:-1]) * 1000000)
    else:
        reacts_int = int(reacts_string)
    return reacts_int

def extract_ranada(filename, newfile):
    posts = []
    with open(f'scraped_data/{filename}.html',"r", encoding="utf-8") as file:
        f = file.read()
    page = bs(f, 'lxml')
    reviews = page.find_all('div', {
        'class':'x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z'
                               })
    
    # go through each review to find
    for idx,r in enumerate(reviews):

        vid = r.find('video')
        if (vid):
            continue

        post = {}

        user = ""
        users=r.find_all('a',{'class':'x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f'})
        if users[0]['role'] == "link":
            if '/groups/' not in users[0]['href']:
                user = users[0]['href'].split("facebook.com/", 1)[1].split("?", 1)[0]
        else:
            user = users[1]['href'].split("facebook.com/", 1)[1].split("?", 1)[0]
        
        text = ""
        all_text = r.find_all('div', {'dir': 'auto', 'style': 'text-align: start;'})
        for idx2, line in enumerate(all_text):
            text += line.find_all(string=True, recursive=False)[0].strip() + " "

        reactions = 0
        if r.find('span', {'class': 'xt0b8zv x1e558r4'}):
           reactions = parse_reacts(r.find('span', {'class': 'xt0b8zv x1e558r4'}).getText().strip())

        img = ""
        image_wrap = r.find('img', {'class': 'x1ey2m1c xds687c x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3 xl1xv1r'})
        if (image_wrap):
            img = image_wrap['src']
        else:
            image_wrap = r.find('img', {'class': 'x1ey2m1c xds687c x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3'})
            if (image_wrap):
                img = image_wrap['src']

        post = {
            'user': user,
            'text': text,
            'reactions': reactions,
            'image': img
        }

        posts.append(post)
    data = {'posts': posts}

    json_data = json.dumps(data, indent=4, sort_keys=True, default=str)
    with open("extracted_data/"+newfile+".json", "w") as outfile:
        outfile.write(json_data)
    
# extract_ranada('ranada_posts_scraped', 'ranada_posts_extracted')
extract_ranada('tordesillas_posts_scraped', 'tordesillas_posts_extracted')
# turn json file into CSV format, one row per video entry