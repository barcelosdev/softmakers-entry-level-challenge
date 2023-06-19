import React from 'react';

const TextAtom = (props) => {
    return (
        <p className='text-md'>
            {props.children || props.text}
        </p>
    )
}

export default TextAtom;