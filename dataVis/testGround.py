# -*- coding: utf-8 -*-

# import re
# from pymongo import MongoClient
# from bson.objectid import ObjectId

# client = MongoClient()
# db = client.gitjob
# collection = db.postings

# bullet = list(collection.find({'_id': ObjectId('5749d831f488534690225637')}))

# change = bullet[0]['location']

# egex = re.compile("u'2022'",re.UNICODE)

# bullet = u"\u2022"
# string =u"Fremont · Full Time"
# string2 = string.replace(bullet, "A")
# # newStr = re.sub(regex, "", string)
  # entry = {
  #   'company': company,
  #   'desc': comp['desc']
  # }


##TODO: NEEDS TO BE IMMEDIATELY AFTER SCRAPY'S ANGELCRAWLER RUNS
# ANGEL CRAWLS FOR POSTINGS
# WE TAKE A DISTINCT SET OF COMPANIES

# LOOP THROUGH THEM AS WE LOOKUP IN COMPANY DB
from pymongo import MongoClient
client = MongoClient()
db = client.gitjob
collection = db.postings
companyProfiles = db.company

#create new list of companies
uniqCompany = collection.distinct('company')

for company in uniqCompany:  
  #IF IT EXISTS IN THE COMPANY DATABASE, DO NOTHING
  if companyProfiles.find_one({'company': company}):
    pass;
  #ELSE, MAKE IT AND THEN ADD IT TO A LIST THAT YOU WRITE TO A TXT FILE OR SOMETHING
  #THESE ONES YOU WILL NEED TO SEARCH FOR LATER
  else:
    comp = collection.find_one({'company': company})
    item = comp
    del item['_id']
    del item['salary']
    del item['job_title']
    del item['url']  

    companyProfiles.update({'company': company}, item, upsert=True)
  

