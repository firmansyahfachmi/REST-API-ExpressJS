<h1> Bootcamp-Week2 REST-API </h1>
<h3>Clothing Shop REST API</h4><br>

Available function in this REST-API :
<ul>
 <li>Get all data</li>
 <li>Get data by Type</li>
 <li>Create data</li>
 <li>Update data</li>
 <li>Delete data</li>
</ul>

## Environment

```
PORT = 5000

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = ''
DB_DATABASE = 'clothing'

NODE_ENV = 'Development"
```

### Start Server
```
$ npm run server
```

## Documentation

### Routes
root : "/cloth"

#### GET All Data
- "/cloth/" 

#### GET Data by Type
- "/cloth/type/:type" 

#### POST
- "/cloth/" 

#### PATCH
- "/cloth/update/:id" 

#### DELETE
- "/cloth/delete/:id"-


