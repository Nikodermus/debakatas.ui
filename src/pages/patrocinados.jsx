import React from 'react';
import WithFooter from '../components/Molecules/WithFooter';
import Item from './patrocinados/item';

const Patrocinados = () => (
    <div>
        <Item></Item>
    </div>
);

export default () => (
    <WithFooter>
        <Patrocinados></Patrocinados>
    </WithFooter>
);
