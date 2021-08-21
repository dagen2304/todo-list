require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const DB = require('./config/DB')
const todoRoute = require('./routes/Todo.route')

const PORT = process.env.PORT || 3000


const app = express()


mongoose.connect(DB.conStr , {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connexion a la BD");
})
.catch((err) => {
    console.log(err);
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    );
    next();
});

app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.get('/' , (req , res) => {
    res.json({message: "Hello world !!"})
})

app.use('/todos' , todoRoute)

app.listen(PORT , () => {
    console.log(`Le serveur ecoute sur le port : ` + PORT);
})



/*
app.post('/' , (req , res) => {
    console.log(req.body);
    res.end()
})



app.get('/form' , (req , res) => {
    res.setHeader('Content-Type' , 'text/html')
    res.end( `
        <form method="post" action="/">
            <input type="text" name="nom"/>
            <input type="submit" value="send"/>
        </form>
    `)
})
*/