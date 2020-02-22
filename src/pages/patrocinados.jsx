import React from 'react';
import WithFooter from '../components/Molecules/WithFooter';
import Item from './patrocinados/item';

const Patrocinados = () => (
    <div className="patrocinados">
        <h2 className="title-patrocinados np-element margin">
            Patrocina a un campeón
        </h2>
        <div className="patrocinado np-element margin">
            <img
                className="patrocinado__pic"
                src="https://loremflickr.com/350/200/sport"
                alt=""
            />
            <div className="patrocinado__info patrocinado-info">
                <h3 className="patrocinado-info__title">Los 5 del 20</h3>
                <p className="patrocinado-info__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, magnam. Iste odio officiis exercitationem
                    aliquam, quas laudantium consequatur ipsam sit delectus?
                    Ipsam est numquam vero consequatur repellendus sint autem
                    nulla?
                </p>
            </div>
        </div>
    </div>
);

export default () => (
    <WithFooter>
        <Patrocinados></Patrocinados>
    </WithFooter>
);
