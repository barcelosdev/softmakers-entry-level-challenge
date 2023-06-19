import React from 'react';

const ButtonAtom = (props) => {

    function handleButtonType() {
        switch (props.mode) {
            case 'primary':
                return 'btn-primary';
            case 'cancel':
                return 'btn-cancel';
            case 'warning':
                return 'btn-warning';
            case 'icon':
                return 'btn-icon';
            default:
                return 'btn-primary';
        }
    }

    return (
        <button
            type='button'
            className={`${handleButtonType()}`}
            onClick={props.action}
        >
            {props.children || props.title}
        </button>
    )
}

export default ButtonAtom;