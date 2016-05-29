import scrapy

class GitJobItem(scrapy.Item):
    url = scrapy.Field()
    company = scrapy.Field()
    company_link = scrapy.Field()
    desc = scrapy.Field()
    longDescript = scrapy.Field()
    tag_data = scrapy.Field()
    job_title = scrapy.Field()
    skills = scrapy.Field()
    location = scrapy.Field()
    tagline = scrapy.Field()    
    salary = scrapy.Field()    
    last_active = scrapy.Field()
    
    # job_link = scrapy.Field()
    # email = scrapy.Field()
    # size = scrapy.Field()
    # why = scrapy.Field()
