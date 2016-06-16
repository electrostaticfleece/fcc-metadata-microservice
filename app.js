"use strict";

let http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    upload = require('multer')(),
    port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/api/analyze/', upload.any(), function(req, res){
  res.json(req.files[0]);
});

app.listen(port, function(){
  console.log('Server is now listening on port: ' + port);
});