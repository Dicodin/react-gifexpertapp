import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // Uso mi "custom hook" "useFecthGifs"
    const { data: images, loading } = useFecthGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {/* Para abreviar la condición "if" con un solo resultado */}
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id} // Cada elemento debe tener su key
                            {...img} // Usamos el operador spread para enviar todas las props
                        ></GifGridItem>
                    ))
                }
            </div>
        </>
    )
}