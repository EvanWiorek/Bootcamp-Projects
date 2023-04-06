import './style.css'

const Box = (props) => {
    return (
        <>
            <div className='color-box mt-4 my-shadow' style={{backgroundColor: props.color }}>{props.color}</div>
        </>
    )
}


export default Box;