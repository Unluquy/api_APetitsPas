const express = require('express')
const app = express();
const dotenv = require("dotenv")
const pool = require('./db');
const cors = require('cors');
dotenv.config()

app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use("/api/visites",require('./routes/visites'))



app.listen(process.env.PORT || 3000, () => console.log('listening', process.env.HOST))