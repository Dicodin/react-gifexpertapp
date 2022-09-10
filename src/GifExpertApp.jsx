import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['Samurai Champloo', 'Samurai X', 'Death Note'];
    // const [categories, setCategories] = useState(['Samurai Champloo']);
    const [categories, setCategories] = useState(defaultCategories);

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