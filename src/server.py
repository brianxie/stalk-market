from flask import Flask, request, send_from_directory
from pymongo import MongoClient

from lib import *

app = Flask(__name__, static_url_path="/static/")

@app.route("/", methods=["GET", "POST"])
def root():
    return send_from_directory("./static/", "index.html")

@app.route("/<path:path>", methods=["GET"])
def get_static_resource(path):
    return send_from_directory("./static/", path)

@app.route("/addproduct", methods=["POST"])
def addproduct():
    query = request.get_json()
    return json.dumps(add_product(query))

@app.route("/getproductsbymatch", methods=["POST"])
def getproductsbymatch():
    query = request.get_json()
    return json.dumps(get_products_by_match(query))

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)

# uuid = query["uuid"]
# product_name = query["product_name"]
# store = query["store"]
# brand = query["brand"]
# tags = query["tags"]
# desc = query["desc"]
# price = query["price"]
# quantity = query["quantity"]
# units = query["units"]
