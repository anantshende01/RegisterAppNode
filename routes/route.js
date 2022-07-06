const express = require('express');;
const router = express.Router();
const student = require('../schema/student');
const validator = require('./validate')

router.get('/', (req, res) => {
    res.render('home', { msg: "" })
});

router.post('/', (req, res) => {
    // const { error } = validator(req.body);
    // if (error) {
    //     return res.render('home', { msg: error.details[0].message })
    // }

    student.find({ email: req.body.email }, (err, result) => {
        if (result.length > 0) {
            return res.status(400).render('home', { msg: "Already registered" })
        } else {
            student.count({}, function(err, result) {
                if (err) {
                    console.log(err);
                } else {

                    const data = new student({
                        id: result + 1,
                        name: req.body.name,
                        dob: req.body.dob,
                        email: req.body.email
                    });
                    data.save();

                    console.log("Item saved " + result);
                    res.render('registered', { name: req.body.name });
                }
            });
        }
    })
});

router.get('/students', (req, res) => {
    student.find({}, function(err, result) {
        res.render('users', { data: result });
    })
})


module.exports = router;