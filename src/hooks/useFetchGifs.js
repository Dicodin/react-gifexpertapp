// Todos los "hooks" inician on "use" en su nombre
// Este es un "custom hook"
// Los "custom hooks" son como "Functional Cmponents"
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // "useEffect" para indicar que quiero que la función "getGifs" se ejecute una única vez si el arreglo como segundo argumento esta vacío
    // Enviamos "category" como parámetro en el arreglo por si deseamos que el componenete se vuelva a jecutar por medio del "useEffect"
    // Los "useEffect" no pueden ser "async"
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state; // {data: [], loading: true}
}