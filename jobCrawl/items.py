import scrapy

class GitJobItem(scrapy.Item):
    # company = scrapy.Field()
    company_link = scrapy.Field()
    job_title = scrapy.Field()
    # job_link = scrapy.Field()
    # location = scrapy.Field()
    # email = scrapy.Field()
    skills = scrapy.Field()
    salary = scrapy.Field()
    # location = scrapy.Field()
    # size = scrapy.Field()
    # active = scrapy.Field()
    desc = scrapy.Field()
    # why = scrapy.Field()
