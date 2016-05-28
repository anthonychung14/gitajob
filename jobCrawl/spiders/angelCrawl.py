# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.contrib.spiders.init import InitSpider
from scrapy.selector import Selector
from scrapy.http import Request, FormRequest

from bs4 import BeautifulSoup
from selenium import webdriver

import requests
import re, time, os

#Creates the item.
from jobCrawl.items import GitJobItem


class angelCrawler(InitSpider):  
  name = 'angelCrawler'
  
  allowed_domains = ['angel.co']  
  login_page = 'https://angel.co/users/login'
  start_urls = ['https://angel.co/jobs']
  http_user = "anthonychung14@gmail.com"
  http_pass = "bankai69"

  rules = (
    Rule(LinkExtractor(allow=r'.*\/(jobs)$'), callback='parseTable', follow=True),  
  )

  def __init__(self):
    chromedriver = "/Users/ACKeepingItCoo/Downloads/chromedriver"
    os.environ["webdriver.chrome.driver"] = chromedriver
    self.driver = webdriver.Chrome(chromedriver)

  def init_request(self):
    print('================INITIALIZE REQUEST==================')
    self.driver.get(self.login_page)
    time.sleep(2)
    email = self.driver.find_element_by_id("user_email")
    password =  self.driver.find_element_by_id("user_password")
    email.send_keys("anthonychung14@gmail.com")
    password.send_keys("bankai69")
    
    self.driver.find_element_by_xpath("//input[@name='commit']").click()
    
    time.sleep(2)
    time.sleep(2)

    return self.initialized()      
  
  def parse(self, response):
    # parse out a little bit more for each job listing
    print("=========== PARSE FUNCTION =============")

    elem = self.driver.find_element_by_class_name('startup-container')
    soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')
    listing = soup.findAll('div', attrs={'class': 'job_listings'})    
    
    for row in listing:      
      item = GitJobItem()        
      item['company_link'] = row.find('a', attrs={'class': 'website-link'}).text.encode('utf-8')
      
      skills =  row.find('div', attrs={'class': 'details-row jobs'}).findAll('div', attrs={'class': 'content'})
      parseSkill = []
      for tag in skills:
        skill = tag.find('div', attrs={'class': 'tags'}).text.encode('utf-8')         
        parseSkill.append(skill)

      item['skills'] = parseSkill
      
      item['desc'] = row.find('div', attrs={'class': 'description'}).text.encode('utf-8')    
      item['salary'] = row.find('div', attrs={'class': 'compensation'}).text.encode('utf-8')
              
      jobs = row.findAll('div', attrs={'class': 'title'})            
      for job in jobs:
        job_post = job.findAll('a')
        for a in job_post:
          request = scrapy.Request(a['href'], callback=self.parseTable)
          request.meta['item'] = item
          yield request      
      

  def parseTable(self, response):    
    soup = BeautifulSoup(response.body, 'lxml')
    item = response.meta['item']
    item['job_title'] = soup.find('h1', attrs={'class': 'u-colorGray3'}).text
    item['location'] = soup.find('div', attrs={'class': 'high-concept'}).text
    
    #selenium will click through this to the apply now button, found at
    # soup.find('div', attrs={'class': 'buttons js-apply'})
    
    yield item
    

    
      


    





