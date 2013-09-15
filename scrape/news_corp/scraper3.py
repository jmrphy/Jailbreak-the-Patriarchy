# Modified from the example by Adele Gilpin at 
# http://adesquared.wordpress.com/2013/06/16/using-python-beautifulsoup-to-scrape-a-wikipedia-table/

from bs4 import BeautifulSoup
from bs4 import SoupStrainer
import urllib2
import re
import csv

# category page of subsidiaries
wiki = "http://en.wikipedia.org/wiki/Category:News_Corporation_subsidiaries"

# needed to prevent 403 error on Wikipedia
header = {'User-Agent': 'Mozilla/5.0'}

# request the page
req = urllib2.Request(wiki,headers=header)

# open the page
page = urllib2.urlopen(req)

# make a strainer for only the "pages in category" div id
content = SoupStrainer(id="mw-pages")

# cook the soup, running it through the strainer lol
soup = BeautifulSoup(page, "html.parser", parse_only=content)

# get the name of the parent, which is in h2 tags
h2 = soup.find_all("h2")
category_pages = str(h2[0].get_text())
print category_pages

# isolate the div containing the lists of subsidiaries
res = soup.findAll('div', class_="mw-content-ltr")

# there it is!
print(res)

# (python is 0 indexed)
pres = res[0]

# we can get the rows of the table:
rows = pres.find_all("tr")

# check our 1 row; recall python is 0 indexed
print rows[0]

# only the text
print str(rows[0].get_text()) # just the text




#for lists in pres.find_all("ul"):
#	list_items = lists.find_all("li")
#	try:
#		a = str(list_items[0].get_text())
#		print a + ": 'News Corp' "
#
#	except:
#		print "bad string"
#		continue
























