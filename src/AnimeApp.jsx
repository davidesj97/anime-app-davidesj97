import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const AnimeApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = () => {
    setCategories([...categories, "Naruto"])
  }

  return (
    <>
      {/* Titulo */}
      <h1>AnimeApp</h1>

      {/* Input busqueda */}
      <AddCategory />

      {/* Listado */}
      <button onClick={onAddCategory}>Agregar</button>
      <ul>
        {categories.map(category => (<li key={category}>{category}</li>))}
      </ul>
    </>
  )
}
