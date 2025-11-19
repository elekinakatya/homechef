import { useState } from 'react'
import './App.css'
import RecipeCard from "./components/ui/RecipeCard/RecipeCard.jsx";
import Header from "./components/layout/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (

       <RecipeCard
       title="Citrus Salad with berries"
       cookTime={5.5}
       serving={3}
       image='./image/cs.svg'
       description="In the season of fresh strawberries, i suggest making a very tasty and simple pie with wonderful berry."/>


  )
}

export default App
