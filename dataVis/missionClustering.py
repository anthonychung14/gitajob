from __future__ import print_function
import os  

import matplotlib.pyplot as plt
import matplotlib as mpl
import mpld3

from sklearn.manifold import MDS

import numpy as np
import pandas as pd
import nltk
import re
import os
import codecs
from sklearn import feature_extraction
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.cluster import KMeans
from scipy.cluster.hierarchy import ward, dendrogram

from sklearn.externals import joblib
from nltk.stem.snowball import SnowballStemmer

# open client connection with mongo
from pymongo import MongoClient
client = MongoClient()
db = client.gitjob
collection = db.postings
companyProfiles = db.company

#data setup

textDocs = collection.aggregate([
  {
    '$group': {
      'name': {'$first': '$company'},
      '_id': '$_id',
      'desc': {'$first': '$desc'},
      'longDescript': {'$first': '$longDescript'},
      'tag_data': {'$first': '$tag_data'}
    }
  }, {
    '$project': {
      'company': '$name',
      'id': '$_id',
      'desc': '$desc',
      'longDescript': '$longDescript',
      'tag_data': '$tag_data'
    }
  }
])

companyArray = []
textDoc = []

for item in companyProfiles.find({}):    
  companyArray.append(item['company'])  
  textDoc.append(item['desc'])

#use NLTK
stopwords = set(nltk.corpus.stopwords.words('english'))

#attempting to add words to stopwords set
stopwords |= {b"'s"}
stemmer = SnowballStemmer("english")

def tokenize_and_stem(text):
    # first tokenize by sentence, then by word to ensure that punctuation is caught as it's own token
    tokens = [word for sent in nltk.sent_tokenize(text) for word in nltk.word_tokenize(sent)]
    filtered_tokens = []
    
    # filter out any tokens not containing letters (e.g., numeric tokens, raw punctuation)
    for token in tokens:
        if re.search('[a-zA-Z]', token):
            filtered_tokens.append(token)
    stems = [stemmer.stem(t) for t in filtered_tokens]
    return stems

def tokenize_only(text):
    # first tokenize by sentence, then by word to ensure that punctuation is caught as it's own token
    tokens = [word.lower() for sent in nltk.sent_tokenize(text) for word in nltk.word_tokenize(sent)]
    filtered_tokens = []
    
    # filter out any tokens not containing letters (e.g., numeric tokens, raw punctuation)
    for token in tokens:
        if re.search('[a-zA-Z]', token):
            filtered_tokens.append(token)
    return filtered_tokens


#Flatten list
totalvocab_stemmed = []
totalvocab_tokenized = []
for i in textDoc:
    allwords_stemmed = tokenize_and_stem(i) #for each item in 'synopses', tokenize/stem
    totalvocab_stemmed.extend(allwords_stemmed) #extend the 'totalvocab_stemmed' list
    
    allwords_tokenized = tokenize_only(i)
    totalvocab_tokenized.extend(allwords_tokenized)

vocab_frame = pd.DataFrame({'words': totalvocab_tokenized}, index = totalvocab_stemmed)

from sklearn.feature_extraction.text import TfidfVectorizer

#define vectorizer parameters
tfidf_vectorizer = TfidfVectorizer(max_df=0.85, max_features=200000,
                                 min_df=0.2, stop_words='english',
                                 use_idf=True, tokenizer=tokenize_and_stem, ngram_range=(1,3))

tfidf_matrix = tfidf_vectorizer.fit_transform(textDoc) #fit the vectorizer to compArray

terms = tfidf_vectorizer.get_feature_names()
dist = 1 - cosine_similarity(tfidf_matrix)

#TODO: hierarchical doc clustering

linkage_matrix = ward(dist)

fig, ax = plt.subplots(figsize=(15, 20)) # set size
ax = dendrogram(linkage_matrix, orientation="right", labels=companyArray);

plt.tick_params(\
    axis= 'x',          # changes apply to the x-axis
    which='both',      # both major and minor ticks are affected
    bottom='off',      # ticks along the bottom edge are off
    top='off',         # ticks along the top edge are off
    labelbottom='off')

plt.tight_layout() #show plot with tight layout

# plt.show() UNCOMMENT TO DRAW HIERARCHY


#K-means clustering and pickle
num_clusters=5
km = KMeans(n_clusters=num_clusters)

km.fit(tfidf_matrix)
clusters = km.labels_.tolist()

joblib.dump(km, 'story_cluster.pkl')

# Doesn't work. Can't seem to load path

# km = joblib.load('/Users/ACKeepingitCoo/Desktop/gitjob/dataVis/story_cluster.pk1')
# clusters = km.labels_.toList()

#Convert to panda DF
companies = {'companies': companyArray, 'cluster': clusters, 'mission': textDoc}

frame = pd.DataFrame(companies, index=[clusters], columns=['companies', 'cluster'])
print(frame['cluster'].value_counts())

print("Top terms per cluster:")
print()
#sort cluster centers by proximity to centroid
order_centroids = km.cluster_centers_.argsort()[:, ::-1] 

for i in range(num_clusters):
    print("Cluster %d words:" % i, end='')
    
    for ind in order_centroids[i, :6]: #replace 6 with n words per cluster
        print(' %s' % vocab_frame.ix[terms[ind].split(' ')].values.tolist()[0][0].encode('utf-8', 'ignore'), end=',')
    print() #add whitespace
    print() #add whitespace
    
    print("Cluster %d companies:" % i, end='')
    for company in frame.ix[i]['companies'].values.tolist():
        print(' %s,' % company, end='')
    print() #add whitespace
    print() #add whitespace
    
print()
print()

MDS()

# convert two components as we're plotting points in a two-dimensional plane
# "precomputed" because we provide a distance matrix
# we will also specify `random_state` so the plot is reproducible.
mds = MDS(n_components=2, dissimilarity="precomputed", random_state=1)

pos = mds.fit_transform(dist)  # shape (n_components, n_samples)

xs, ys = pos[:, 0], pos[:, 1]
print()
print()

#######

cluster_colors = {0: '#1b9e77', 1: '#d95f02', 2: '#7570b3', 3: '#e7298a', 4: '#66a61e'}
#set up cluster names using a dict
cluster_names = {0: '1', 
                 1: '2', 
                 2: '3', 
                 3: '4', 
                 4: '5'}

#create data frame that has the result of the MDS plus the cluster numbers and titles
df = pd.DataFrame(dict(x=xs, y=ys, label=clusters, company=companyArray)) 

#group by cluster
groups = df.groupby('label')


# set up plot
fig, ax = plt.subplots(figsize=(17, 9)) # set size
ax.margins(0.05) # Optional, just adds 5% padding to the autoscaling

#iterate through groups to layer the plot
#note that I use the cluster_name and cluster_color dicts with the 'name' lookup to return the appropriate color/label
for name, group in groups:
    ax.plot(group.x, group.y, marker='o', linestyle='', ms=12, 
            label=cluster_names[name], color=cluster_colors[name], 
            mec='none')
    ax.set_aspect('auto')
    ax.tick_params(\
        axis= 'x',          # changes apply to the x-axis
        which='both',      # both major and minor ticks are affected
        bottom='off',      # ticks along the bottom edge are off
        top='off',         # ticks along the top edge are off
        labelbottom='off')
    ax.tick_params(\
        axis= 'y',         # changes apply to the y-axis
        which='both',      # both major and minor ticks are affected
        left='off',      # ticks along the bottom edge are off
        top='off',         # ticks along the top edge are off
        labelleft='off')
    
ax.legend(numpoints=1)  #show legend with only 1 point

#add label in x,y position with the label as the film company
for i in range(len(df)):
    ax.text(df.ix[i]['x'], df.ix[i]['y'], df.ix[i]['company'], size=8)  
    
# plt.show() #show the plot

#uncomment the below to save the plot if need be
plt.savefig('clusters_small_noaxes.png', dpi=200)