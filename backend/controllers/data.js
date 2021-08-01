import PostData from '../models/postData.js';

export const getData = async (req, res)=>{
    try{
        const postData = await PostData.find();
        res.status(200).json(postData);
    }
    catch(err){
        res.status(404).json( {message: err.message});
    }
}
export const createData = async (req, res) =>{
    const data = req.body;
    const newdData = new PostData(data);
    try{
       await newData.save();
       res.status(201).json(newData);
    }
    catch(err){
        res.status(409).json({message: err.message});
    }
}