import React, { Component } from 'react';
import './style.css';

class PersonCard extends Component {
    render() {
        const { lastName, firstName, age, hairColor } = this.props;
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
}

export default PersonCard;