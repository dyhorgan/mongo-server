import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  image: String,
  postedBy: {
    username: String,
    handle: String
  },
  time: String,
  comments: Number,
  retweets: Number,
  propic: String,

}, {collection: 'tuits'});
export default schema;
