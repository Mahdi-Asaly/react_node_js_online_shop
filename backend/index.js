import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import dataRoutes from './routes/data.js';


const app = express();

app.use('/data', dataRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = "mongodb+srv://myprojects:Bb123123@cluster0.wwybj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=> console.log(`server running on port  ${PORT}`)))
.catch((ERROR)=> console.log(ERROR.message));
mongoose.set('useFindAndModify', false);
