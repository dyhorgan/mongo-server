import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  image: String,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});
export default schema;
