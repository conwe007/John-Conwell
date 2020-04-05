const express = require('express');
const router = express.Router();

// get home
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    });
});

// get projects
router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects'
    });
});

// get about
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

// get contact
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

module.exports = router;