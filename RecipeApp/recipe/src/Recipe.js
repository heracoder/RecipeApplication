import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""  />
            <h2 className={style.title}>Recipe Name : {title}</h2>
            <ul>
                {ingredients.map(ingredient => (
                    
                    <li className={style.ing} key={ingredient.id}>{ingredient.text}</li>
                ))}
            </ul>
            <p className={style.cal}>Total Calories : {calories}</p>
         
        </div>
    )
}

export default Recipe
