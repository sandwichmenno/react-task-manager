import React  from 'react';
import './Textarea.css';

const Button = props => {
    return (
        <textarea className="TextArea" onChange={props.updateInput}></textarea>
    );
};

export default Button;