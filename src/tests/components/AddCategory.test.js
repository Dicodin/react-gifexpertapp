import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory></AddCategory>', () => {

    const setCategories = jest.fn();
    let wrapper;
    let input = undefined;
    let value = '';

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);
        input = wrapper.find('input');
        value = 'Buda';
    });

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto ', () => {

        // De esta forma simulo el cambio de valor de una caja de texto
        input.simulate('change', { target: { value } });

    });

    test('NO debe de postear la información con Submit si no se ha introducido nigún valor en el input', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();

        // Para evaluar que solo se ejecute una vez setCategories (tendrá error si recibe como parámetro > 1)
        expect(setCategories).toHaveBeenCalledTimes(1);

        // Para evaluar que setCategories sea una función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.prop('value')).toBe('');

    });

});
