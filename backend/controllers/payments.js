import Payments from '../models/payment.js';

export const getPayments = async (req, res)=>{
    try{
        const payments = await Payments.find();
        res.status(200).json(payments);
    }
    catch(err){
        res.status(404).json( {message: err.message});
    }
}


