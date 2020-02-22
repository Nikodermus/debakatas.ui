import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import logo from '../../images/logo-debakatas-ba.svg';
import { title } from '../../data/page';
import { CSS_TRANSITION_TIME } from '../../data/css';

const Header = ({ activeView }) => (
    <header className="main-header">
        <h1>
            <Link to="/" className="db-logo">
                <img className="db-logo__img" src={logo} alt="" />
            </Link>
        </h1>
        <TransitionGroup className="title-wrapper">
            <CSSTransition
                key={activeView}
                timeout={CSS_TRANSITION_TIME}
                classNames={{
                    enter: 'title-in',
                    enterActive: 'title-in--active',
                    exit: 'title-out',
                    exitActive: 'title-out--active',
                }}
            >
                <h2 className="header-title">
                    {title[activeView].pre}
                    <span className="header-title__highlight">
                        {title[activeView].post}
                    </span>
                </h2>
            </CSSTransition>
        </TransitionGroup>
    </header>
);

Header.propTypes = {
    activeView: PropTypes.string.isRequired,
};

export default Header;
