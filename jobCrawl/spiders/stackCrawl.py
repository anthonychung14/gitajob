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


class stackCrawl(InitSpider):  
  name = 'stackCrawl'
  
  allowed_domains = ['stackoverflow.com']  
  login_page = 'https://careers.stackoverflow.com/users/login'
  start_urls = ['https://angel.co/jobs']
  http_user = "anthonychung14@gmail.com"
  http_pass = "bankai69"

  rules = (
    Rule(LinkExtractor(allow=r'.*\/(jobs)$'), callback='parse_item', follow=True),  
  )

  def __init__(self):
    chromedriver = "/Users/ACKeepingItCoo/Downloads/chromedriver"
    os.environ["webdriver.chrome.driver"] = chromedriver
    self.driver = webdriver.Chrome(chromedriver)
    self.driver.implicitly_wait(30)

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
    time.sleep(5)



    for i in range(1,20): 
      self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
      time.sleep(4)

    print("=========== PARSE FUNCTION =============")
    elem = self.driver.find_element_by_class_name('startup-container')
    soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')
    listing = soup.findAll('div', attrs={'class': 'job_listings'})    
    
    for row in listing:      
      item = GitJobItem()        
      item['company_link'] = row.find('a', attrs={'class': 'website-link'}).text.encode('utf-8')
      item['tagline'] = row.find('div', attrs={'class': 'tagline'}).text.encode('utf-8')
      skills =  row.find('div', attrs={'class': 'details-row jobs'}).findAll('div', attrs={'class': 'content'})
      item['url'] = response.url
      item['desc'] = row.find('div', attrs={'class': 'description'}).text.encode('utf-8')    
    
      jobs = row.findAll('div', attrs={'class': 'details-row jobs'})            
      for item in jobs:
        listJobs = item.findAll('div', attrs={'class': 'listing-row'})
        for job in listJobs:
          job_post = job.find('a')        
          request = scrapy.Request(job_post['href'], callback=self.parse_item)
          request.meta['item'] = item
          yield request      
      

  def parse_item(self, response):    
    soup = BeautifulSoup(response.body, 'lxml')
    item = response.meta['item']
    item['salary'] = soup.find('div', attrs={'class': 's-vgBottom2'}).text.encode('utf-8')
    item['job_title'] = soup.find('h1', attrs={'class': 'u-colorGray3'}).text
    item['location'] = soup.find('div', attrs={'class': 'high-concept'}).text

    #tag parsing    
    tags = []
    metaData = soup.find('div', attrs={'class': ' djls28 fpt69 _a _jm'})    
    data = metaData.find('div', attrs={'class': 'vital s-vgBottom1'})
    for anchor in data.findAll('a'):
      tags.append(anchor.text)
    item['tag_data'] = tags
    
    #selenium will click through this to the apply now button, found at
    # soup.find('div', attrs={'class': 'buttons js-apply'})
    yield item
    

    
      


    





