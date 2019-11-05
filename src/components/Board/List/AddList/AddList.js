import React  from 'react';
import { useStateValue } from '../../../State';

import Button from '../../../UI/Button/Button';
import Textarea from '../../../UI/Textarea/Textarea';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    background: rgba(235, 236, 240, 0.24);
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    flex: 0 0 15%;
    max-height: 100%;
    position: relative;
    margin: 0 20px;
`;

const AddList = props => {
    const [{ lists }, dispatch] = useStateValue();

    return (
        <Container>
            <Textarea value={lists.listInput} onChange={(e) => dispatch({
                type: 'CHANGE_LIST',
                inputValue: e.target.value
            })}/>
            <Button type="success" onClick={() => dispatch({
                type: 'ADD_LIST',
                newList: {
                    title: lists.listInput,
                    taskInput: '',
                    id: lists.lastID + 1,
                },
                newID: lists.lastID + 1
            })}>Add list</Button>
        </Container>
    );
};

export default AddList;