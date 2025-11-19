import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipesPage from '/src/pages/RecipesPage/RecipesPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipesPage></RecipesPage>
  </StrictMode>,
)
