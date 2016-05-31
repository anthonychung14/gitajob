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


from pymongo import MongoClient
client = MongoClient()
db = client.gitjob
collection = db.postings
companyProfiles = db.company

#create new list of companies
uniqCompany = collection.distinct('company')

print(len(uniqCompany))
for company in uniqCompany:  
  comp = collection.find_one({'company': company}, {'desc': 1})
  item = {
    'company': company,
    'desc': comp['desc']
  }
  companyProfiles.update({'company': company}, item, upsert=True)
