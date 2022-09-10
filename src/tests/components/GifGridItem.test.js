import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas sobre <GifGridItem></GifGridItem>', () => {

            const title = 'titulo';
            const url = 'https://localhost/imagen.jpg';
            const wrapper = shallow( < GifGridItem title = { title }
                url = { url } > < /GifGridItem>);

                test('debe de mostrar de forma correcta el componente ', () => {

                    expect(wrapper).toMatchSnapshot();

                });

                test('debe de tener un title ', () => {

                    const p = wrapper.find('p');
                    expect(p.text().trim()).toBe(title);

                });

                test('debe de tener la imagen igual al url y alt de los props ', () => {

                    const img = wrapper.find('img');
                    expect(img.prop('src')).toBe(url);
                    expect(img.prop('alt')).toBe(title);

                });

                test('debe de tener la clase animate__fadeIn ', () => {

                    const div = wrapper.find('div');
                    expect(div.hasClass('animate__fadeIn')).toBe(true);

                });


            });