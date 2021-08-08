import express from 'express';
import { getRecords } from '../controllers/records.js';
import Records from '../models/record.js';

const router = express.Router();
router.get('/', getRecords);

router.post('/',async (req, res) => {
    console.log('posting new payment.')
    const record = new Records({
      item: req.body.item,
      soldAmount: req.body.soldAmount,
      date: req.body.date,
    });
    const passed = await record.save();
    if (passed) {
      return res
        .status(201)
        .send({ message: 'New record has been created.', data: passed });
    }
    return res.status(500).send({ message: ' Error in sending records to the db.' });
  });

  router.put('/:id', async (req, res) => {
    const item = req.params.item;
    const record = await Records.find(item);
    if (record) {
      record.item = req.body.item;
      record.soldAmount = req.body.soldAmount;
      record.date = req.body.date;
      const updatedRecord = await record.save();
      if (updatedRecord) {
        return res
          .status(200)
          .send({ message: 'record Updated', data: updatedRecord });
      }
    }
    return res.status(500).send({ message: ' Error in Updating record.' });
  });


export default router;