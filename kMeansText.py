import string
import collections
 
from nltk import word_tokenize
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from pprint import pprint

from pymongo import MongoClient
client = MongoClient()
db = client.gitjob
collection = db.postings
 
def process_text(text, stem=True):
    """ Tokenize text and stem words removing punctuation """
    text = text.encode('utf-8').translate(None, string.punctuation)
    tokens = word_tokenize(text)
 
    if stem:
        stemmer = PorterStemmer()
        tokens = [stemmer.stem(t) for t in tokens]
 
    return tokens
  
def cluster_texts(texts, clusters=3):
    """ Transform texts to Tf-Idf coordinates and cluster texts using K-Means """
    vectorizer = TfidfVectorizer(tokenizer=process_text,
                                 stop_words=stopwords.words('english'),
                                 max_df=0.5,
                                 max_features=200000,
                                 min_df=0.01,
                                 lowercase=True)
 
    tfidf_model = vectorizer.fit_transform(texts)
    km_model = KMeans(n_clusters=clusters)
    km_model.fit(tfidf_model)
 
    clustering = collections.defaultdict(list)
 
    for idx, label in enumerate(km_model.labels_):
        clustering[label].append(idx)
 
    return clustering
  
if __name__ == "__main__":    
    tags = []
    docs = collection.find({}, {'tag_data': 1, '_id': 0})
    idocs = collection.find({}, {'tag_data': 1, '_id': 1})
    
    ids = [doc['_id'] for doc in idocs]    

    for item in docs:        
        try:
            tags.append(item['tag_data'])
        except:
            pass
    
    newArray = [item for sublist in tags for item in sublist]
    clusters = cluster_texts(newArray, 7)
    # print(dict(clusters))



