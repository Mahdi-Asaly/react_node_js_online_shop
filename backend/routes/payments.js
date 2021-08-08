import express from 'express';
import { getPayments } from '../controllers/payments.js';
import Payments from '../models/payment.js';

const router = express.Router();
router.get('/', getPayments);

router.post('/',async (req, res) => {
    console.log('posting new payment.')
    const paidItem = new Payments({
      cartItems: req.body.cartItems,
      totalAmount: req.body.totalAmount,
      date: req.body.date,
    });
    const transaction = await paidItem.save();
    if (transaction) {
      return res
        .status(201)
        .send({ message: 'New transaction Created', data: transaction });
    }
    return res.status(500).send({ message: ' Error in sending payment to the db.' });
  });




export default router;