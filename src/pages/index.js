import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import SEO from '../components/Atoms/SEO';
import WithFooter from '../components/Molecules/WithFooter';

const IndexPage = () => (
    <>
        <div>
            <img src="https://loremflickr.com/200/200/person" alt="" />
            <h1>Juan Pinzon</h1>
            <div className="progress"></div>
            <small>lvl 12</small>
        </div>
        <div>
            <h2>Tus beneficiarios</h2>
            <ul>
                <li>
                    <a href="">
                        <img
                            src="https://loremflickr.com/200/200/sport"
                            alt=""
                        />
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h2>Tus Compras</h2>
            <ul>
                <li>
                    <a href="">
                        <img
                            src="https://loremflickr.com/200/200/sport"
                            alt=""
                        />
                    </a>
                </li>
            </ul>
        </div>
        <SEO
            description="Genera ayuda social con tus compras"
            title="deBakatas Half Hackaton"
        ></SEO>
    </>
);

export default () => (
    <WithFooter>
        <IndexPage></IndexPage>
    </WithFooter>
);
