import React, { useEffect } from 'react';

const ModuleAtom = (props) => {

    function handleActive() {
        if (props.registerState || props.viewAllState) {
            return 'module-active';
        } else {
            return 'module';
        }
    }

    return (
        <button
            id={props.id}
            className={handleActive()}
            onClick={props.action}
        >
            <span className='material-icons'>{props.icon}</span>
            {props.title}
        </button>
    )
}

export default ModuleAtom;