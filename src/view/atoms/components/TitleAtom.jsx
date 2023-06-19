import React from 'react';

const TitleAtom = (props) => {
    return (
        <h1
            className={`${props.mode === 'lg' ? 'title-lg' : 'title-md'}`}
            style={{ textTransform: `${props.upper ? 'uppercase' : ''}` }}
        >
            {props.children || props.title}
        </h1>
    )
}

export default TitleAtom;