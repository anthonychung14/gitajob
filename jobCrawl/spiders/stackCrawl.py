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


class angelCrawler(CrawlSpider):  
  name = 'stackCrawler'
  
  allowed_domains = ['stackoverflow.com']  
  start_urls = ['http://stackoverflow.com/jobs?searchTerm=software+engineer&type=permanent&location=san+francisco&range=50&distanceUnits=Miles']  

  rules = (
    Rule(LinkExtractor(allow=r'(/jobs)/[1-9][0-9]*/([^\s]+)'), callback='parse_item', follow=True),  
  )
  
  def parse_item(self, response):            
    # add in logic to customize the search terms    
    print("=========== PARSE FUNCTION =============")        
    print(response, "what where am I coming from")
    # listings = Selector(text=response.body).xpath('//h1/a[@class="job-link"]')
    # for job in listings:
    #   url = job.xpath('@href').extract()[0]
    #   yield scrapy.Request("stackoverflow.com"+url, callback=self.parse_posting)

    # for row in company:      
    #   item = GitJobItem()        
    #   item['company'] = row.find('a', attrs={'class': 'startup-link'}).text
    #   item['company_link'] = row.find('a', attrs={'class': 'website-link'}).text      
    #   item['last_active'] = row.find('div', attrs={'class': 'footer-bar'}).find('div',attrs={'class': 'active'}).text
    #   tagline = row.find('div', attrs={'class': 'tagline'}).text
    #   if tagline is not None:
    #     item['tagline'] = tagline      
    #   item['desc'] = row.find('div', attrs={'class': 'details-row product'}).find('div', attrs={'class': 'description'}).text
    
    #   jobs = row.find('div', attrs={'class': 'details-row jobs'}).find('div' , attrs={'class': 'content'})      

    #   for div in jobs.findAll('div', attrs={'class': 'listing-row'}):                
    #     posting = div.find('div', attrs={'class': 'title'}).find('a')
    #     link = posting['href']
    #     item['url'] = link
    #     request = scrapy.Request(link, callback=self.parse_item)
    #     request.meta['item'] = item

    #     yield request      
      

  def parse_posting(self, response):    
    print("+=================== PARSE BEGIN JOBS POST =============")
    #On the job posting page now
    # soup = BeautifulSoup(response.body, 'lxml')
    # item = response.meta['item']
    # item['job_title'] = soup.find('h1', attrs={'class': 'u-colorGray3'}).text
    # item['location'] = soup.find('div', attrs={'class': 'high-concept'}).text

    # for div in soup.findAll('div', attrs={'class': 's-vgBottom0_5 u-colorGray9'}):
    #     if div.text == "Compensation":
    #       for sibling in div.find_next_siblings():
    #         if "$" in sibling.text:
    #           item['salary'] = sibling.text

    #     if div.text == "Skills":
    #       for i, sibling in enumerate(div.find_next_siblings()):
    #         if i == 0:
    #           item['skills'] = sibling.text

    # #tag parsing    
    # tags = []
    # metaData = soup.find('div', attrs={'class': ' djls28 fpt69 _a _jm'})    
    # data = metaData.find('div', attrs={'class': 'vital s-vgBottom1'})
    # for anchor in data.findAll('a'):
    #   tags.append(anchor.text)
    # item['tag_data'] = tags

    # print("+=================== PARSE DONE =============")
    # #selenium will click through this to the apply now button, found at
    # # soup.find('div', attrs={'class': 'buttons js-apply'})
    yield
    

    
      


    





