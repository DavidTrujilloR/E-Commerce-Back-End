const { Tag } = require('../models');

const tadData = [
    {
        tag_name: 'rock music',
    },
    {
        tag_name: 'pop music',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'pop culture',
    },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;