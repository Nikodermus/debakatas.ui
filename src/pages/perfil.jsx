/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import WithFooter from '../components/Molecules/WithFooter';
import Progress from '../components/Atoms/Progress';
import { awaitJson } from '../data/pages';

const Perfil = () => {
    const [userData, setData] = useState({
        user_name: '',
        user_last: '',
        user_mail: '',
        user_ptos_gain: 0,
        user_ptos_gave: 0,
        user_dob: new Date(),
    });

    const [transactionData, setTransactions] = useState([
        {
            Fecha: '0000-00-00 00:00:00',
            tienda: 'CASA OLIMPICA',
            pro_id: '1',
            pro_name: 'ZAPATILLAS PARA MARATON',
            pro_marca: 'ADIDAS',
            pro_val: '130000',
            pro_ptos_win: '13',
            pro_ptos_cost: '130000',
        },
    ]);

    useEffect(() => {
        (async () => {
            const userRes = await awaitJson('unusuario.php?key=1');
            const transRes = await awaitJson('userTransaccion.php?key=1');
            setData(userRes.users[0]);
            setTransactions(transRes.compras);
        })();
    }, []);

    const {
        user_last,
        user_mail,
        user_name,
        user_ptos_gain,
        user_ptos_gave,
        user_dob,
    } = userData;

    return (
        <div className="main">
            <figure className="perfil np-element margin">
                <div className="np-element np-circle-xxl np-shadow-border-circle">
                    <img
                        className=" perfil__picture "
                        src="https://loremflickr.com/200/200/person"
                        alt=""
                    />
                </div>
                <figcaption className="perfil__info">
                    <div className="info-perfil np-element">
                        <h1 className="info-perfil__name">{`${user_name} ${user_last}`}</h1>
                        <i className="info-perfil__gender np-img-wrapper np-element ">
                            <svg
                                version="1.1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 349.54 349.54"
                                xmlSpace="preserve"
                                className="info-perfil__gender-img p-img-expand"
                            >
                                <path
                                    d="M284.17,89.848c-1.414-7.138-3.531-14.119-6.32-20.84c-2.796-6.751-6.253-13.209-10.32-19.28
			c-8.179-12.246-18.685-22.765-30.92-30.96c-12.105-8.131-25.699-13.787-40-16.64c-14.422-2.837-29.258-2.837-43.68,0
			c-14.301,2.852-27.896,8.508-40,16.64c-12.231,8.183-22.737,18.689-30.92,30.92c-8.131,12.105-13.786,25.699-16.64,40
			c-2.838,14.422-2.838,29.258,0,43.68c2.852,14.301,8.508,27.896,16.64,40c10.815,16.169,25.646,29.25,43.04,37.96
			c10.548,5.397,21.891,9.07,33.6,10.88c2.335,0.211,4.095,2.217,4,4.56v31.6c0,2.43-1.97,4.4-4.4,4.4h-46.64
			c-3.148,0.013-6.165,1.263-8.4,3.48c-4.484,4.545-4.625,11.805-0.32,16.52l0.24,0.2c1.149,1.111,2.509,1.982,4,2.56
			c1.433,0.596,2.968,0.909,4.52,0.92h46.72c1.169-0.005,2.291,0.456,3.12,1.28c0.761,0.828,1.176,1.916,1.16,3.04v46.76
			c-0.006,1.563,0.293,3.112,0.88,4.56c0.572,1.494,1.444,2.855,2.56,4c1.145,1.117,2.506,1.989,4,2.56
			c2.91,1.189,6.17,1.189,9.08,0c1.494-0.572,2.855-1.444,4-2.56c1.116-1.145,1.988-2.506,2.56-4c0.587-1.448,0.886-2.997,0.88-4.56
			v-46.76c-0.005-1.169,0.456-2.291,1.28-3.12c0.829-0.824,1.951-1.285,3.12-1.28h46.68c1.563,0.006,3.112-0.293,4.56-0.88
			c1.494-0.572,2.855-1.443,4-2.56c1.116-1.145,1.988-2.506,2.56-4c1.189-2.91,1.189-6.17,0-9.08
			c-0.312-0.758-0.701-1.482-1.16-2.16l-1.56-1.56c-2.235-2.217-5.252-3.467-8.4-3.48h-46.76c-1.169,0.005-2.291-0.456-3.12-1.28
			c-0.824-0.829-1.285-1.951-1.28-3.12v-29.44v-2.04c0.002-1.059,0.385-2.081,1.08-2.88c0.691-0.786,1.643-1.297,2.68-1.44
			c11.874-1.678,23.397-5.272,34.12-10.64c24.149-12.068,43.127-32.451,53.44-57.4c2.791-6.734,4.908-13.728,6.32-20.88
			C287.008,119.106,287.008,104.269,284.17,89.848z M260.85,128.848v0.16c-9.803,47.805-56.504,78.612-104.309,68.809
			c-47.805-9.803-78.612-56.504-68.809-104.309c9.803-47.805,56.504-78.612,104.309-68.809
			c41.276,8.464,70.833,44.895,70.609,87.029C262.612,117.479,262.009,123.214,260.85,128.848z"
                                />
                            </svg>
                        </i>
                    </div>
                    <div className="perfil__lvl perfil-lvl">
                        <Progress className="g" color="blue"></Progress>
                        <small className="perfil-lvl__lvl">lvl 11</small>
                    </div>
                </figcaption>
                <div className="progress"></div>
            </figure>

            <div className="puntos margin">
                <p className="puntos__generados puntos-generados np-element">
                    <span className="puntos-generados__valor">
                        {user_ptos_gain} pts
                    </span>
                    <span className="puntos-generados__txt">
                        Puntos Gastados
                    </span>
                </p>
                <p className="puntos__generados puntos-generados np-element">
                    <span className="puntos-generados__valor">
                        {user_ptos_gave || 0} pts
                    </span>
                    <span className="puntos-generados__txt">
                        Puntos Ganados
                    </span>
                </p>
            </div>

            <div className="datos np-element">
                <h3 className="datos__titulo">Correo</h3>
                <p className="datos__dato">{user_mail}</p>
            </div>
            <div className="datos np-element">
                <h3 className="datos__titulo">Teléfono</h3>
                <p className="datos__dato">320 897 2130</p>
            </div>
            <div className="datos np-element">
                <h3 className="datos__titulo">Fecha de Nacimiento</h3>
                <p className="datos__dato">
                    {new Date(user_dob).toLocaleDateString()}
                </p>
            </div>

            <div className="historico">
                <h2 className="historico__title">Historico de compras</h2>
                <ul className="historico__list">
                    {transactionData.map(
                        ({
                            Fecha,
                            tienda,
                            pro_id,
                            pro_name,
                            pro_marca,
                            pro_val,
                            pro_ptos_win,
                            pro_ptos_cost,
                        }) => (
                            <li className="list-historico np-element margin">
                                <h3 className="list-historico__title">
                                    Compra en {tienda}
                                </h3>
                                <span className="list-historico__data">
                                    +{pro_ptos_win} pts
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default () => (
    <WithFooter>
        <Perfil></Perfil>
    </WithFooter>
);
