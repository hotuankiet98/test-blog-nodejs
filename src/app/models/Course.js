const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: 'string', require: true },
        description: { type: 'string' },
        image: { type: 'string' },
        videoId: { type: 'string', require: true },
        level: { type: 'string' },
        slug: { type: 'string', slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);
//Add plugin
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
module.exports = mongoose.model('Course', Course);
