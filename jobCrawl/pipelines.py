# -*- coding: utf-8 -*-
import pymongo
from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

class MongoDBPipeline(object):
    def __init__(self):
      connection = pymongo.MongoClient(
          settings['MONGODB_SERVER'],
          settings['MONGODB_PORT']
      )
      db = connection[settings['MONGODB_DB']]
      self.collection = db[settings['MONGODB_COLLECTION']]
    
    def process_item(self, item, spider):      
      print("============ MONGO PROCESS =================")
      for data in item:
          if not data:              
              raise DropItem("Missing {0}!".format(data))    
      
      self.collection.update(
        {
          'job_title': item['job_title'], 
          'company_link': item['company_link']
        }, dict(item), upsert=True) 
      log.msg("posting added to MongoDB database!",
        level=log.DEBUG, spider=spider)
      
      return item

class GitJobPipeline(object):
    def process_item(self, item, spider):        
        print("DO YOU NEED THIS PIPELINE BROH")
        return item
