#login to LinkedIn via your credentials
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

from jobCrawl.items import GitStaffItem

from pymongo import MongoClient


class linkedCrawler(InitSpider):
  name = 'linkedCrawler'

  allowed_domains = ['linkedin.com']
  login_page = 'https://www.linkedin.com/'
  search_page = 'https://www.linkedin.com/vsearch/f?adv=true'
  http_user = "anthonychung14@gmail.com"
  http_pass = "bankai69"
  start_urls = []

  def __init__(self):
    chromedriver = "/Users/ACKeepingItCoo/Downloads/chromedriver"
    os.environ["webdriver.chrome.driver"] = chromedriver
    self.driver = webdriver.Chrome(chromedriver)
    self.driver.implicitly_wait(30)

  
    print('================INITIALIZE REQUEST==================')
    self.driver.get(self.login_page)
    time.sleep(2)
    email = self.driver.find_element_by_id("login-email")
    password =  self.driver.find_element_by_id("login-password")
    email.send_keys("anthonychung14@gmail.com")
    password.send_keys("bankai69")
    
    self.driver.find_element_by_xpath("//input[@name='submit']").click()
    
    time.sleep(2)
    time.sleep(2)

    print("<<<<<<<<<<<<< FINISH REQUEST >>>>>>>>>>>>>>>")
    return self.initialized()

    #We are going to get a lot of search pages in a row,     
    def parse(self, response):
      for i in range(0,5):
        self.driver.get(self.search_page)
        print("$$$$$$$$$$$$$$$$$$$$$$$$$$$ iiiii", i)
        time.sleep(4)

        keyword = self.driver.find_element_by_id('advs-keywords')    
        company = self.driver.find_element_by_id('advs-company')
        keyword.send_keys("talent")
        company.send_keys("khan academy")      

        self.driver.find_element_by_xpath("//input[@name='submit']").click()
        self.driver.implicitly_wait(30)

        self.start_urls.append(self.driver.current_url)

        elem = self.driver.find_element_by_id('results-container')
        soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')        
        contacts = soup.findAll('li')
        for contact in contacts[0:5]:
            print(contact, "texttsss <<<<<<<<<<<<<<<", i)

    


  
    
    
  



#download data from the results page into mongodb

  #company_contacts underneath the company collection
    # Picture(linkedIn CDN)
    # Name
    # Title
    # LI profile URL
    #