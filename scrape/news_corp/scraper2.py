# Working from Aristotle-tek github


from bs4 import BeautifulSoup
from bs4 import SoupStrainer
import urllib2
import re
import csv


f = csv.writer(open("output.csv", "w"))
f.writerow(["Parent","Subsidiary"]) # Write column headers as the first line


wiki_news_corp = "http://en.wikipedia.org/wiki/Category:News_Corporation_subsidiaries"
header = {'User-Agent': 'Mozilla/5.0'} #Needed to prevent 403 error on Wikipedia
req_news_corp = urllib2.Request(wiki_news_corp,headers=header)
page_news_corp = urllib2.urlopen(req_news_corp)

wiki_disney = "http://en.wikipedia.org/wiki/Category:Walt_Disney_Company_subsidiaries"
header = {'User-Agent': 'Mozilla/5.0'} #Needed to prevent 403 error on Wikipedia
req_disney = urllib2.Request(wiki_disney,headers=header)
page_disney = urllib2.urlopen(wiki_disney)

pages = [page_news_corp, page_disney]

for page in pages:
	content = SoupStrainer(id="mw-pages")
	soup = BeautifulSoup(page, "html.parser", parse_only=content)

	# li holds subsidiary names
	h2 = soup.find_all("li")
	subsidiary = str(li[0].get_text())

	#h2 has voting precinct.
	h2 = soup.find_all("h2")
	parent = str(h2[0].get_text())

	# get the results tables
	res = soup.findAll('div', class_='mw-content-ltr')

	pres = res[0]

	for list in pres.find_all("ul"):
		item = list.find_all("li")
		try:
			a = str(item[0].get_text())
			b = str(item[1].get_text())

		except:
			print "bad string"
			continue


		f.writerow([parent, subsidiary])