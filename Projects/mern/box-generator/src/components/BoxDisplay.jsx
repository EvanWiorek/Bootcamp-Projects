import Box from './Box';

function BoxDisplay({colorBoxArr}) {//this is the keyname of the prop
    return (
        <div className='d-flex justify-content-evenly gap-1 flex-wrap'>
            {colorBoxArr.map((color, idx) => {//second param is index the array, more than one param parenthsis
                return <Box key={idx} color={color} />
            })}
        </div>
    )
}

export default BoxDisplay;