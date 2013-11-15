var express = require('express')
  , joblint = require('joblint')
  , app     = express();

app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);
app.set('title', 'Lint Job Specs');

app.disable('x-powered-by');

app.use(express.compress());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/client'));
app.use(express.favicon(__dirname + '/client/img/favicon.ico'));
app.use(app.router);

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  res.render('result', {
    result: joblint(req.body.spec)
  });
});

app.listen(app.get('port'));
