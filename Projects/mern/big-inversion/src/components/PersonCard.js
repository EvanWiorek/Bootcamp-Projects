import React from 'react';
import './style.css';

const PersonCard = props => {
    const { lastName, firstName, age, hairColor } = props;
    return (
        <div className='card'>
            <div className='content'>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        </div>
    ) 
}

export default PersonCard;