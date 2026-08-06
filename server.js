const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

// load models

const app = express();
//load keys file

// use body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//configuration for authentication

//setup express static folder to serve js, css files
app.use(express.static('public'));
//make user glober object



app.engine('handlebars',exphbs({
    defaultLayout:'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine','handlebars');


app.get('/',function(req,res){
    res.render('home');
});

app.get('/about-us',function(req,res){
    res.render('about-us');
});


app.get('/contact-us',function(req,res){
    res.render('contact-us');
});


app.get('/home',function(req,res){
    res.render('home');
});

app.get('/loan',function(req,res){
    res.render('loan');
});

app.get('/practice-areas',function(req,res){
    res.render('practice-areas');
});

app.get('/corporate-&-business-law',function(req,res){
    res.render('corporate-&-business-law');
});
app.get('/business-agreements',function(req,res){
    res.render('business-agreements');
});

app.get('/creditors-rights',function(req,res){
    res.render('creditors-rights');
});
app.get('/business-disputes',function(req,res){
    res.render('business-disputes');
});
app.get('/mediation',function(req,res){
    res.render('mediation');
});





app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on Port 3000');
});