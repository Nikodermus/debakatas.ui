import React from 'react';
import Footer from '../Atoms/Footer';

const WithFooter = ({ children }) => (
    <>
        {children}
        <Footer></Footer>
    </>
);

export default WithFooter;
