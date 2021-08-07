import express from 'express';
import { getData } from '../controllers/data.js';
import PostData from '../models/postData.js';

const router = express.Router();
router.get('/', getData);
router.get('/:id', async (req,res)=>{
    try{
        const products = await PostData.find();
        const productId = req.params.id;
        const specificProduct = products.find(product=>product._id==productId);  
        if(specificProduct) 
            res.status(200).json(specificProduct);
        else
            res.status(404).json('product not found');
    }
    catch(err){
        res.status(404).json( {message: err.message});
    }
});
router.post('/',async (req, res) => {
    console.log('posting new product.')
    const product = new PostData({
      name: req.body.name,
      urlImg: req.body.urlImg,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.' });
  });
  router.put('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await PostData.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.urlImg = req.body.urlImg;
      product.description = req.body.description;
      product.price = req.body.price;
      product.countInStock = req.body.countInStock;
      const updatedProduct = await product.save();
      if (updatedProduct) {
        return res
          .status(200)
          .send({ message: 'Product Updated', data: updatedProduct });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Product.' });
  });
  
router.delete('/:id', async (req, res) => {
    const products = await PostData.find();
    const findProduct = products.find(p => p._id == req.params.id);
    console.log('deleting:'+ findProduct);
    if (findProduct) {
      await PostData.deleteOne();
      console.log('deletion success.');
      res.send({ message: 'Product Deleted' });
    } else {
        console.log('deletion failed.');
      res.send('Error in Deletion.');
    }
});



export default router;