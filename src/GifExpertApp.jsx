import { useState } from 'react';
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        //categories.push(newCategory);
        //console.log(newCategory);

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories]);




    }


    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}   
        <AddCategory 
            onNewCategory = { (valor) => onAddCategory(valor) } 
        />

        {/* listado de gif */}        
        
        { 
        categories.map( ( category ) => (
                <GifGrid 
                    key = {category}
                    category = {category}
                />
            ))
        }        
        
    </>
  )
}
