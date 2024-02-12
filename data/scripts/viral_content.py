from string import punctuation
import json
import re

def get_viral_posts(reporter, count):
    with open('extracted_data/'+reporter+'_vid_extracted.json') as data_file:    
            data = json.load(data_file)

            videos = data['videos']

            newlist = sorted(videos, key=lambda d: d['views'], reverse=True) 

    # Write the modified data back to the JSON file
    with open('social_media/'+reporter+'_viral.json', 'w') as file:
        json.dump(newlist, file, indent=4, sort_keys=True, default=str)


get_viral_posts("ranada", 0)
get_viral_posts("tordesillas", 0)