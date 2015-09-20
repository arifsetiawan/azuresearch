
# Azure Search

Presentation at Bandung Azure Global Bootcamp, April 25th 2015 

# Content

* Presentation in pdf
* [Postman](https://www.getpostman.com/) collection
* Demo website
* Sample dataset

# Azure Search features

Postman collection covers following features from Azure Search

* Create index
* Upload document
* Search
* Filtering
* Hit hightlight
* Suggestion
* Faceting
* Scoring profiles

# How to start with demo

There are two apps for demo: 

1. Node.js based app for uploading documents
1. Static html page for displaying search result

## Steps

1. Load Postman .json file
1. Make sure to change SEARCHSERVICE, ADMINKEY and CLIENTKEY in Postman `AzureSearch.json`, Node.js `data/app.js`, Demo `demo/index.html` and `demo/facet.html`
1. Create index with Postman
1. Make sure Node.js is installed (preferably latest version)
1. Go to `data` folder then install Node.js modules with `npm install`
1. Run node app.js to upload all sample data
1. Use postman to explore Azure Search
1. Run the `demo` app by opening `demo/index.html`

# Contact

Send me email to arif@dycode.com or n.arif.setiawan@gmail.com if you have any question or would like to use some of materials here.
