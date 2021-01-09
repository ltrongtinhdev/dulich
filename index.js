const createError = require('http-errors');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoute = require('./routers/user')
const productRoute = require('./routers/post')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/users',userRoute);
app.use('/posts',productRoute);
app.use('/', (req , res, next) => {
    return res.send("Hello")
})


app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    logger.error(config.bodyWinston(1,JSON.stringify(err)))
    // render the error page
    return res.status(err.status || 500);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => console.log(`Server running .. ${PORT}`));
