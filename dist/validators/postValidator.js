"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPost = void 0;
const joi_1 = require("./joi");
exports.getPost = {
    query: joi_1.Joi.object({}),
};
exports.createPost = {
    body: joi_1.Joi.object({
        ID: joi_1.Joi.number(),
        userID: joi_1.Joi.number(),
        title: joi_1.Joi.string().trim(),
        completed: joi_1.Joi.boolean(),
    }),
};
//# sourceMappingURL=postValidator.js.map