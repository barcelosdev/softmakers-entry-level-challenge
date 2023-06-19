import React from "react";

const InputAtom = (props) => {
    return (
        <input
            className={'input-atom text-md'}
            type={props.type}
            maxLength={props.maxLength}
            max={props.max}
            min={props.min}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.action}
            defaultValue={props.value}
        />
    )
}

export default InputAtom;