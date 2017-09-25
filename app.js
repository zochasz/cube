const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cors = require('cors');

// require('./configs/db.config');

// const corsOptions = require('./configs/cors.config');

const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');
const letterRoutes = require('./routes/letter.route');
const portfolioRoutes = require('./routes/portfolio.route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const apiPrefix = '/api'
app.use(`${apiPrefix}`, authRoutes);
app.use(`${apiPrefix}`, userRoutes);
app.use(`${apiPrefix}`, projectRoutes);
app.use(`${apiPrefix}`, letterRoutes);
app.use(`${apiPrefix}`, portfolioRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
