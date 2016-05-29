# -*- coding: utf-8 -*-
import requests
import re
from scrapy.selector import Selector
from bs4 import BeautifulSoup
url = 'http://stackoverflow.com/jobs?searchTerm=software+engineer&type=permanent&location=san+francisco&range=50&distanceUnits=Miles&pg=2'
response = requests.get(url)
# html = response.content
# soup = BeautifulSoup(html, 'lxml')      

listings = Selector(text=response.content).xpath('//h1/a[@class="job-link"]')

for job in listings:
  print job.xpath('@href').extract()[0]
# print (Selector(response.content)






    




