import React, { useState } from 'react';
import { useStateValue} from '../State';

import './Board.css';

import List from "./List/List";
import AddList from "./List/AddList/AddList";

const Board = () => {
    const [{ lists }, dispatch] = useStateValue();

    return (
        <div className="Board">
            {lists.listObjects.map((list, index) => ( <List title={list.title} id={list.id} key={index} />))}
            <AddList />
        </div>
    );
};

export default Board;