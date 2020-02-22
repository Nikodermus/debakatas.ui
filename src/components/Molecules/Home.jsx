import PropTypes from 'prop-types';
import React from 'react';

import {
    CHANGE_SHAPE_TIME_HIGHEST,
    CHANGE_SHAPE_TIME_LOWEST,
} from '../../data/css';
import { ELEPHANT, BEAN, PEAR } from '../../data/svg-shapes';
import Button from '../Atoms/Button';
import code from '../../images/code.png';
import dogComputer from '../../images/dog-computer.png';
import FloatingShape from './FloatingShapeSSR';

const getRandomSpeed = () =>
    Math.random() * (CHANGE_SHAPE_TIME_HIGHEST - CHANGE_SHAPE_TIME_LOWEST) +
    CHANGE_SHAPE_TIME_LOWEST;

const Home = ({ setContactOpen }) => (
    <section id="home" className="section cah-section">
        <figure>
            <div className="image-home">
                <FloatingShape
                    className="image-home__float image-home__float--blue"
                    shapes={ELEPHANT}
                    speed={getRandomSpeed()}
                ></FloatingShape>
                <FloatingShape
                    className="image-home__float image-home__float--green"
                    shapes={BEAN}
                    speed={getRandomSpeed()}
                ></FloatingShape>
                <img src={code} alt="" />
                <FloatingShape
                    className="image-home__float image-home__float--red"
                    shapes={PEAR}
                    speed={getRandomSpeed()}
                ></FloatingShape>
                <img
                    className="image-home__float image-home__float--dog"
                    src={dogComputer}
                    alt=""
                />
            </div>
            <figcaption className="cah-section__description">
                <p>
                    Creamos videos, workshops, tutoriales y cursos que te
                    permiten aprender a programar de una manera diferente y
                    divertida.
                </p>
                <br />
                <p>
                    <strong>Totalmente gratis</strong> en la ciudad de Bogotá.
                </p>
            </figcaption>
        </figure>
        <Button onClick={() => setContactOpen(true)}>Descubre</Button>
    </section>
);

Home.propTypes = {
    setContactOpen: PropTypes.func.isRequired,
};

export default Home;
