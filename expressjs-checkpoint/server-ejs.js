//to start the server ::  npm run dev
//modules
const express = require('express');
const path = require('path');
const router = express.Router();
const middleware = require('./middleware');
//set up server
const app = express();
app.listen(8000);
console.log('Server is listening on port 8000');
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
//Serves static files (we need it to import a css file)
app.use(express.static('public'));
//
app.use(middleware);
app.use('/', router);

// routers
router.get('/', function (req, res) {
  res.render('home', { outMain: 'home' });
});

router.get('/services', function (req, res) {
  res.render('services', { outMain: 'our services' });
});

router.get('/contact', function (req, res) {
  res.render('contact', { outMain: 'contact' });
});
