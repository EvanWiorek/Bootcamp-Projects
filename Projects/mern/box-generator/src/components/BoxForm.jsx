import { useState } from 'react';
import './style.css'


const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const { colorBoxArr, setColorBoxArr } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        setColorBoxArr( 
            [...colorBoxArr, color[0].toUpperCase() + color.substring(1)]
         );
         setColor("");
    };

    return (
        <form onSubmit={ handleSubmit } className='d-flex align-items-center gap-3 m-auto mt-5 text-light form-body my-shadow'>
            <h3>Color</h3>
            <input onChange={(e) => setColor(e.target.value)} className='form-control my-shadow' value={ color }/>
            <input type="submit" value="Add" className='btn btn-primary my-shadow'/>
        </form>
    );
};

export default BoxForm;
