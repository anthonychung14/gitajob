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
from lxml import etree

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
    # add in logic to customize the search terms

    for i in range(1,40): 
      self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
      time.sleep(4)

    print("=========== PARSE FUNCTION =============")
    elem = self.driver.find_element_by_class_name('startup-container')
    soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')
    company = soup.findAll('div', attrs={'class': 'browse_startups_table_row'})        
    
    for row in company:      
      item = GitJobItem()        
      item['company'] = row.find('a', attrs={'class': 'startup-link'}).text
      item['company_link'] = row.find('a', attrs={'class': 'website-link'}).text      
      item['last_active'] = row.find('div', attrs={'class': 'footer-bar'}).find('div',attrs={'class': 'active'}).text            

      tagline = row.find('div', attrs={'class': 'tagline'}).text
      if tagline is not None:
        item['tagline'] = tagline      
      
      try:
        item['desc'] = row.find('div', attrs={'class': 'details-row product'}).find('div', attrs={'class': 'description'}).text
      except:
        pass
      try:
        item['desc'] = row.find('div', attrs={'class': 'details-row why_us'}).find('div', attrs={'class': 'content'}).text
      except:
        pass 
    
      jobs = row.find('div', attrs={'class': 'details-row jobs'}).find('div' , attrs={'class': 'content'})      

      for div in jobs.findAll('div', attrs={'class': 'listing-row'}):                
        posting = div.find('div', attrs={'class': 'title'}).find('a')
        link = posting['href']
        item['url'] = link
        request = scrapy.Request(link, callback=self.parse_item)
        request.meta['item'] = item

        yield request
    print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ COMPLETE ^^^^^^^^^^^^^^^^^^^^^^^^^")
    return
      

  def parse_item(self, response):    
    print("+=================== PARSE BEGIN JOBS POST =============")
    #On the job posting page now
    soup = BeautifulSoup(response.body, 'lxml')
    item = response.meta['item']
    item['job_title'] = soup.find('h1', attrs={'class': 'u-colorGray3'}).text
    item['location'] = soup.find('div', attrs={'class': 'high-concept'}).text

    for div in soup.findAll('div', attrs={'class': 's-vgBottom0_5 u-colorGray9'}):
        if div.text == "Compensation":
          for sibling in div.find_next_siblings():
            if "$" in sibling.text:
              item['salary'] = sibling.text

        if div.text == "Skills":
          for i, sibling in enumerate(div.find_next_siblings()):
            if i == 0:
              item['skills'] = sibling.text

    #tag parsing    
    tags = []
    try:
      metaData = soup.find('div', attrs={'class': ' djls28 fpt69 _a _jm'})    
      data = metaData.find('div', attrs={'class': 'vital s-vgBottom1'})
      for anchor in data.findAll('a'):
        tags.append(anchor.text)
      item['tag_data'] = tags
    except:
      pass

    try:
      item['longDescript'] = soup.find('div', attrs={'class': 'job-description'}).text
    except:
      pass


    print("+=================== PARSE DONE =============")
    #selenium will click through this to the apply now button, found at
    # soup.find('div', attrs={'class': 'buttons js-apply'})
    yield item
    

    
      


    





