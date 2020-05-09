const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
    }),
  }),
  update: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
    }),
  })
};
