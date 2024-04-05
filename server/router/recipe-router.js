const express=require("express");
const router=express.Router();
const recipePublish=require("../controllers/recipe-controller");

router.route("/recipe").post(recipePublish);

module.exports=router;