import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import data from './data.js';


import dataRoutes from './routes/data.js';


const app = express();
app.get("/api/products", (req,res)=>{
    res.send(data.products);
});
app.get("/api/products/:id", (req,res)=>{
    const productId = req.params.id;
    const product = data.products.find(x=>x._id==productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({msg: "Product not exists"});
});

app.use('/data', dataRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = "mongodb+srv://myprojects:Bb123123@cluster0.wwybj.mongodb.net/productsDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=> console.log(`server running on port  ${PORT}`)))
.catch((ERROR)=> console.log(ERROR.message));
mongoose.set('useFindAndModify', false);
