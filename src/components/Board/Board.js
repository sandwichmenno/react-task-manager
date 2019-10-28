import React, { useState } from 'react';

import './Board.css';

import List from "./List/List";
import AddList from "./List/AddList/AddList";

const Board = props => {
    const [tasks, setTasks] = useState([]);

    const [lists, setLists] = useState([
        {
            title: 'Todo',
            id: 0
        },
        {
            title: 'Done',
            id: 1
        }
    ]);

    const [inputTaskText, setInputTaskText] = useState("");
    const [inputListText, setInputListText] = useState("");

    const [taskTotal, setTaskTotal] = useState(2);
    const [listTotal, setListTotal] = useState(2);

    const addTaskHandler = (listID) => {
        if(inputTaskText === "") { return; }

        const taskObject = {
            id: taskTotal,
            title: inputTaskText,
            listID: listID,
        };
        const updatedTasks = tasks.concat(taskObject);
        setTasks(updatedTasks);
        setTaskTotal(taskTotal+1);
    };

    const removeTaskHandler = (taskID) => {
        const array = [...tasks];

        array.map((task, index) => {
            if(task.id === taskID) {
                array.splice(index, 1);
                setTasks(array);
            }
            return true;
        });
    };

    const AddListHandler = () => {
        if(inputListText === "") { return; }

        const listObject = {
            title: inputListText,
            id: listTotal,
        };
        const updatedLists = lists.concat(listObject);
        setLists(updatedLists);

        setInputListText("");
        setListTotal(listTotal+1);
    };

    const removeListHandler = (listID) => {
        const array = [...lists];

        array.map((list, index) => {
            if(list.id === listID) {
                array.splice(index, 1);
                setLists(array);
            }
            return true;
        });
    };

    const handleInputTaskChange = (e) => {
        setInputTaskText(e.target.value);
    };

    const handleInputListChange = (e) => {
        setInputListText(e.target.value);
    };

    const showLists = lists.map((list, index) => (
        <List
            title={list.title}
            id={list.id}
            key={index}
            tasks={tasks}
            taskAdded={() => addTaskHandler(list.id)}
            updateInput={handleInputTaskChange}
            removeTask={removeTaskHandler}
            removeList={() => removeListHandler(list.id)}/>
    ));

    return (
        <div className="Board">
            {showLists}
            <AddList
                listAdded={AddListHandler}
                updateListInput={handleInputListChange} />
        </div>
    );
};

export default Board;