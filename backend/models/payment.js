import mongoose from 'mongoose';
/*const postSchema = mongoose.Schema({
    name: String,
    price: String,
    amount: String,
});*/
const postSchema = mongoose.Schema({
    cartItems: {type: Object},
    totalAmount: {type: String},
    date: {type:String},
});

const Payments = mongoose.model('payments', postSchema);

export default Payments;