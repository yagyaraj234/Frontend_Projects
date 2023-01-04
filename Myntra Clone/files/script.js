const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app =express();

const paths = path.join(__dirname,'../');

// app.use(express.static(paths));
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/men',(req,res)=>{
    res.render('men');
});
app.get('/profile',(req,res)=>{
    res.render('profile');
});



app.listen(4000,()=>{
    console.log('server Connected');
})