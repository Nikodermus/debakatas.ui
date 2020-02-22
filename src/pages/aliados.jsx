import React from 'react';
import WithFooter from '../components/Molecules/WithFooter';

const Aliados = () => (
    <div>
        <nav>
            <ul>
                <li>
                    <a href="">
                        <img
                            src="https://loremflickr.com/200/200/icon"
                            alt=""
                        />
                    </a>
                </li>
            </ul>
        </nav>
        <div>
            <h2>Favoritos</h2>
            <ul>
                <li>
                    <img src="https://loremflickr.com/200/200/shop" alt="" />
                </li>
            </ul>
        </div>
        <div>
            <h2>Ultimas Compras</h2>
            <ul>
                <li>
                    <img src="https://loremflickr.com/200/200/run" alt="" />
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <img src="https://loremflickr.com/200/200/swim" alt="" />
                </li>
            </ul>
        </div>
    </div>
);

export default () => (
    <WithFooter>
        <Aliados></Aliados>
    </WithFooter>
);
