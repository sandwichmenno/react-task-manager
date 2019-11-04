import React  from 'react';
import { useStateValue } from '../../../State';

import './Task.css';

import Button from '../../../UI/Button/Button';

const Task = props => {
    const [{ tasks }, dispatch] = useStateValue();

    return (
        <div className="Task">
            {props.title}
            <Button type="danger" onClick={() => dispatch({
                type: 'REMOVE_TASK',
                taskID: props.id
            })}>Remove</Button>
        </div>
    );
};

export default Task;