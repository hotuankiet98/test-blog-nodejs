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

    //GET /course/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //POST /course/create
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi_webp/${req.body.videoId}/maxresdefault.webp`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
}
module.exports = new CoursesController();
