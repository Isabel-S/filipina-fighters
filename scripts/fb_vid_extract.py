from bs4 import BeautifulSoup as bs
from datetime import datetime
import json


## information to get
## title of video
## video link (/ post link)
## length (?)
## description
## user who made it 
## commments (later thing)

# turn into json format
# {videos:
#     [
#         {
#             link: ,
#             title: ,
#             description: ,
#             username: ,
#             date: ,
#             views: ,
#             thumbnail: ,
#         }
#     ]
# }

def parse_date_views(date_views):
    # Splitting the string into date, view count, and status
    split_string = date_views.split(" · ")

    date = split_string[0]
    view_count_string = "0"
    if len(split_string) > 1:
        view_count_string = split_string[1]
    else:
        view_count_string = "0"
    view_count_int = 0

    # Checking for "Was live" case
    if "Was live" in view_count_string:
        view_count_string = date
        date = ""

    view_count_string = view_count_string.replace(" views", "")
    # Converting view count to an integer
    if view_count_string[-1] == "K":
        view_count_int = int(float(view_count_string[:-1])) * 1000
    elif view_count_string[-1] == "M":
        view_count_int = int(float(view_count_string[:-1]) * 1000000)
    else:
        view_count_int = int(view_count_string)

    date_obj = ""

    # Converting date to a date type (if available)
    if not date:
        date_obj = ""
    elif len(date) > 6:
        date_obj = datetime.strptime(date, "%b %d, %Y").date()
    else:
        # Append assumed year (2023) to the date string and convert to date type
        date_with_year = date + ", 2023"
        date_obj = datetime.strptime(date_with_year, "%b %d, %Y").date()
    
    return date_obj, view_count_int

def extract_ranada(filename, newfile):
    videos = []
    with open(f'scraped_data/{filename}.html',"r", encoding="utf-8") as file:
        f = file.read()
    page = bs(f, 'lxml')
    reviews = page.find_all('div', {
        'class':'x1yztbdb'
                               })
    
    # go through each review to find
    for idx,r in enumerate(reviews):

        if len(r["class"]) != 1:
         continue

        video = {}
        link=r.find('a',{'class': 'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1rg5ohu x1a2a7pz x6ikm8r x10wlt62 x1n2onr6 x1fb2l0r xafpxmx x30kzoy x9jhf4c xgqcy7u x1lq5wgf'})['href']
        title=r.find('a',{'class': 'x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g xt0b8zv x1s688f'}).getText().strip()
        des_wrap=r.find('span',{'class':'x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1nxh6w3 x1sibtaa xo1l8bm xzsf02u x1yc453h'})
        description=des_wrap.find('span',{'class':'x1lliihq x6ikm8r x10wlt62 x1n2onr6'}).getText().strip()
        user=r.find('a',{'class': 'x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g xt0b8zv xo1l8bm'})['href'].replace("/watch/", "").replace("https://www.facebook.com/","").rstrip('/')
        date_views_wrap=r.find('span', {'class': 'x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1nxh6w3 x1sibtaa xo1l8bm xi81zsa'})
        date_views=date_views_wrap.find('div', {'class': ''}).getText().strip()
        date, views = parse_date_views(date_views)
        thumbnail=r.find('img')['src']

        video = {
            'link': link,
            'title': title,
            'description': description,
            'user': user,
            'date': date,
            'views': views,
            'thumbnail': thumbnail
        }
        videos.append(video)
    data = {'videos': videos}

    json_data = json.dumps(data, indent=4, sort_keys=True, default=str)
    with open("extracted_data/"+newfile+".json", "w") as outfile:
        outfile.write(json_data)
    
extract_ranada('ranada_vid_scraped', 'ranada_vid_extracted')
# turn json file into CSV format, one row per video entry