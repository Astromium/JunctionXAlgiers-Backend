const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitizer = require('express-mongo-sanitize');
const limit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan')
const compression = require('compression');
const globalErrorHandler = require('./controllers/errorController')

const resellerRouter = require('./routes/resellerRouter')
const marketerRouter = require('./routes/marketerRouter')

const app = express();
app.use(express.json())
app.use(cors())



// security middlewars
app.use(helmet());
app.use(xss());
app.use(mongoSanitizer());
app.use(limit({
    max: 1000
}));
app.use(compression())


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
};

app.use('/api/v1/sellers', resellerRouter)
app.use('/api/v1/marketers', marketerRouter)

app.use(globalErrorHandler);


module.exports = app;

