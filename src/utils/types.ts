import { Method } from 'axios';
import { ObjectId } from 'mongoose';

export interface IService {
  url: string;
  method: Method;
}

export interface IPost {
  _id: ObjectId;
  ID: number;
  userID: number;
  title: string;
  completed: boolean;
}
