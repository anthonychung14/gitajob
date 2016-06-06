# -*- coding: utf-8 -*-
import requests
import re
from scrapy.selector import Selector
from bs4 import BeautifulSoup
url = 'http://stackoverflow.com/jobs?searchTerm=software+engineer&type=permanent&location=san+francisco&range=50&distanceUnits=Miles&pg=2'
response = requests.get(url)
# html = response.content
# soup = BeautifulSoup(html, 'lxml')      

# listings = Selector(text=response.content).xpath('//h1/a[@class="job-link"]')

# for job in listings:
#   print job.xpath('@href').extract()[0]

# soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')

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

class testCrawler(InitSpider):  
  name = 'testCrawler'
  
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
    print("<<<<<<<<<<<<< FINISH REQUEST >>>>>>>>>>>>>>>")        

    return self.initialized()      


  def parse(self, response):            
    elem = self.driver.find_element_by_class_name('startup-container')
    soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')
    company = soup.findAll('div', attrs={'class': 'browse_startups_table_row'})        
    for row in company:      
      image = row.find('div', attrs={'class': "browse-table-row-pic"})
      print(image, "IMG @@@@@@@@@@@@@@@@@@@@@@@@@@")
      for tag in image.findAll('a'):
        print(tag, "does this work at least")
        for img in tag.findAll('img'):
          print(img['src'], "SOUROUCOUOUEOUE")
    # print (Selector(response.content)






    




