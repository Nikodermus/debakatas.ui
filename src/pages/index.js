import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import SEO from '../components/Atoms/SEO';
import WithFooter from '../components/Molecules/WithFooter';
import Progress from '../components/Atoms/Progress';
import Slider from '../components/Atoms/Slider';

const IndexPage = () => (
    <div className="home">
        <header className="home-header np-element">
            <figure className="user-pic np-element np-hover np-circle-xl np-shadow-border-circle">
                <img
                    className="user-pic__img"
                    src="https://loremflickr.com/200/200/person"
                    alt=""
                />
            </figure>
            <div className="user-info">
                <h1 className="user-info__name">Juan Pinzon</h1>
                <small className="user-info__type">Deportista</small>
                <Progress className="user-info__progress" color="yellow" />
                <small className="user-info__lvl">lvl 12</small>
            </div>
        </header>
        <Slider
            img={[
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
            ]}
            title="Tus Beneficiarios"
            className="home__slider"
            withPlus
        ></Slider>
        <Slider
            img={[
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
            ]}
            title="Tus Compras"
            className="home__slider"
        ></Slider>
        <Slider
            img={[
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
                'https://loremflickr.com/200/200/sport',
            ]}
            className="home__slider"
            title="Tus Compras"
        ></Slider>
        <SEO
            description="Genera ayuda social con tus compras"
            title="deBakatas Half Hackaton"
        ></SEO>
    </div>
);

export default () => (
    <WithFooter>
        <IndexPage></IndexPage>
    </WithFooter>
);
