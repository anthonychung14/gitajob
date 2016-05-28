# -*- coding: utf-8 -*-

class GitJobPipeline(object):
    def process_item(self, item, spider):
        print(item, "in the pipe bro >>>>>><<<<<<<<<<<<<<<<<<<<")
        
        return item
