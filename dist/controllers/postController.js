"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = exports.home = void 0;
const tslib_1 = require("tslib");
const serviceCall_1 = (0, tslib_1.__importDefault)(require("../utils/serviceCall"));
const models_1 = require("../models");
const home = async (req, res) => {
    !req;
    res.render('index', {
        pageTitle: 'Welcome to Plaude',
        failed: false
    });
};
exports.home = home;
const getPost = async (req, res) => {
    try {
        //make sure the the post is generate from the click of the button
        if (Object.keys(req.query).length === 0)
            return res.render('index', { failed: true, pageTitle: 'Welcome to Plaude' });
        // Remove the 'auth' query parameter
        delete req.query.auth;
        //randomise number range 1:100
        const number = Math.floor(Math.random() * 100) + 1;
        //check if data exist in the database already before calling the api call
        let existingPost = await models_1.Post.findOne({
            ID: number, //check where post is equal to number generated
        });
        if (!existingPost) {
            //send an api call to https://jsonplaceholder.typicode.com/todos/number
            const { resStatus, resData } = await (0, serviceCall_1.default)({
                url: 'https://jsonplaceholder.typicode.com/todos/' + number,
                method: 'get',
            });
            if (resStatus != 200)
                return res.status(400).json({ success: false, message: "Failed to get data" });
            //save in my database
            const data = {
                ID: resData.id,
                userID: resData.userId,
                title: resData.title,
                completed: resData.completed
            };
            existingPost = await models_1.Post.create(data);
        }
        //return to view 
        !req;
        return res.render('post', {
            post: existingPost !== null && existingPost !== void 0 ? existingPost : [],
            pageTitle: 'Post',
            path: '/',
        });
    }
    catch (error) {
        console.error(error);
        // Handle other errors if needed
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.getPost = getPost;
//# sourceMappingURL=postController.js.map