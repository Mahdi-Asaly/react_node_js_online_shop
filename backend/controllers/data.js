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

