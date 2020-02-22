import React from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { data } from '../../data/pages';

const Footer = () => {
    const { pathname } = useLocation();

    const to = pathname.split('/')[1] || '';

    return (
        <>
            <footer>
                <ul className={`main-footer main-footer--${data[to].color}`}>
                    {Object.keys(data).map((key) => (
                        <li className="main-footer__item" key={key}>
                            <Link
                                to={`/${key}`}
                                dangerouslySetInnerHTML={{
                                    __html: data[key].img,
                                }}
                            ></Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
};

export default Footer;
