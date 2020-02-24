import React, { useState } from 'react';
import WithFooter from '../components/Molecules/WithFooter';
import Slider from '../components/Atoms/Slider';

const Aliados = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="aliados">
            <div className="menu margin">
                <div className="menu__cont np-element">
                    <button
                        className="menu__btn"
                        type="button"
                        onClick={() => setActive(0)}
                    >
                        Tienda
                    </button>
                </div>
                <div className="menu__cont np-element">
                    <button
                        className="menu__btn"
                        type="button"
                        onClick={() => setActive(1)}
                    >
                        Alquiler
                    </button>
                </div>
                <div className="menu__cont np-element">
                    <button
                        className="menu__btn"
                        type="button"
                        onClick={() => setActive(2)}
                    >
                        Membresia
                    </button>
                </div>
            </div>
            <Slider
                img={[
                    `https://loremflickr.com/200/200/sport?a=${active}1`,
                    `https://loremflickr.com/200/200/sport?a=${active}2`,
                    `https://loremflickr.com/200/200/sport?a=${active}3`,
                    `https://loremflickr.com/200/200/sport?a=${active}4`,
                ]}
                title="Tus Favoritos"
                className="home__slider "
                withPlus
            ></Slider>
            <Slider
                img={[
                    `https://loremflickr.com/200/200/sport?a=${active}5`,
                    `https://loremflickr.com/200/200/sport?a=${active}6`,
                    `https://loremflickr.com/200/200/sport?a=${active}7`,
                    `https://loremflickr.com/200/200/sport?a=${active}8`,
                ]}
                title="Más populares"
                className="home__slider "
                withPlus
            ></Slider>
            <Slider
                img={[
                    `https://loremflickr.com/200/200/sport?a=${active}9`,
                    `https://loremflickr.com/200/200/sport?a=${active}10`,
                    `https://loremflickr.com/200/200/sport?a=${active}11`,
                    `https://loremflickr.com/200/200/sport?a=${active}12`,
                ]}
                title="Todos"
                className="home__slider "
                withPlus
            ></Slider>
        </div>
    );
};

export default () => (
    <WithFooter>
        <Aliados></Aliados>
    </WithFooter>
);
