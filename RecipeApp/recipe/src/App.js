import React,{useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "d40e5033";
  const APP_KEY = "41860e69a6495431a77707d320bae523";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // const [counter,setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState("banana");

  useEffect (() => {
    getRecipes();
  },[query]);

 
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits); 
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
   
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button
        className="search-button" 
        type="submit" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map( recipe => (
        <Recipe
        key = {recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
  {/* <h2 onClick={() => setCounter(counter + 1)}>{counter}</h2> */}
    </div>
  )
}


export default App;
