import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe('Pruebas sobre <GifExpertApp></GifExpertApp>', () => {

    test('debe de mostrar de forma correcta el componente ', () => {

        const wrapper = shallow(<GifExpertApp></GifExpertApp>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias ', () => {

        const categories = ['Tao', 'Buda'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });

});
