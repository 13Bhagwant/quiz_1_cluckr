const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const clucksRouter = require('./routes/clucks')


function getUsernameMiddleware(req, res, next){
    res.locals.username = req.cookies.username;
    next();
}

app.use(cookieParser());

app.use(getUsernameMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'));



app.use(function (req, res, next) {
    const url= req.url;
    if(url === '/new'){
        if (res.locals.username){
            next();
        } else {
            res.redirect('/sign_in')
        }
    }
    next();
})

app.set('view engine', 'ejs');

app.use(clucksRouter);

const PORT = 3000;
const ADDRESS = "localhost"; 

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening at http://${ADDRESS}:${PORT}`);
});