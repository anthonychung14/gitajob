import scrapy

class GitJobItem(scrapy.Item):
    # company = scrapy.Field()
    company_link = scrapy.Field()
    job_title = scrapy.Field()
    location = scrapy.Field()
    url = scrapy.Field()
    tagline = scrapy.Field()
    # job_link = scrapy.Field()
    # email = scrapy.Field()
    tag_data = scrapy.Field()
    salary = scrapy.Field()
    # location = scrapy.Field()
    # size = scrapy.Field()
    # active = scrapy.Field()
    desc = scrapy.Field()
    # why = scrapy.Field()
