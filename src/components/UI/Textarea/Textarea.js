import React  from 'react';
import './Textarea.css';

const Textarea = props => (
    <textarea className="TextArea" value={props.value} onChange={props.onChange}></textarea>
);

export default Textarea;