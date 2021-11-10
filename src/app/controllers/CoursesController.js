const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CoursesController {
    //GET /course/:slug
    show(req, res, next) {
        // res.send('COURSES DETAIL !!! - '+req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}
module.exports = new CoursesController();
