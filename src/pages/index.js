import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import SEO from '../components/Atoms/SEO';
import WithFooter from '../components/Molecules/WithFooter';
import Progress from '../components/Atoms/Progress';
import Slider from '../components/Atoms/Slider';
import { awaitJson } from '../data/pages';

const IndexPage = () => {
    const [data, setData] = useState({
        user_name: '',
        user_last: '',
        user_mail: '',
        user_ptos_gain: '',
    });

    useEffect(() => {
        (async () => {
            const response = await awaitJson('unusuario.php?key=1');
            setData(response.users[0]);
        })();
    }, []);

    const { user_last, user_mail, user_name, user_ptos_gain } = data;

    return (
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
                    <h1 className="user-info__name">{`${user_name} ${user_last}`}</h1>
                    <small className="user-info__type">{user_mail}</small>
                    <Progress className="user-info__progress" color="yellow" />
                    <small className="user-info__lvl">
                        {user_ptos_gain} pts
                    </small>
                </div>
            </header>
            <Slider
                img={[
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                ]}
                title="Tus Beneficiarios"
                className="home__slider"
                withPlus
            ></Slider>
            <Slider
                img={[
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                    `https://loremflickr.com/200/200/sport?a=${Math.random()}`,
                ]}
                title="Tus Compras"
                className="home__slider"
            ></Slider>

            <SEO
                description="Genera ayuda social con tus compras"
                title="deBakatas Half Hackaton"
            ></SEO>
        </div>
    );
};

export default () => (
    <WithFooter>
        <IndexPage></IndexPage>
    </WithFooter>
);
