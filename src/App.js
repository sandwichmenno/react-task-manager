import React, { useState } from 'react';
import './App.css';

import Board from './components/Board/Board';

import {StateProvider} from "./components/State";

function App() {
    const initialState = {
        tasks: {
            taskObjects: [],
            lastID: 0
        },
        lists: {
            listObjects:[
                {
                    title: 'Todo',
                    taskInput: '',
                    id: 0
                },
                {
                    title: 'Done',
                    taskInput: '',
                    id: 1
                }],
            lastID: 2,
            listInput: ''
        },
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_INPUT':
                let listIndex = state.lists.listObjects.findIndex(obj => obj.id === action.listID);

                const newList = [...state.lists.listObjects];
                newList[listIndex].taskInput = action.inputValue;

                return {
                    ...state,
                    lists: {
                        listObjects: newList,
                        lastID: state.lists.lastID,
                        listInput: state.lists.listInput
                    }
                };

            case 'ADD_TASK':
                return {
                    ...state,
                    tasks: {
                        taskObjects: [...state.tasks.taskObjects, action.newTask],
                        lastID: action.newID
                    }
                };

            case 'REMOVE_TASK':
                const removedTaskArray = [...state.tasks.taskObjects];

                removedTaskArray.map((task, index) => {
                    if(task.id === action.taskID) {
                        removedTaskArray.splice(index, 1);
                    }
                });

                return {
                    ...state,
                    tasks: {
                        taskObjects:removedTaskArray,
                        lastID:state.tasks.lastID
                    }
                };

            case 'CHANGE_LIST':
                return {
                    ...state,
                    lists: {
                        listObjects: state.lists.listObjects,
                        lastID: state.lists.lastID,
                        listInput: action.inputValue
                    }
                };

            case 'ADD_LIST':
                console.log({
                    ...state,
                    lists: {
                        listObjects: [...state.lists.listObjects, action.newList],
                        lastID: action.newID,
                        listInput: ''
                    }
                });

                return {
                    ...state,
                    lists: {
                        listObjects: [...state.lists.listObjects, action.newList],
                        lastID: action.newID,
                        listInput: ''
                    }
                };

            case 'REMOVE_LIST':
                let removedListArray = [...state.lists.listObjects];

                removedListArray.map((list, index) => {
                    if(list.id === action.listID) {
                        removedListArray.splice(index, 1);
                    }
                });

                return {
                    ...state,
                    lists: {
                        listObjects:removedListArray,
                        lastID:state.lists.lastID,
                        listInput:state.lists.listInput
                    }
                };

            default:
                return state;
        }
    };

  return (
    <div className="App">
        <StateProvider initialState={initialState} reducer={reducer}>
            <Board />
        </StateProvider>
    </div>
  );
}

export default App;
