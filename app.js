const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

require('./configs/db.config');
require('./configs/passport.config').setup(passport);
const corsOptions = require('./configs/cors.config');

const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');
const letterRoutes = require('./routes/letter.route');
const portfolioRoutes = require('./routes/portfolio.route');

const app = express();

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'CubeSuperSecret',
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));
app.use(passport.initialize());
app.use(passport.session());

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
  res.json({ message: err.message });
});

module.exports = app;
