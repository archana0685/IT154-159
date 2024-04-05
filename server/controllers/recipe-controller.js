const Recipe = require("../models/recipe-model");

const recipePublish= async(req,res)=>{
    try{
        const response = req.body;
        await Recipe.create(response);

        return res.status(200).json({message:"recipe published successfully"});
    }catch(error){
        return res.status(500).json({message:"recipe wasn't published"});
    }
};

module.exports= recipePublish;