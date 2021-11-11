const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: 'string', maxLength: 255 },
        description: { type: 'string', maxLength: 600 },
        image: { type: 'string', maxLength: 255 },
        slug: { type: 'string', maxLength: 255 },
        videoId: { type: 'string', maxLength: 255 },
        level: { type: 'string', maxLength: 255 },
        slug: { type: 'string', slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Course', Course);
