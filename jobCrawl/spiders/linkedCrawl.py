#login to LinkedIn via your credentials
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.contrib.spiders.init import InitSpider
from scrapy.selector import Selector
from scrapy.http import Request, FormRequest

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

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
    client = MongoClient()
    db = client.gitjob    
    self.company = db.company  
    self.driver = webdriver.Chrome(chromedriver)
    self.driver.implicitly_wait(30)

  def init_request(self):
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
    #We are going to get a lot of search pages in a row,     
    
    for company in self.company.find({}):
      if company:
        try:
          self.driver.get(self.search_page)
          time.sleep(4)

          keyword = self.driver.find_element_by_id('advs-keywords')    
          company_input = self.driver.find_element_by_id('advs-company')
                
          keyword.send_keys("talent")      
          company_input.send_keys(company['company'])      

          self.driver.find_element_by_xpath("//input[@name='submit']").click()
          self.driver.implicitly_wait(30)
          
          time.sleep(4)
        
          elem = self.driver.find_element_by_id('results-container')
          soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')

          #push to
          contacts = soup.find('ol', attrs=({'id': 'results'})) 

          for contact in contacts:                
              #name        
              try:
                info = {
                'name': contact.find('a', attrs={'class': 'title main-headline'}).text,
                'linkedin': contact.find('a', attrs={'class': 'title main-headline'})['href'].split("&")[0], 
                'title': contact.find('p', attrs={'class': 'title'}).text,
                'img_url': contact.find('img', attrs={'class': 'entity-img'})['src'],
                'past': []
                }
                past = contact.findAll('p', attrs={'class': 'abstract-trunc'})
                for event in past:
                  info['past'].append(event.text)

                self.company.update(
                  {'company': company['company']}, 
                  {'$push': {'company_contacts': info}
               })      
              except:
                print("failed with ", contact)
                pass
        except:
          print("failed searching for talent and company")

              
        try:
          self.driver.get(self.search_page)
          time.sleep(4)
          
          company_input = self.driver.find_element_by_id('advs-company')        
          company_input.send_keys(company['company'])      

          self.driver.find_element_by_xpath("//input[@name='submit']").click()
          self.driver.implicitly_wait(30)
        
          time.sleep(4)
          time.sleep(4)

          elem = self.driver.find_element_by_id('results-container')
          soup = BeautifulSoup(elem.get_attribute('innerHTML'), 'lxml')
          contacts = soup.find('ol', attrs=({'id': 'results'}))            
    
          for contact in contacts:                
            #name        
            try:
              info = {
              'name': contact.find('a', attrs={'class': 'title main-headline'}).text,
              'linkedin': contact.find('a', attrs={'class': 'title main-headline'})['href'].split("&")[0], 
              'title': contact.find('p', attrs={'class': 'title'}).text,
              'img_url': contact.find('img', attrs={'class': 'entity-img'})['src'],
              'past': []
              }
              past = contact.findAll('p', attrs={'class': 'abstract-trunc'})
              for event in past:
                info['past'].append(event.text)

              self.company.update(
                {'company': company['company']}, 
                {'$push': {'company_contacts': info}
             })      
            except:
              print("failed with searching just for company", contact)
              pass   
        except:
          print("failed searching for talent and company")                 
          

      
        
        
        