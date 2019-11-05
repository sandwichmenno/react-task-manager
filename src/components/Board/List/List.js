import React  from 'react';
import { useStateValue } from '../../State';

import Task from './Task/Task';
import AddTask from './Task/AddTask/AddTask';
import Button from '../../UI/Button/Button';
import styled from "styled-components";

const Container = styled.div`
    background: #ebecf0;
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    flex: 0 0 25%;
    max-height: 100%;
    position: relative;
    margin: 0 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 3px;

    background: #172b4d;
    padding: 5px 10px;
    position: relative;
`;

const RemoveButton = styled(Button)`
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    padding: 3px 10px;
    margin-right: 0;
    width: auto;
`;

const List = props => {
    const [{ tasks, lists }, dispatch] = useStateValue();

    const showTasks = tasks.taskObjects.map((task, index) => {
        return task.listID === props.id ? <Task title={task.title} id={task.id} key={index} /> : null
    });

    return (
        <Container>
            <Title>{props.title} <RemoveButton type="danger" onClick={() => dispatch({
                type: 'REMOVE_LIST',
                listID: props.id
            })}>Remove list</RemoveButton></Title>
            <Wrapper>
                {showTasks}
                <AddTask listID={props.id}/>
            </Wrapper>
        </Container>
    );
};

export default List;