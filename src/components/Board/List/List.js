import React  from 'react';
import './List.css';

import Task from './Task/Task';
import AddTask from './Task/AddTask/AddTask';
import Button from '../../UI/Button/Button';

const List = props => {
    const tasks = props.tasks.map((task, index) => {
        return task.listID === props.id ? <Task title={task.title} taskID={task.id} taskRemoved={() => props.removeTask(task.id)} key={index} /> : null
    });

    return (
        <div className="List">
            <div className="title">{props.title} <Button type="danger" text="Remove list" buttonClicked={props.removeList}/></div>
            <div className="wrapper">
                {tasks}
                <AddTask taskAdded={props.taskAdded} updateInput={props.updateInput}/>
            </div>
        </div>
    );
};

export default List;