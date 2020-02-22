import React from 'react';
import WithFooter from '../components/Molecules/WithFooter';

const Perfil = () => (
    <div>
        <figure>
            <img src="https://loremflickr.com/200/200/person" alt="" />
            <figcaption>
                <h1>Pepe Gonzales</h1>
                <small>lvl 11</small>
                <i>icon sex</i>
            </figcaption>
            <div className="progress"></div>
        </figure>

        <div>
            <p>
                <span>1000</span>
                <span>Puntos Gastados</span>
            </p>
            <p>
                <span>1000</span>
                <span>Puntos Ganados</span>
            </p>
        </div>
        <div>
            <h3>Titulo dato</h3>
            <p>Texto dato</p>
            <i>i</i>
        </div>
        <div>
            <h2>Siguiente nivel</h2>
            <div className="progress"></div>
            <small>12</small>
        </div>
        <div>
            <h2>Historico de compras</h2>
            <ul>
                <li>
                    <h3>Compra en Adidas</h3>
                    <span>+12 pts</span>
                </li>
            </ul>
        </div>
    </div>
);

export default () => (
    <WithFooter>
        <Perfil></Perfil>
    </WithFooter>
);
