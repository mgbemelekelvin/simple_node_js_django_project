import { Joi } from './joi';

export const getPost = {
  query: Joi.object({
  }),
};

export const createPost = {
  body: Joi.object({
    ID: Joi.number(),
    userID: Joi.number(),
    title: Joi.string().trim(),
    completed: Joi.boolean(),
  }),
};
