const { body } = require('express-validator');
const message = require('../helper/message');
const util = require('util')

var options={
    name:{
        min: 10,
        max : 80
    },
    description:{
        min: 10,
        max : 80
    },
    price:{
        type: Number,
    },
    image:{
        type: String,
        // format: url
    }
}

module.exports = {
    validator: function () {
        return [
            body('name')
                .isLength({ min: options.name.min, max: options.name.max })
                .withMessage(util.format(message.size_string_message, 'name', options.name.min, options.name.max))
                .isString()
                .withMessage('Name must be a string'),

            body('description')
                .isLength({ min: options.description.min, max: options.description.max })
                .withMessage(util.format(message.size_string_message, 'description', options.description.min, options.description.max))
                .isString()
                .withMessage('Description must be a string'),

            body('price')
                .isNumeric()
                .withMessage('Price must be a number'),

            body('image')
                .isURL()
                .withMessage('Image must be a valid URL')
        ];
    }
};