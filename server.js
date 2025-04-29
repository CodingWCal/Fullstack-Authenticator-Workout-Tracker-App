// server.js
// set up ======================================================================
// get all the tools we need
const express        = require('express');
const app            = express();
const port           = process.env.PORT || 8080;
const mongoose       = require('mongoose');
const passport       = require('passport');
const flash          = require('connect-flash');
const morgan         = require('morgan');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const session        = require('express-session');
const methodOverride = require('method-override');

const configDB = require('./config/database.js');

var db

require('./config/passport')(passport);

// set up our express application n middleware
app.use(morgan('dev'));                  // log every request to the console
app.use(cookieParser());                 // read cookies (needed for auth)
app.use(bodyParser.json());              // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('_method'));      // support DELETE & PUT via forms
app.use(express.static('public'));       // serve static assets


app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'rcbootcamp2025a', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use((req, res, next) => {
  console.log('→', req.method, req.path, req.body);
  next();
});

// configuration ===============================================================
mongoose.connect(configDB.url, { useNewUrlParser:true, useUnifiedTopology:true })
.then(() => {
  console.log('Connected to MongoDB');
  require('./app/routes.js')(app, passport);
})
.catch(console.error); // pass passport for configuration

// launch ======================================================================
app.listen(port);
console.log('The muscle magic happens on port ' + port);

//commented out since these are moved into routes.js
//added these two codeblocks from savage demo
// app.put('/down', (req, res) => {
//   db.collection('messages')
//   .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//     $set: {
//       thumbUp:req.body.thumbUp - 1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })

// app.delete('/messages', (req, res) => {
//   db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
//     if (err) return res.send(500, err)
//     res.send('Message deleted!')
//   })
// })


//Newly Added from savage demo yoinked 
// Copied codeblock from first put but added Thumb /DOWN in path put - Calvin //
// app.get('/', (req, res) => {
//   db.collection('messages').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     res.render('index.ejs', {messages: result})
//   })
// })

// app.post('/messages', (req, res) => {
//   db.collection('messages').insertOne({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/')
//   })
// })

// app.put('/messages', (req, res) => {
//   db.collection('messages')
//   .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//     $set: {
//       thumbUp:req.body.thumbUp + 1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })