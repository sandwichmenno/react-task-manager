import React  from 'react';
import { useStateValue } from '../../../State';
import styled from 'styled-components';

import Button from '../../../UI/Button/Button';

const Container = styled.div`
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 8px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
    flex: 1;
    box-sizing: border-box;
    padding: 5px 10px;
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

const Task = props => {
    const [{ tasks }, dispatch] = useStateValue();

    return (
        <Container>
            {props.title}
            <RemoveButton name="task" type="danger" onClick={() => dispatch({
                type: 'REMOVE_TASK',
                taskID: props.id
            })}>Remove</RemoveButton>
        </Container>
    );
};

export default Task;