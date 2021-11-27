const Course = require('../models/Course');
const { multipleMongooseToObjects } = require('../../util/mongoose');
const { NULL } = require('node-sass');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObjects(courses),
                }),
            )
            .catch(next);
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObjects(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
