import string
import collections
 
from nltk import word_tokenize
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from pprint import pprint

1from pymongo import MongoClient
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
    docs = collection.find({}, {'tag_data': 1, '_id': 1, 'company': 1})
    tagsArray = []

    for item in docs:
        try:
            for term in item['tag_data']:
                tagsArray.append({'id': item['_id'], 'tag': term, 'company': item['company']})
        except:
            pass

    
    #for every tag, attach the company owner to it. use index as unique identifier
    companyTags = [{'tag': tag['tag'], 'company': tag['company']} for tag in tagsArray]
    companyHash = {i: x['company'] for i, x in enumerate(companyTags)}
    
    #ties every index to a specific tag
    tags = [tag['tag'] for tag in tagsArray]
    tagHash = {i: x for i, x in enumerate(tags)}

    ids = [tag['id'] for tag in tagsArray]
    num_clusters = 7
    
    clusters = cluster_texts(tags, num_clusters)
    
    clusteredSet = {}
    clusteredTerms = {}
    clusteredCompanies = {}    
    clusteredCompanySet = {}
    
    for cluster in clusters:
        clusteredTerms[cluster] = []
        clusteredCompanies[cluster] = []
        for index in clusters[cluster]:
            clusteredTerms[cluster].append(tagHash[index])
            clusteredCompanies[cluster].append(companyHash[index])

    for grouping in clusteredTerms:
        clusteredSet[grouping] = set(clusteredTerms[grouping])        

    for group in clusteredCompanies:
        clusteredCompanySet[group] = set(clusteredCompanies[grouping])

    # Now that sorting is complete, let's figure out the top words nearest to cluster centroid

    # order_centroids = km.cluster_centers_.argsort()[:,::-1]

    # for i in range(num_clusters):
    #     print("Cluster %d words:" % i, end='')

    #     for ind in order_centroids[i, :6]:
    #         print(' %s' % vocab_frame.ix[terms[ind].split(' ')].values.tolist()[0][0].encode('utf-8', 'ignore'), end=',')


    print(clusteredCompanies)



    # cursor = collection.aggregate([{
    #     '$group': {
    #         '_id': None,
    #         'ids': {'$push': '$_id'},
    #         'tags': {'$push': '$tag_data'}
    #     }
    # }])
    # data = cursor.next()    
