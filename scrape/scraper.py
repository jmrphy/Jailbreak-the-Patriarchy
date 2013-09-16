# Modified from the example by Adele Gilpin at 
# http://adesquared.wordpress.com/2013/06/16/using-python-beautifulsoup-to-scrape-a-wikipedia-table/

from bs4 import BeautifulSoup
from bs4 import SoupStrainer
import urllib2
import re
import csv

 
wiki = "http://en.wikipedia.org/wiki/List_of_assets_owned_by_News_Corporation"
header = {'User-Agent': 'Mozilla/5.0'} #Needed to prevent 403 error on Wikipedia
req = urllib2.Request(wiki,headers=header)
page = urllib2.urlopen(req)
content = SoupStrainer(id="mw-content-text")
soup = BeautifulSoup(page, "html.parser", parse_only=content)

soup.h2.decompose()
soup.h3.decompose()
soup.h4.decompose()
soup.h5.decompose()

print(soup.get_text())