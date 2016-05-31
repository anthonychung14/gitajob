# -*- coding: utf-8 -*-
from selenium import webdriver
import requests
import re, time, os
import datetime as dt

from pymongo import MongoClient

#Find 5 to get

#Angelist Apply Now button
class applyAngelist():      
  login_page = 'https://angel.co/users/login'

  def __init__(self):
    print("===============INIT==============")
    chromedriver = "/Users/ACKeepingItCoo/Downloads/chromedriver"
    os.environ["webdriver.chrome.driver"] = chromedriver
    self.driver = webdriver.Chrome(chromedriver)
    self.driver.implicitly_wait(30)

    self.driver.get(self.login_page)
    time.sleep(2)
    email = self.driver.find_element_by_id("user_email")
    password =  self.driver.find_element_by_id("user_password")
    email.send_keys("anthonychung14@gmail.com")
    password.send_keys("bankai69")
    
    self.driver.find_element_by_xpath("//input[@name='commit']").click()    
    time.sleep(2)
    time.sleep(2)

    self.init_request()

  def init_request(self):
    print('================INITIALIZE REQUEST==================')
    client = MongoClient()
    db = client.gitjob
    self.applications = db.applications  
    print(" <<<<<<<<<<<<< CONNECTION ESTABLISHED >>>>>>>>>>>>>> ")
  
    for job in self.applications.find({'status.queue': False}):        
      self.applyClick(job['company']['url'])
      self.applications.update({'_id': job["_id"]}, {'$set': {'status.queue': True, 'status.apply': True, 'status.phone': True, 'status.nope': True}})
      self.applications.update({'_id': job["_id"]}, {'$currentDate': {'status.applyDate': { "$type": 'date'}}})  

  def applyClick(self, url):    
    print('================APPLYING VIA CLICK==================')
    self.driver.get(url)    
    
    try:
      # self.driver.find_element_by_xpath("//div[@class='s-grid-colSm24']/div[@class='cta-container u-floatRight']/div/div/div[@class='buttons js-apply']").click()
      print("DO THE THING", url)
    
    except:
        print("Failed to apply. Please log me properly")

applyAngelist()

  #if there is a prompt, go to the DB to figure out which "note" to do

    
      


    





