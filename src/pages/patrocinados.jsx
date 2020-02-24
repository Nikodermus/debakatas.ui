import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import WithFooter from '../components/Molecules/WithFooter';
import { awaitJson } from '../data/pages';

const Patrocinados = () => {
    const [data, setData] = useState([
        {
            spo_id: '1',
            spo_name: 'ANTONIO MIRANDA',
            spo_desc:
                'Soy deportista paralimpico y me estoy preparando para los Parapanamericanos',
            spo_create: '2020-02-22 11:34:44',
        },
    ]);

    useEffect(() => {
        (async () => {
            const response = await awaitJson('sponsored.php');
            setData(response.users);
        })();
    }, []);

    return (
        <div className="patrocinados">
            <h2 className="title-patrocinados np-element margin">
                Patrocina a un campeón
            </h2>
            <div className="patrocinado np-element margin">
                <ul className="patrocinado__info">
                    {data.map(({ spo_create, spo_id, spo_desc, spo_name }) => (
                        <li className=" patrocinado-info np-element">
                            <img
                                className="patrocinado__pic "
                                src={`https://loremflickr.com/350/200/people?id=${spo_id}`}
                                alt=""
                            />
                            <h3 className="patrocinado-info__title">
                                {spo_name}
                            </h3>
                            <p className="patrocinado-info__description">
                                {spo_desc}
                            </p>
                            <Link
                                className="patrocinado-info__btn np-element"
                                to={`/patrocinados/item?id=${spo_id}`}
                            >
                                Ver Más
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default () => (
    <WithFooter>
        <Patrocinados></Patrocinados>
    </WithFooter>
);
