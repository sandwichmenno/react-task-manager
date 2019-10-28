import React  from 'react';

import './AddTask.css';

import Button from '../../../../UI/Button/Button';
import Textarea from '../../../../UI/Textarea/Textarea';

const AddTask = props => {
    return (
        <div className="AddTask">
            <Textarea updateInput={props.updateInput}/>
            <Button type="success" text="Add task" buttonClicked={props.taskAdded}/>
        </div>
    );
};

export default AddTask;