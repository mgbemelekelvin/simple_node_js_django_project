import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRoute from './routes/postRoute';
import path from 'path';
import {home} from './controllers/postController';
const app = express();
// Set 'views' directory for any views
app.set('views', path.join(__dirname, 'views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');

//Serves resources from public folder
app.use('/resources', express.static('src/public'));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', home) //get post
app.use('/', postRoute);

export default app;
