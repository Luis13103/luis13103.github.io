const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('http://localhost:3000/home');  
});


router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/');  
});

module.exports = router;
