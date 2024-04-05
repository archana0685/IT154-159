import React, { useState } from 'react';
import "../Publish.css"
import { GiHotMeal } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import {toast } from "react-toastify";

function Create() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredientsList, setIngredientsList] = useState([]);
    const [instruction, setInstruction] = useState('');
    const [instructionsList, setInstructionsList] = useState([]);
    const [timeTaken, setTimeTaken] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [publisher, setPublisher] = useState('');

    const navigate=useNavigate();


  
    const handleAddIngredient = () => {
      if (ingredient.trim() !== '') {
        setIngredientsList(prevIngredientsList => [...prevIngredientsList, ingredient]);
        setIngredient('');
      }
    };
  
    const handleAddInstruction = () => {
      if (instruction.trim() !== '') {
        setInstructionsList(prevInstructionsList => [...prevInstructionsList, instruction]);
        setInstruction('');
      }
    };
  
    const handlePublishRecipe = async (e) => {
      e.preventDefault();
      const recipe = {
        title,
        type,
        cuisine,
        ingredients: ingredientsList,
        instructions: instructionsList,
        timeTaken,
        image:selectedImage,
        publisher
      };
      

      try {
            
        const response = await fetch(`http://localhost:5000/api/publish/recipe`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json" ,  
        },
        body: JSON.stringify(recipe),
    });

    if(response.ok){
      toast.success("Your Recipe "+title+" has been published successfully!")
    navigate("/login/home");
    }
    toast.success("Your Recipe "+title+" has been published successfully!")
    navigate("/login/home");
    console.log(response);
    } catch (error) {
        console.log("couldnt publish recipe");
    }

    };

  
    return (
      
        <div className='page-container'>
          
        <div className='form-heading'>
             <h1 align="center">PUBLISH YOUR RECIPE <GiHotMeal/></h1><br/>
             <h3 color='black'>Share your amazing recipies with people and spread love!</h3>
        </div>
    
        <div className='form-container'>
    
    
        <div >
                    <div className='recipe-title'>
                    <label><h3>Recipe Title:</h3></label>
                     <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <br/>
                    <div className='recipe-type'> 
                    <label><h3>Recipe Type:</h3></label>
                        <label > 
                        <input  type="radio" value="veg" checked={type === 'veg'} onChange={() => setType('veg')} />
                        Veg
                        </label>
                        <label>
                        <input  type="radio" value="non-veg" checked={type === 'non-veg'} onChange={() => setType('non-veg')} />
                        Non-Veg
                        </label>
                     </div>
                     <br/>
                     <div className='recipe-cuisine'>
                    <label><h3>Cuisine:</h3></label>
                    <input type="text" value={cuisine} onChange={e => setCuisine(e.target.value)} />
                    </div>
                 </div>
            
            
    
            <div>
            <label><h3>Ingredients:</h3></label>
            <input type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} />
            <button className='add-button' onClick={handleAddIngredient}>Add Ingredient</button>
            <ul>
              {ingredientsList.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            </div>
            
            <div>
            <label><h3>Instructions:</h3></label>
            <input type="text" value={instruction} onChange={e => setInstruction(e.target.value)} />
            <button className='add-button' onClick={handleAddInstruction}>Add Instruction</button>
            <ul>
              {instructionsList.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
            </div>
    
            <div>
            <label><h3>Time Taken:</h3></label>
            <input type="text" value={timeTaken} onChange={e => setTimeTaken(e.target.value)} />
            </div>
    
        </div>
        <div  className='image-button'>
        <h3 color='#484848'>Image:</h3>
        {selectedImage && (
    <div>
      <img
        alt="not found"
        width={"250px"}
        src={URL.createObjectURL(selectedImage)}
      />
      <br />
      <button onClick={() => setSelectedImage(null)}>Remove</button>
    </div>
  )}

  <br />
  <br />
  
  <input
    type="file"
    name="myImage"
    onChange={(event) => {
      console.log(event.target.files[0]);
      setSelectedImage(event.target.files[0]);
    }}/>
        </div>
        <br/>
        <div className='recipe-publisher'>
                    <label><h3>  Recipe Publisher:</h3></label>
                     <input type="text" value={publisher} onChange={e => setPublisher(e.target.value)} />
                    </div>
        
    
        <div >
            <button className='publish-button' onClick={handlePublishRecipe}>Publish </button>
        </div>
    </div>
       
    );
  }
export default Create;
