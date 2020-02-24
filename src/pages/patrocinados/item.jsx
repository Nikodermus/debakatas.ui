import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import WithFooter from '../../components/Molecules/WithFooter';
import Progress from '../../components/Atoms/Progress';
import { awaitJson } from '../../data/pages';

const Item = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const [itemData, setData] = useState({
        spo_id: '',
        spo_name: '',
        spo_desc: '',
        spo_create: '',
    });

    const [data, setUsersData] = useState([
        {
            user_name: '',
            user_last: '',
            user_mail: '',
            user_ptos_gain: '',
        },
    ]);

    useEffect(() => {
        (async () => {
            const response = await awaitJson(`unsponsored.php?key=${id}`);
            const userResponse = await awaitJson('usuarios.php');
            setData(response.users[0]);
            setUsersData(userResponse.users);
        })();
    }, [id]);

    const { spo_id, spo_name, spo_desc, spo_create } = itemData;

    return (
        <div className="item">
            <div className=" patrocinado-item">
                <div className="patrocinado-item__pic np-element">
                    <img
                        className="patrocinado-item__img "
                        src={`https://loremflickr.com/350/200/sport?id=${id}`}
                        alt=""
                    />
                    <h3 className="patrocinado-item__title">{spo_name}</h3>
                </div>
                <div className="np-element">
                    <div className="wish np-element">
                        <h3 className="wish__title">Wish</h3>
                        <img
                            className="wish__pic "
                            src={`https://loremflickr.com/350/200/gift?id=${id}`}
                            alt=""
                        />
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
                            {data.map(({ user_name }) => (
                                <li className="patrocinado-por__item">
                                    {user_name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="patrocinadoItem-description np-element">
                        <h3 className="patrocinadoItem-description__title">
                            Descripción
                        </h3>
                        <p className="patrocinadoItem-description__txt">
                            {spo_desc}
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
