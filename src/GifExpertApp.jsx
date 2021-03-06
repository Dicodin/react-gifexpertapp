import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    // const categories = ['Samurai Champloo', 'Samurai X', 'Death Note'];
    const [categories, setCategories] = useState(['Samurai Champloo']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>

            <ol>
                {
                    // El key es obligatorio y no puede ser el índice del arreglo
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}>
                        </GifGrid>
                    ))
                }
            </ol>
        </>
    );

};

export default GifExpertApp;