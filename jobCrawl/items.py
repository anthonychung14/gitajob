import scrapy

class GitJobItem(scrapy.Item):
    title = scrapy.Field()
    job_link = scrapy.Field()
    location = scrapy.Field()
    email = scrapy.Field()
    skills = scrapy.Field()
    salary = scrapy.Field()
    location = scrapy.Field()
    size = scrapy.Field()
    active = scrapy.Field()
    desc = scrapy.Field()
    why = scrapy.Field()
