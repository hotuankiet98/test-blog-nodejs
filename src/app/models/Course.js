const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: 'string', require: true },
        description: { type: 'string' },
        image: { type: 'string' },
        videoId: { type: 'string', require: true },
        level: { type: 'string' },
        slug: { type: 'string', slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
module.exports = mongoose.model('Course', Course);
