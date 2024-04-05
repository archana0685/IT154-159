const {Schema,model}=require("mongoose");

const recipeSchema= new Schema({
    
    title:{type: String, required: true},
    type:{type: String, required: true},
    cuisine:{type: String, required: true},
    ingredients:{type: Array, required: true},
    instructions: {type: Array, required: true},
    timeTaken:{type: String, required: true},
    image:{type: Buffer, required: false},
    publisher:{type: String, required: true},
});

const Recipe = new model('Recipe',recipeSchema);

module.exports=Recipe;