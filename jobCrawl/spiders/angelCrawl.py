# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy.selector import Selector

# from bs4 import BeautifulSoup
# import requests
# import re

#Creates the item.
from jobCrawl.items import GitJobItem

class angelCrawler(CrawlSpider):  
  name = 'angelCrawler'
  
  allowed_domains = ['angel.co/jobs']  
  start_urls = ['https://angel.co/jobs']
  login_page = ['https://angel.co/login?utm_source=top_nav_home']

  rules = (
      Rule(LinkExtractor(allow=r'page/[0-9]/'), callback='parse_item', follow=True),
  )

  def init_request(self):
      print('INITIALIZE REQUEST')
      return Request(url=self.login_page, callback=self.login)

  def login(self, response):      
      return FormRequest.from_response(response,
                  formdata={'user[email]': 'anthonychung14@gmail.com', 'user[password]': 'bankai69'},
                  callback=self.check_login_response)

  def check_login_response(self, response):
      print("CHECKING LOGIN RESPONSE")
      self.log(response.body)
      # if "Hi Herman" in response.body:
      #     self.log("Successfully logged in. Let's start crawling!")
      #     # Now the crawling can begin..
      #     self.initialized()
      # else:
      #     self.log("Bad times :(")
      #     # Something went wrong, we couldn't log in, so nothing happens.

      return self.initialized()

  def parse_item(self, response):
      # recipes = Selector(response).xpath('//h2[@class="entry-title"]/a')
      # for recipe in recipes:
      #     url = recipe.xpath('@href').extract()[0]          
      #     yield scrapy.Request(url, callback=self.parse_recipe)
      print('trying to parse item now')
      yield

  def parse_job(self, response):      
      print('trying to parse job now')
      yield