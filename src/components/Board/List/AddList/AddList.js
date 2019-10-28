import React  from 'react';

import './AddList.css';

import Button from '../../../UI/Button/Button';
import Textarea from '../../../UI/Textarea/Textarea';

const AddList = props => {
    return (
        <div className="AddList">
            <Textarea updateInput={props.updateListInput} inputValue={props.inputValue}/>
            <Button type="success" text="Add list" buttonClicked={props.listAdded}/>
        </div>
    );
};

export default AddList;