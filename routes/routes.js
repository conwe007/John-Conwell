const express = require('express');
const router = express.Router();

// get home
router.get('/', (req, res) => {
    res.render('index', {
        title: 'John Conwell'
    });
});

// get projects
router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects'
    });
});

module.exports = router;