const express = require('express');
const router = express.Router();
const knex = require('../db/client')
const friendlyDate = require('../public/js/friendlyDate')
const trend = require("../trend");
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;


router.get('/', (req, res) => {
    console.log(trend());
    
    knex('cluckrs')
        .select("*")
        .orderBy('createdAt', 'desc')
        .then((data) => {
            res.render('clucks/index', {
                clucks: data,
                friendlyDate: friendlyDate,
                trend: trend()
            });
        });
});

router.get('/clucks', (req, res) => {
    res.redirect('/');
});

router.get('/sign_in', (req, res) => {    
    res.render('clucks/signIn');
});


router.post('/sign_in', (req, res) => {
    res.cookie('username', req.body.username, { maxAge: new Date(COOKIE_MAX_AGE) });
    res.redirect('/');
});

router.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})



router.get('/new', (req, res) => {
    res.render('clucks/new')
})

router.post('/clucks', (req, res) => {
    const clurksParams = {
        username: res.locals.username,
        content: req.body.content,
        image_url: req.body.url_image,
    }
    knex('cluckrs')
        .insert(clurksParams)
        .returning("*")
        .then((data) => {
            res.redirect("/")
        })
})
module.exports = router;