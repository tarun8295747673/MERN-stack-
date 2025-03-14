const express = require('express');

const cors = require('cors');

const bodyparser = require('body-parser');

const dotenv = require('dotenv');

const { connectToDB } = require('./config/db');
const { mainRouter } = require('./routes');

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyparser.json())

// Routes
app.use('/api/v1', mainRouter)

const PORT = process.env.PORT || 9092

const initApp = async () =>{
    app.listen(PORT, ()=>{
        connectToDB()
        console.log(`Server is running on PORT: ${PORT}`)
    })
}

initApp()