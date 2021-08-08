import mongoose from 'mongoose';

const records = mongoose.Schema({
    item: String,
    soldAmount: Number,
    date: String,
});

const Records = mongoose.model('records', records);

export default Records;