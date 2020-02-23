import React from 'react';
import { useLocation } from '@reach/router';
import WithFooter from '../../components/Molecules/WithFooter';
import Progress from '../../components/Atoms/Progress';

const Item = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    return (
        <div className="item">
            <div className=" patrocinado-item">
                <div className="patrocinado-item__pic np-element">
                    <img
                        className="patrocinado-item__img "
                        src="https://loremflickr.com/350/200/sport"
                        alt=""
                    />
                    <h3 className="patrocinado-item__title">Los 5 del 20</h3>
                </div>
                <div className="np-element">
                    <div className="wish np-element">
                        <h3 className="wish__title">Wish</h3>
                        <img
                            className="wish__pic "
                            src="https://loremflickr.com/200/200/sport"
                            alt=""
                        />
                        <p className="wish__txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi corporis.
                        </p>
                    </div>
                    <div className="progreso-patrocinado np-element">
                        <h3 className="progreso-patrocinado__title">
                            Progreso
                        </h3>
                        <Progress className="" color="green"></Progress>
                        <p className="progreso-patrocinado__txt">1300/2000</p>
                    </div>
                    <div className="patrocinado-por np-element">
                        <h3 className="patrocinado-por__title">
                            Ya nos patrocina
                        </h3>
                        <ul className="patrocinado-por__list">
                            <li className="patrocinado-por__item">
                                <a className="patrocinado-por__link" href="#">
                                    Empresa 1
                                </a>
                            </li>
                            <li className="patrocinado-por__item">
                                <a className="patrocinado-por__link" href="#">
                                    Empresa 2
                                </a>
                            </li>
                            <li className="patrocinado-por__item">
                                <a className="patrocinado-por__link" href="#">
                                    Empresa 3
                                </a>
                            </li>
                            <li className="patrocinado-por__item">
                                <a className="patrocinado-por__link" href="#">
                                    Empresa 4
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="patrocinadoItem-description np-element">
                        <h3 className="patrocinadoItem-description__title">
                            Descripción
                        </h3>
                        <p className="patrocinadoItem-description__txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos, magnam. Iste odio officiis
                            exercitationem aliquam, quas laudantium consequatur
                            ipsam sit delectus? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Perspiciatis ab esse
                            est doloremque eum, nostrum fugit nemo neque, sequi
                            architecto accusantium dolore temporibus voluptate!
                            Repellat velit modi omnis provident. Adipisci.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default () => (
    <WithFooter>
        <Item></Item>
    </WithFooter>
);
