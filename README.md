# #Presstitute

This repo holds the code for the website – [https://philippine-presstitutes.github.io/](https://philippine-presstitutes.github.io/) – and data analysis (‘data’ folder) for the research presented on the site. This website is a longform article on the “Online Violence Faced By Filipina Journalists and Fighting Back with Data”. The accompanying text for this site is in a [GoogleDoc](https://docs.google.com/document/d/1Z-6rlWvs_70CEHUZHIwPLRhYmQEHSYC3iNyV6bBMKDU/edit), and slides for this used in a final research presentation are [here](https://docs.google.com/presentation/d/10xhjGeS2pM8kFp60TTcwAT_G4g0tEveGz27zVPkQGig/edit#slide=id.g276048eb516_0_0). 

This website originally was a way to visualize my longform document article to a small audience in a short amount of time, and its original form is in the ‘raw-html-js’ branch. After the summer, I converted it to React for modularity and cleanliness. 

This is the culmination of my month-long research while being a Susan Heck scholar at the Clayman Institute for Gender Research in summer 2023. Immense thank you to Claire Urbanski, my research advisor, and Alison Dahl Crossley, my program coordinator. Thank you! 

This website is largely inspired by The New York Times interactive articles, like the award-winning [Snowfall](https://www.nytimes.com/projects/2012/snow-fall/index.html#/?part=tunnel-creek). My research is also inspired by the [ICFJ paper on Maria Ressa](https://www.icfj.org/sites/default/files/2021-03/Maria%20Ressa-%20Fighting%20an%20Onslaught%20of%20Online%20Violence_0.pdf). 

The ReadMe will briefly go over my process and files used for data collection and analysis, and the website itself. 

Discretion: This repo is not meant to be replicable, but in the event someone wants to go through it, the explanation below may be of help. That said, while the website is pretty clear, a lot of the scripts are rough exploration codes!


## Analysis

The code I wrote and ran for analysis can be found in ‘data’ and within that, ‘scripts’. The resulting visualizations can be found in ‘html’ in the React folder.


### Collecting Data


#### Scrape 

Most of the code for scraping can be found at ‘fb_search_scraper.py’. I searched for public posts containing the names of the journalists. Facebook is pretty strict with scraping, and has no easy API for it, so you have to essentially run a bot to collect data which takes a lot of time! I did this with a separate facebook account. The scraped data is in the ‘scraped_data’ folder.


#### Extract 

Code for extracting can be found at ‘fb_comments_extract.py’ ‘fb_post_extract.py’ and ‘fb_vid_extract.py’. I essentially parsed and did some BeautifulSoup magic. My process involved inspecting the scraped webpage and observing the html. I usually got dates, usernames, texts, images (if any), and a rough estimate of likes and comments. The extracted data is in the ‘extracted_data’ folder.


### Analyzing Data and Visualizations


#### Initial Findings

From the extracted data you can quickly do time analysis (bar charts) and find popular words (wordclouds) without too much data wrangling. A bar chart by popularity per month is here: ‘bar_timeline.ipynb’ and word cloud for hashtags is here ‘hashtag_scripts.py’.


#### Abuse Terms

Unfortunately, the method to find abuse terms (e.g. sexist, racist, attacks on credibility, etc.) was rather manual. I built off a dataset of inappropriate words from the UK that already labeled words if they had sexist, racist, or homophobic language. I added Filipino words and removed irrelevant words. I then ran a script to go through posts and identify and count these terms ‘abuse_scripts.py’.

With these terms labeled, I could create pie charts and other data on the type of language used, like ‘pie_abuse_counts.ipynb’


#### Clusters

Arguably the most exciting data analysis! The code is found in ‘fast_cluster_notebook.ipynb’.

I used SentenceTransformer('all-MiniLM-L6-v2') to create embeddings (numerical representations) of the language used in the posts. I then used a function called community_detection() to find clusters (groups of numerically similar language, and therefore hopefully groups of similar language). I then manually went through each cluster (around 80) and labeled them based on what I thought the meaning was. I often grouped similar clusters together. After labeling, it was time to visualize the clusters.

I used TSNE from sklearn.manifold to reduce the dimensionality of the embeddings (the embeddings are of many dimensions and TSNE makes it visible on a 2d scale but still encapsulates its location). Then a simple scatter plotly can visualize the clusters. 


## Website

To plan the website, I first wrote out the article on a document, complete with images and where intended visualizations would go. After that, I took heavy inspiration from the NYT interactive articles of the year where they feature selected interactive articles each month.

For the fun scrolling effects, I used Scrollama.
