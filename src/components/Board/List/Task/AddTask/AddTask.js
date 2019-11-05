import React  from 'react';
import { useStateValue } from '../../../../State';

import Button from '../../../../UI/Button/Button';
import Textarea from '../../../../UI/Textarea/Textarea';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex:1;
    flex-wrap: wrap;
`;

const AddTask = props => {
    const [{ tasks, lists }, dispatch] = useStateValue();
    let listIndex = lists.listObjects.findIndex(obj => obj.id === props.listID);

    return (
        <Container>
            <Textarea onChange={(e) => dispatch({
                type: 'CHANGE_INPUT',
                inputValue: e.target.value,
                listID: props.listID
            })}/>
            <Button type="success" onClick={() => dispatch({
                type: 'ADD_TASK',
                newTask: {
                    id: tasks.lastID + 1,
                    title: lists.listObjects[listIndex].taskInput,
                    listID: props.listID,
                },
                newID: tasks.lastID + 1
            })}>Add task</Button>
        </Container>
    );
};

export default AddTask;