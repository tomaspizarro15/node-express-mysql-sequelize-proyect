const path = require('path')

const express = require('express'); 
const parser = require('body-parser'); 
const bodyParser = require('body-parser');

const database = require('./database/database.js');

const mainRoute = require('./routes/main'); 

const app = express(); 

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , 'public'))) //give node access to some folder

app.use(mainRoute)

database.sync()
.then(result => {
    console.log("mySQL SYNC TO APPLICACION" , result)
})
.then(
    app.listen(3000))
.catch(e => {
    console.log( "SOMETHING WENT WRONG", e)
})