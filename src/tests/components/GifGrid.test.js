import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFecthGifs } from "../../hooks/useFetchGifs";

// Para simular cualquier llamada al archivo "useFetchGifs" para posteriormente controlar lo que va a responder
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas sobre <GifGrid></GifGrid>', () => {

    const category = 'Tao';

    test('debe de mostrar correctamente el componente ', () => {

        // Para simular que realizamos una petición, pero en este caso retorna el estado inicial
        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes con useFecthGifs ', () => {

        // Debido a que "getGifs" esta difinido de esta forma
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        // Simulamos que ya obtuvimos un resultado, por lo tanto el "loading" terimnará en "false"
        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}></GifGrid>);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });

});
