const express = require('express');
const router = express.Router();
const LoginTest = require('../models/login');

// Define the POST route for creating a patient


router.post('/', async (req, res) => {
    const { name, password } = req.body;

    LoginTest.findOne({ name: name })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Úspešne ste sa prihlásili.")
                } else {
                    res.json("Heslo je nesprávne.")
                }
            } else {
                res.json("Neexistujúci uživateľ.")
            }
        })
})

module.exports = router;
