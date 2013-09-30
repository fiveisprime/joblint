var express = require('express')
  , joblint = require('joblint')
  , app     = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.disable('x-powered-by');

app.use(express.compress());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/client'));
app.use(express.favicon(__dirname + '/client/img/favicon.ico'));
app.use(app.router);

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  var result = joblint(req.body.spec);

  res.render('result', {
    result: result
  });
});

app.listen(process.env.PORT || 3000);
