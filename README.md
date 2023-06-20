# Restful_API__CRUD_OP

RestAPI using ExpressJa and Mongodb  to perform CRUD operations

1. Retrieve all items from the database.
path:/api/items method: get
 
2. Retrieve a specific item by its ID.
path:/api/items/:id method: get
 
3. Create a new item in the database.
path:/api/items method: post
 
4. Update an existing item by its ID.
path:/api/items/:id method: put
 
5. Delete an item by its ID.
path:/api/items/:id method:delete







## Installation


```bash
  npm install
  npm start
```
    
## API Routes

#### Create Item

```http
  POST /api/items
```

| Parameter | Type     | 
| :-------- | :------- | 
|   `itemName`|  `String` |
|   `brand`|  `String` |
|   `color`|  `String` |
| `discription` | `String` |
| `price`       | `Number`   |



#### Update Item

```http
  PUT /api/items/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `itemID`      | `Integer` |
| `itemName` | `String`|
`etc`


#### Get All Items
```http
GET /api/items
```

#### Get The item by itemId
```http
  GET /api/items/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |

#### Delete Item

```http
  DELETE /api/items/:id
```
| Parameter | Type     | 
| :-------- | :------- | 
| `id`      | `string` |
