import React  from 'react';
import { useStateValue } from '../../../../State';

import './AddTask.css';

import Button from '../../../../UI/Button/Button';
import Textarea from '../../../../UI/Textarea/Textarea';

const AddTask = props => {
    const [{ tasks, lists }, dispatch] = useStateValue();
    let listIndex = lists.listObjects.findIndex(obj => obj.id === props.listID);

    return (
        <div className="AddTask">
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
        </div>
    );
};

export default AddTask;