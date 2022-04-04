

const PORT = process.env.PORT || 5001;

const express = require('express');
const path = require('path');


// create a web server using express

const app = express();


// serve all the files in the frontend folder

app.use(express.static('frontend'));



//telling the express  module that the public dir has all of our site assets 





// Answer with the 404 partial if the frontend looks for a non-existant partial
app.all('/abdullahabbas', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});



//app.use(express.static('js'))

app.use(express.json({ limit: '100MB' }));

// start up the webserver

app.listen(PORT, () =>
  console.log('listening on http://Localhost:' + PORT));


