import React  from 'react';
import './Task.css';

import Button from '../../../UI/Button/Button';

const Task = props => {
    return (
        <div className="Task">
            {props.title}
            <Button text="Remove" type="danger" buttonClicked={props.taskRemoved}/>
        </div>
    );
};

export default Task;