import React from 'react';
import WithFooter from '../components/Molecules/WithFooter';
import Slider from '../components/Atoms/Slider';

const Aliados = () => (
    <div className="aliados">
        <div className="menu margin">
            <div className="menu__cont np-element">
                <button className="menu__btn">Tienda</button>
            </div>
            <div className="menu__cont np-element">
                <button className="menu__btn">Alquiler</button>
            </div>
            <div className="menu__cont np-element">
                <button className="menu__btn">Membresia</button>
            </div>
        </div>
        <Slider
            img={[
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
            ]}
            title="Tus Favoritos"
            className="home__slider "
            withPlus
        ></Slider>
        <Slider
            img={[
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
            ]}
            title="Más populares"
            className="home__slider "
            withPlus
        ></Slider>
        <Slider
            img={[
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
            ]}
            title="Todos"
            className="home__slider "
            withPlus
        ></Slider>
    </div>
);

export default () => (
    <WithFooter>
        <Aliados></Aliados>
    </WithFooter>
);
