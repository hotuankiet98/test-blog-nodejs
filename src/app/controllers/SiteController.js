const Course = require('../models/Course');
const { multipleMongooseToObjects } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        // res.render('home');
        //call back :
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err)
        //     }
        // });

        //promise:
        Course.find({})
            .then((courses) => {
                // courses=courses.map(course=>course.toObject())
                res.render('home', {
                    courses: multipleMongooseToObjects(courses),
                });
            })
            .catch(next);
    }
    //[GET] /search/
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
