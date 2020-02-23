import React from 'react';
import WithFooter from '../components/Molecules/WithFooter';
import Item from './patrocinados/item';

const Patrocinados = () => (
    <div className="patrocinados">
        <h2 className="title-patrocinados np-element margin">
            Patrocina a un campeón
        </h2>
        <div className="patrocinado np-element margin">
            <ul className="patrocinado__info">
                <li className=" patrocinado-info np-element">
                    <img
                        className="patrocinado__pic "
                        src="https://loremflickr.com/350/200/sport"
                        alt=""
                    />
                    <h3 className="patrocinado-info__title">Los 5 del 20</h3>
                    <p className="patrocinado-info__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, magnam. Iste odio officiis exercitationem
                        aliquam, quas laudantium consequatur ipsam sit delectus?
                    </p>
                    <button
                        type="submit"
                        className="patrocinado-info__btn np-element"
                    >
                        Ver Más
                    </button>
                </li>
                <li className=" patrocinado-info np-element">
                    <img
                        className="patrocinado__pic "
                        src="https://loremflickr.com/350/200/sport"
                        alt=""
                    />
                    <h3 className="patrocinado-info__title">Los 5 del 20</h3>
                    <p className="patrocinado-info__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, magnam. Iste odio officiis exercitationem
                        aliquam, quas laudantium consequatur ipsam sit delectus?
                    </p>
                    <button
                        type="submit"
                        className="patrocinado-info__btn np-element"
                    >
                        Ver Más
                    </button>
                </li>
                <li className=" patrocinado-info np-element">
                    <img
                        className="patrocinado__pic"
                        src="https://loremflickr.com/350/200/sport"
                        alt=""
                    />
                    <h3 className="patrocinado-info__title">Los 5 del 20</h3>
                    <p className="patrocinado-info__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, magnam. Iste odio officiis exercitationem
                        aliquam, quas laudantium consequatur ipsam sit delectus?
                    </p>
                    <button
                        type="submit"
                        className="patrocinado-info__btn np-element"
                    >
                        Ver Más
                    </button>
                </li>
            </ul>
        </div>
    </div>
);

export default () => (
    <WithFooter>
        <Patrocinados></Patrocinados>
    </WithFooter>
);
