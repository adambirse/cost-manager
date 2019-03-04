var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var costsRouter = require('./routes/costs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/costs', costsRouter.router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: 'kafka1:9092,kafka2:9092,kafka3:9092'}),
    consumer = new Consumer(
        client,
        [{topic: 'cost'}],
        {
            groupId: 'cost-manager',
            autoCommit: false,
            fromOffset: true
        }
    );


consumer.on('message', function (message) {
    costsRouter.addData(message.value);
});

consumer.on('error', function (err) {
    console.log('Error:', err);
});

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:', err);
});


module.exports = app;
