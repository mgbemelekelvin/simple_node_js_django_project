/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { Schema, PaginateModel, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { IPost } from '../utils/types';

const postSchema = new Schema<IPost>(
  {
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
  },
);

postSchema.plugin(paginate);
const Post = model<IPost, PaginateModel<IPost>>('Post', postSchema);

export = Post;
