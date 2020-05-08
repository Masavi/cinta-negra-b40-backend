const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      author: Joi.string().required(),
      isbn: Joi.string(),
    }),
  }),
  addBookToUser: celebrate({
    [Segments.BODY]: Joi.object().keys({
      idBook: Joi.string().required(),
    }),
  }),
};

