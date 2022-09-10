import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elemientos ', async() => {

        const gifs = await getGifs('Tao');

        expect(gifs.length).toBe(10);

    });

    test('debe de traer 0 elemientos si no se envía la category ', async() => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });

});