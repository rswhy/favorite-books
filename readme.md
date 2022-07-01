# Welcome to Favorite Book Project (Bookaholic)

## Description

Bookaholic is a web based application (single-page-application) that can search and provide book information from Google Book API. Visitor also can save book information and will be shown in Favorite Book page (database using MongoDB).

Client deployment link : [Bookaholic](https://bookaholic-id.web.app/).

Server deployment link : [Bookaholic (server)](https://favorite-book.herokuapp.com).

## Endpoints

List of Available Endpoints:

- `GET /books`
- `POST /books`

### GET /books

**Description**

- get favorite books list

**Response**

_200 - OK_

- Body:

```json
[
  {
    "_id": String,
    "title": String,
    "imageLink": String,
    "authors": String,
    "rating": Integer,
    "__v": Integer
    },
    ...
]
```
### POST /books

**Description**

- add book to Favorite Book list

**Response**

_201 - Created_

- Body:

```json
{
  "_id": String,
  "title": String,
  "imageLink": String,
  "authors": String,
  "rating": Integer,
  "__v": Integer
},
```

### Global Error

**Response**

_500 - Internal Server Error_

- Body:

```json
{
  "statusCode": 500,
  "error": {
    "message": "Internal Server Error"
  }
}
```