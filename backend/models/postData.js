import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    name: String,
    urlImg: String,
    description: String,
    price: String,
    countInStock: String
});

const PostData = mongoose.model('products', postSchema);

export default PostData;