import React from 'react';
import { useLocation } from '@reach/router';
import WithFooter from '../../components/Molecules/WithFooter';

const Item = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    return <div>{id}</div>;
};

export default () => (
    <WithFooter>
        <Item></Item>
    </WithFooter>
);
