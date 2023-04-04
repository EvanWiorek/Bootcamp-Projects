import React, { Component } from 'react';
import './style.css';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increaseAge: this.props.age
        };
    }
    
    render() {
        let { lastName, firstName, hairColor } = this.props;
        return (
            <div className='card mt-5'>
                <div className='content'>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.increaseAge}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
                <button className='btn btn-primary mt-3' onClick={ () => this.setState( { increaseAge: this.state.increaseAge + 1 } ) }>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;