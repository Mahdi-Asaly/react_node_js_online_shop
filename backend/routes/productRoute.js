import express from 'express';
import Product from '../modles/productModel';
import { getToken } from '../util';

const router = express.Router();

router.get("/",async(req,res)=>{
    const products = await Product.find({});
    res.send(products);
});

router.post("/", async(req,res)=>{
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        urlImg:req.body.urlImg,
        description:req.body.description,
        countInStock:req.body.countInStock,
    });
    const newProduct = await product.save();
    if(newProduct){
        res.status(201).send({message:'New Product Created.', data: newProduct});
    }
    return res.status(500).send({message:'ERROR in Creating Product.'});
})