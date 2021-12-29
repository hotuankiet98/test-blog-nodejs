const Course = require('../models/Course');
const { multipleMongooseToObjects } = require('../../util/mongoose');
const { NULL } = require('node-sass');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObjects(courses),
                }),
            )
            .catch(next);
    }
    //[GET] /me/trash/courses
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
