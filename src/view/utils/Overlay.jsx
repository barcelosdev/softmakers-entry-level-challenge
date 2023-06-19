import React, { useEffect, useRef } from 'react';

const Overlay = ({ children, onClose }) => {

    // const overlayRef = useRef();

    // const handleClickOutside = (event) => {
    //     if (overlayRef.current && !overlayRef.current.contains(event.target)) {
    //         onClose();
    //     }
    // };

    // useEffect(() => {
    //     document.body.addEventListener('click', handleClickOutside);
    // }, [])

    return (
        <div className='overlay'>
            {/* <div ref={overlayRef}> */}
            {children}
            {/* </div> */}
        </div>
    )
}

export default Overlay;