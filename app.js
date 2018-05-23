var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var exphbs = require('express-handlebars');
var app = express();

// Create App Instance
var hbs = exphbs({
	extname: '.html', //set extension to .html so handlebars knows what to look for
});

app.set('views', path.join(__dirname, ''));
app.engine('html', hbs);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'css')));

app.use('/', routes);

// Set Port
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+ app.get('port'));
});
