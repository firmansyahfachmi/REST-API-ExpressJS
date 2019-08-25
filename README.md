<h1> REST-API-ExpressJS</h1>
<h3>Clothing Shop REST API</h4><br>

Available function in this REST-API :
<ul>
 <li>Get all data</li>
 <li>Get data by Type or Branch</li>
 <li>Create data</li>
 <li>Update data</li>
 <li>Delete data</li>
</ul>

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation

### Clone
```
$ git clone https://github.com/firmansyahfachmi/Bootcamp-Week2.git
$ cd Bootcamp-Week2
$ npm install
```

### Environment

```
SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"

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

#### GET Data by Type or Branch
- "/cloth/type/{type / branch}"

#### POST
- "/cloth/" 

#### PATCH
- "/cloth/update/:id" 

#### DELETE
- "/cloth/delete/:id"


