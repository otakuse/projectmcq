var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questionRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
var cors = require('cors');
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

// const RegistrationModel = require('./models/registrations');

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/examination-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
},(err,result)=>{
if(err)
  console.log(err,"connnection issue")
else
  console.log("database connected")
});
// define a root/default route
app.use('/api', questionRoutes);
app.use('/api/registration', registrationRoutes);
app.listen(3001);

app.get('/', function(req, res) {
    res.send('Hello World')
});
