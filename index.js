const express = require('express');
const socialRoutes = require('./routes/social-posts');
require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/social', socialRoutes);

app.listen((3000),()=> console.log("app is running on port: 3000"));

/* 
Create a RESTful api using NodeJs and Frontend with Angular
 
1. Webservice : List Social Posts with backend pagination (Return Max 10 in a response) https://jsonplaceholder.typicode.com/posts
 
2. UI : Create an Angular UI to display Social Posts with Next and Previous button.
 
Max Duration : 1hr
Note : Finish task #1 and then move to task #2




*/