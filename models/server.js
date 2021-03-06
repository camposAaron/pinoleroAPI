const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            auth :       '/api/auth',
            find :       '/api/find',
            users :      '/api/user',
            products:     '/api/product',
            categories : '/api/category'
        }
        
        
        //Conectar a base de datos
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){

        //CORS
        this.app.use(cors());
        //lectura y parseo a json
        this.app.use(express.json());
        //Servir carpeta pública
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.path.auth, require('../routes/auth'));
        this.app.use(this.path.find, require('../routes/find'));
        this.app.use(this.path.users, require('../routes/user'));
        this.app.use(this.path.products, require('../routes/product'));
        this.app.use(this.path.categories, require('../routes/category'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando en el puerto: ', this.port);
        });        
    }


}

module.exports =  Server;