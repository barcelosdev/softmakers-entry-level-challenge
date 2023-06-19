import React, { useEffect, useRef, useState } from 'react';
import { TagAtom, TextAtom, TitleAtom } from '../../atoms';
import Update from '../../organisms/Update';
import Overlay from '../../utils/Overlay';

const PetCardMolecule = (props) => {

    const [updateState, setUpdateState] = useState(false);

    function viewUpdatePopup() {
        setUpdateState(true);
    }

    function closeUpdatePopup() {
        setUpdateState(false);
    }

    useEffect(() => {
    }, [updateState])

    return (
        <>
            <div className='pet-card'>
                <div className='content'>
                    <div className='header'>
                        <TitleAtom title={props.code} />
                        <TitleAtom title='⸱' />
                        <TitleAtom upper={true}>
                            {props.name}
                        </TitleAtom>
                    </div>
                    <TagAtom tag={props.tag} animalType={props.animalType} />
                </div>
                <div className='content'>
                    <div className='atributes'>
                        <div className='data'>
                            <TextAtom text='Raça:' />
                            <TitleAtom title={props.breed} />
                        </div>
                        <div className='data'>
                            <TextAtom text='Cor:' />
                            <TitleAtom title={props.color} />
                        </div>
                        <div className='data'>
                            <TextAtom text='Sexo:' />
                            <TitleAtom title={props.sex} />
                        </div>
                        <div className='data'>
                            <TextAtom text='Idade:' />
                            <TitleAtom title={props.age} />
                        </div>
                        {props.height &&
                            <div className='data'>
                                <TextAtom text='Altura:' />
                                <TitleAtom title={props.height} />
                            </div>
                        }
                        {props.weight &&
                            <div className='data'>
                                <TextAtom text='Peso:' />
                                <TitleAtom title={props.weight} />
                            </div>
                        }
                    </div>

                    <button
                        className='edit-btn'
                        onClick={viewUpdatePopup}
                    >
                        <span className='material-icons'>edit</span>
                    </button>

                </div>
            </div>
            {updateState && <Update id={props.id} view={updateState} onClose={closeUpdatePopup} />}
        </>
    )
}

export default PetCardMolecule;