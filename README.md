# DarkWeb-scam-crawler

This is a google crawler to fetch typosquat onion domains.

### How to run?
1. Install NodeJS (v14.5.0 in here) and npm
2. Install the following node modules using npm : se-scraper, node-fetch, similarity, onion-regex, fs
3. Run the bootstrap.sh file using ./bootstrap.sh (Give execute permission)

### Instructions
Populate the legit.txt file with legitimate onion links. The results will be displayed in format LegitOnion:TyposquatOnion:Similarity

You can set the minimum similarity parameter in run2.js file
