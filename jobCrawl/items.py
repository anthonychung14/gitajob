import scrapy

class GitJobItem(scrapy.Item):
    url = scrapy.Field()
    company = scrapy.Field()
    company_link = scrapy.Field()
    desc = scrapy.Field()
    img = scrapy.Field()
    longDescript = scrapy.Field()
    tag_data = scrapy.Field()
    job_title = scrapy.Field()
    skills = scrapy.Field()
    location = scrapy.Field()
    tagline = scrapy.Field()    
    salary = scrapy.Field() 
    why = scrapy.Field()    
    last_active = scrapy.Field()

class GitStaffItem(scrapy.Item):
    picture_url = scrapy.Field()
    linkedin = scrapy.Field()
    name = scrapy.Field()
    title = scrapy.Field()
    region = scrapy.Field()
