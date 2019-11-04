import React  from 'react';
import { useStateValue } from '../../State';
import './List.css';

import Task from './Task/Task';
import AddTask from './Task/AddTask/AddTask';
import Button from '../../UI/Button/Button';

const List = props => {
    const [{ tasks, lists }, dispatch] = useStateValue();

    const showTasks = tasks.taskObjects.map((task, index) => {
        return task.listID === props.id ? <Task title={task.title} id={task.id} key={index} /> : null
    });

    return (
        <div className="List">
            <div className="title">{props.title} <Button type="danger" onClick={() => dispatch({
                type: 'REMOVE_LIST',
                listID: props.id
            })}>Remove list</Button></div>
            <div className="wrapper">
                {showTasks}
                <AddTask listID={props.id}/>
            </div>
        </div>
    );
};

export default List;