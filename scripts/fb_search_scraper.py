# REQUIREMENTS
# selenium-related
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup as bs
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains

# other necessary ones
import urllib.request
from bs4 import BeautifulSoup as bs
import pandas as pd
import json
import time
import re
import datetime

# LOGIN
# set options as you wish
def login(link):
    option = Options()
    option.add_argument("--disable-infobars")
    option.add_argument("start-maximized")
    option.add_argument("--disable-extensions")

    with open('facebook_credentials.txt') as file:
        EMAIL = file.readline().split('"')[1]
        PASSWORD = file.readline().split('"')[1] #not getting password

    browser = webdriver.Chrome(executable_path="scripts/chromedriver", options=option)
    browser.get("http://facebook.com")
    browser.maximize_window()
    wait = WebDriverWait(browser, 30)
    email_field = wait.until(EC.visibility_of_element_located((By.NAME, 'email')))
    email_field.send_keys(EMAIL)
    pass_field = wait.until(EC.visibility_of_element_located((By.NAME, 'pass')))
    pass_field.send_keys(PASSWORD)
    pass_field.send_keys(Keys.RETURN)

    time.sleep(5)

    browser.get(link) # once logged in, free to open up any target page

    time.sleep(5)
    return browser

# SCROLL THROUGH SEARCH RESULTS
def scrollSearch(browser, max_size, save_path, xpath):
    count = 0
    switch = True
    old_numReviews = 0
    specifiedNumber = max_size # number of videos to get

    while switch:
        count += 1

        # my code
        #getVideo(browser) #might not need to open it actually 

        # scroll to the bottom
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(5)
        
        # process check
        # update path
        reviewList = browser.find_elements(By.XPATH, xpath)
        #print(reviewList)
        numReviews = len(reviewList)
        if old_numReviews < numReviews:
            print('Scroll Count:', count, '  numReviews:', numReviews)
        old_numReviews = numReviews
        
        # termination condition
        if numReviews >= specifiedNumber:
            archiveAtEnd(browser, reviewList, save_path)
            switch = False


# SCROLL BACK UP AND SAVE DATA
def archiveAtEnd(browser, reviewList, save_path):
    browser.execute_script("window.scrollTo(0, -document.body.scrollHeight);") # scroll back to the top
    time.sleep(10)
        
    # for idx, l in enumerate(reviewList):
    #     if idx % 10 == 0:
    #         if idx < 15:
    #             browser.execute_script("arguments[0].scrollIntoView();", reviewList[0])
    #         else:
    #             browser.execute_script("arguments[0].scrollIntoView();", reviewList[idx-15])
            
    #         time.sleep(1)
    #         try:
    #             browser.execute_script("arguments[0].scrollIntoView();", reviewList[idx+15])
    #         except:
    #             browser.execute_script("arguments[0].scrollIntoView();", reviewList[-1])

    #         time.sleep(1)
    #         browser.execute_script("arguments[0].scrollIntoView();", reviewList[idx])
            
    #         time.sleep(3)
    #         try:
    #             browser.execute_script("arguments[0].scrollIntoView();", reviewList[idx+5])
    #             time.sleep(3)
    #         except:
    #             browser.execute_script("arguments[0].scrollIntoView();", reviewList[-1])
    #         browser.execute_script("arguments[0].scrollIntoView();", reviewList[idx])

    #         time.sleep(3)
    with open(f'scraped_data/{save_path}_scraped.html',"w+", encoding="utf-8") as file:
        source_data = browser.page_source
        bs_data = bs(source_data, 'html.parser')
        file.write(str(bs_data.prettify()))
        print(f'written!')

# RUNNING EVERYTHING
def ranada_vid():
    browser = login('https://www.facebook.com/search/videos/?q=pia%20ranada&epa=FILTERS&filters=e30')
    scrollSearch(browser, 134, 'ranada_vid', "//div[@class='x1yztbdb']")

def ranada_posts():
    browser = login('https://www.facebook.com/search/posts/?q=pia%20ranada&epa=FILTERS&filters=eyJycF9jcmVhdGlvbl90aW1lIjoie1wibmFtZVwiOlwiY3JlYXRpb25fdGltZVwiLFwiYXJnc1wiOlwie1xcXCJzdGFydF95ZWFyXFxcIjpcXFwiMjAxNVxcXCIsXFxcInN0YXJ0X21vbnRoXFxcIjpcXFwiMjAxNS0xXFxcIixcXFwiZW5kX3llYXJcXFwiOlxcXCIyMDIwXFxcIixcXFwiZW5kX21vbnRoXFxcIjpcXFwiMjAyMC0xXFxcIixcXFwic3RhcnRfZGF5XFxcIjpcXFwiMjAxNS0xLTFcXFwiLFxcXCJlbmRfZGF5XFxcIjpcXFwiMjAyMC0xLTFcXFwifVwifSJ9')
    scrollSearch(browser, 62, 'ranada_posts', "//div[@class='x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z']")

ranada_posts()