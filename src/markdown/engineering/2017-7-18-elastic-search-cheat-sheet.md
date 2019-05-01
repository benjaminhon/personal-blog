---
layout: post
title: Elasticsearch Cheat Sheet
tags: [engineering]
---

# Elasticsearch Structure

An index is a collection of documents that have somewhat similar characteristics. Within an index, you can define one or more types. A document is a basic unit of information that can be indexed.

```shell
# <index>/<type>/<document>
company/employee/alan
company/intern/steve
```

# Query Indices

```shell
# Get all indices
curl -XGET '<url>/_cat/indices'

# Get all mappings
curl -XGET '<url>/_mapping?pretty=true'

# Get and save mapping of index
curl -XGET '<url>/<index>/_mapping?pretty=true' > mapping.json
```

# Create Index Mapping Template


```shell
# download mapping
curl -XGET 'http://127.0.0.1:9200/<index>/_mapping?pretty' > template.json
```

Modify the properties as required in *template.json*. Then replace *template.json* as follows, replacing the properties section.

```javascript
{
  "template" : "my_index*",
  "version" : 50001,
  "settings" : {
    "index.refresh_interval" : "5s"
  },
  "mappings" : {
    "_default_" : {
      "properties": {
        # REPLACE PROPERTIES
      }
    }
  }
}
```

```shell
# delete index
curl -XDELETE 'http://localhost:9200/<index>?pretty'

# upload template
curl -XPUT 'http://localhost:9200/_template/<index>?pretty' -d @template.json
```

# Query Data

```shell
# Get all documents in index
GET /<index>/<type>/_search?q=*

```

# Recipes

### Get all unique terms

```javascript
GET /zmq/position-update/_search
{
  "size": 0, # return only aggregate results
  "aggregations":{
    "id":{
      "terms": {
        "field": "id.keyword"
      }
    }
  }
}
```

### Get last document in aggregate

```javascript
GET /zmq/position-update/_search
{
  "size": 0,
  "aggregations": {
    "id": {
      "terms": {
        "field": "id.keyword"
      },
      "aggregations": {
        "latest": {
          "top_hits": {
            "size": 1,
            "sort": [{"@timestamp": {"order": "desc"}}],
            "_source": {"includes": ["location","map"]}
          }
        }
      }
    }
  }
}
```