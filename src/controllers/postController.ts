import { Request, Response } from 'express';
import callService from '../utils/serviceCall';
import { Post } from '../models';

export const home = async (req:any, res: Response) => {
    !req
    res.render('index', {
        pageTitle: 'Welcome to Plaude',
        failed:false
    });
};

export const getPost = async (req:Request, res: Response) => {
    try {
        //make sure the the post is generate from the click of the button
        if (Object.keys(req.query).length === 0) return res.render('index', {failed: true, pageTitle: 'Welcome to Plaude'});
        // Remove the 'auth' query parameter
        delete req.query.auth;
        //randomise number range 1:100
        const number = Math.floor(Math.random() * 100) + 1;
        //check if data exist in the database already before calling the api call
        let existingPost = await Post.findOne({
            ID: number, //check where post is equal to number generated
        });
        if (!existingPost){
            //send an api call to https://jsonplaceholder.typicode.com/todos/number
            const { resStatus, resData } = await callService({
                url: 'https://jsonplaceholder.typicode.com/todos/'+number,
                method: 'get',
            });
            if (resStatus != 200) return res.status(400).json({success:false, message:"Failed to get data"})
            //save in my database
            const data = {
                ID : resData.id,
                userID : resData.userId,
                title : resData.title,
                completed: resData.completed
            };
            existingPost = await Post.create(data);
        }
        //return to view 
        !req
        return res.render('post', {
            post: existingPost ?? [],
            pageTitle: existingPost.title,
            path: '/',
        });
    } catch (error) {
        console.error(error);
        // Handle other errors if needed
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};



  