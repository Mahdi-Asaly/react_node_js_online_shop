import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    _id: String,
    name: String,
    urlImg: String,
    description: String,
    price: String,
    countInStock: String
});

const PostData = mongoose.model('PostData', postSchema);

export default PostData;