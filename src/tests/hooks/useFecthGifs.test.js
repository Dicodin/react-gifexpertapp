import { useFecthGifs } from "../../hooks/useFetchGifs";
// Para evaluar custom hooks
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en el hook useFecthGifs', () => {

    test('debe de retornar el estado incial ', async () => {

        // Usamos "waitForNextUpdate" para validar el cambio en el estado del custom hook
        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('Tao'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    });

    test('debe de reornar un arrglo de imgs y el loading en false ', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('Tao'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        // Porque definimos como limite de 10 los resultados entregados por la API
        expect(data.length).toBe(10);
        // Porque en teoría ya terminó de cargar los resultados
        expect(loading).toBeFalsy();

    });

});
