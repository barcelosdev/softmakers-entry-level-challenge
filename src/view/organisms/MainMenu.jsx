import React, { useState } from 'react';
import { ModuleAtom } from '../atoms';

const MainMenu = (props) => {
    return (
        <div className='main-menu'>
            <div className='profile'></div>
            <div className='modules'>
                <ModuleAtom
                    id='register'
                    title={'Cadastrar novo pet'}
                    icon={<span className='material-icons'>add</span>}
                    action={props.register}
                    registerState={props.registerState}
                />
                <ModuleAtom
                    id='view-all'
                    title={'Ver todos os pets'}
                    icon={<span className='material-icons'>sort</span>}
                    action={props.viewAll}
                    viewAllState={props.viewAllState}
                />
            </div>
            <div className='logout'></div>
        </div>
    )
}

export default MainMenu;