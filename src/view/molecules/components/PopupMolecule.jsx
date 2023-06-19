import React, { useEffect, useRef, useState } from 'react';
import { ButtonAtom, TextAtom, TitleAtom } from '../../atoms';
import Overlay from '../../utils/Overlay';

const PopupMolecule = (props) => {

    const popupRef = useRef();
    const [activate, setActivate] = useState(props.activate);

    function handleClickOutside(event) {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setActivate(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside)

        return (() => {
            document.body.removeEventListener('click', handleClickOutside)
        })
    }, [activate])


    return (
        <>
            {activate &&
                <Overlay>
                    <div className='pop-up'>
                        <TitleAtom>
                            {props.title}
                        </TitleAtom>
                        {props.description &&
                            <TextAtom>
                                {props.description}
                            </TextAtom>
                        }
                        <div className='data'>
                            <ButtonAtom mode='cancel' title={props.cancel} action={props.onClose} />
                            <ButtonAtom mode='primary' title={props.confirm} action={props.confirmAction} />
                        </div>
                    </div>
                </Overlay>
            }
        </>
    )
}

export default PopupMolecule;