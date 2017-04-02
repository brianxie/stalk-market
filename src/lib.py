from pymongo import MongoClient
import json

def add_product(query):
    client = MongoClient()
    products = client.products

    key = {}
    key["_id"] = query["uuid"]

    products.all.update_one(key, {"$set": query}, upsert=True)
    return query

def get_products_by_match(query):
    client = MongoClient()
    products = client.products

    matches = []
    for product in products.all.find(query):
        matches.append(product)

    return matches
