import React, { useState } from 'react';
import { useStateValue} from '../State';

import List from "./List/List";
import AddList from "./List/AddList/AddList";
import styled from "styled-components";

const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
    `;

const Board = () => {
    const [{ lists }, dispatch] = useStateValue();

    return (
        <Wrapper>
            {lists.listObjects.map((list, index) => ( <List title={list.title} id={list.id} key={index} />))}
            <AddList />
        </Wrapper>
    );
};

export default Board;