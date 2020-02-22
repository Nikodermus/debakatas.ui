import PropTypes from 'prop-types';
import React from 'react';

import Cactus from '../Atoms/FollowingCactus';
import ContactModal from '../Molecules/ContactModal';
import envelop from '../../images/envelop.svg';
import Modal from '../Atoms/Modal';

const Footer = ({ isContactOpen, setContactOpen }) => (
    <>
        <footer className="main-footer">
            <button type="button" onClick={() => setContactOpen(true)}>
                <Cactus className="main-footer__cactus"></Cactus>
                <img src={envelop} alt="" className="main-footer__envelop" />
            </button>
        </footer>
        <Modal isOpen={isContactOpen} onClose={() => setContactOpen(false)}>
            <ContactModal></ContactModal>
        </Modal>
    </>
);

Footer.propTypes = {
    isContactOpen: PropTypes.bool.isRequired,
    setContactOpen: PropTypes.func.isRequired,
};

export default Footer;
