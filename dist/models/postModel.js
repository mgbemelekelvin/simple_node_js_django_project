"use strict";
const tslib_1 = require("tslib");
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = (0, tslib_1.__importDefault)(require("mongoose-paginate-v2"));
const postSchema = new mongoose_1.Schema({
    ID: {
        type: Number,
        required: true,
    },
    userID: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
    },
});
postSchema.plugin(mongoose_paginate_v2_1.default);
const Post = (0, mongoose_1.model)('Post', postSchema);
module.exports = Post;
//# sourceMappingURL=postModel.js.map