import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { AnimeGrid } from './components/AnimeGrid';

export const AnimeApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>AnimeApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {
          categories.map(category => (
            <AnimeGrid key={category} category={category} />
          ))
        }
    </>
  )
}
