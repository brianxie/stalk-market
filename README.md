## Directory structure
* `db/` contains the files stored by mongodb
* `src/` contains the python/flask code used to process http requests and interface with mongodb
* `src/static/` contains index.html and the javascript code for sending http requests

## Setup
Start an instance of mongo by running `mongod --dbpath ./db`; this initializes files in the directory `./db`. To clear all database files, you can remove everything in the db directory: `rm -r ./db/*`.  
Start an instance of the python flask server by running `python server.py` from the `src/` directory.  
Both instances should be active in order to accept requests.  

## Sending http requests
`src/static/lib.js` contains a function `post_request` that can be used to send a query and returns the result of the query.  
The `path` argument should be the path that corresponds to the query you want to make (e.g. `"getproductsbymatch"` if you want to query for any records with matching fields). These paths are enumerated in `src/server.py`.  
The `query` argument should be a json-formatted string that contains your query.  
Example: To find a product with product_name apple, you would call `post_request("getproductsbymatch", '{"product_name":"apple"}')`. The output would be a json-formatted string containing all records with product_name of apple.
