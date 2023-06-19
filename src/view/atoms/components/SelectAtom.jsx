import React from "react";

const SelectAtom = (props) => {
    return (
        <select className='select' onChange={props.action}>
            <option value={props.value || null}>{props.placeholder}</option>
            {props.children}
        </select>
    )
}

export default SelectAtom;