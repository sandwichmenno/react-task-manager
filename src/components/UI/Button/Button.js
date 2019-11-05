import React from 'react';
import styled from 'styled-components';

const handleButtonType = type => {
    switch (type) {
        case "danger":
            return "#eb5a46";
        case "success":
            return "#61bd4f";
        default:
            return "#fff";
    }
};

const Button = styled.button`
        width: 25%;
        margin-right: 15px;
        border: 0;
        outline: 0;
        padding: 7px 0;
        cursor:pointer;
        color:#fff;
        background: ${({ type }) => handleButtonType(type)};
        
        :hover {
            opacity: .8;
        }
    `;

export default Button;