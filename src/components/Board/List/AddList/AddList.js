import React  from 'react';
import { useStateValue } from '../../../State';

import './AddList.css';

import Button from '../../../UI/Button/Button';
import Textarea from '../../../UI/Textarea/Textarea';

const AddList = props => {
    const [{ lists }, dispatch] = useStateValue();

    return (
        <div className="AddList">
            <Textarea value={lists.listInput} onChange={(e) => dispatch({
                type: 'CHANGE_LIST',
                inputValue: e.target.value
            })}/>
            <Button type="success" onClick={() => dispatch({
                type: 'ADD_LIST',
                newList: {
                    title: lists.listInput,
                    taskInput: '',
                    id: lists.lastID + 1,
                },
                newID: lists.lastID + 1
            })}>Add list</Button>
        </div>
    );
};

export default AddList;