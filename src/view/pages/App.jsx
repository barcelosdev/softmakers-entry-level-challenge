import React, { useEffect, useState } from 'react';
import MainMenu from '../organisms/MainMenu';
import PetRegister from '../organisms/PetRegister';
import ViewAllPets from '../organisms/ViewAllPets';

const App = () => {
    const [registerModule, setRegiterModule] = useState(false);
    const [viewAllModule, setViewAllModule] = useState(true);

    function handleRegisterModule() {
        setViewAllModule(false);
        setRegiterModule(true);
    }

    function handleViewAllModule() {
        setRegiterModule(false);
        setViewAllModule(true);
    }

    return (
        <div className='app'>
            <MainMenu
                register={handleRegisterModule}
                viewAll={handleViewAllModule}

                registerState={registerModule}
                viewAllState={viewAllModule}
            />

            <div className='content'>
                {viewAllModule &&
                    <ViewAllPets />
                }
                {registerModule &&
                    <PetRegister />
                }
            </div>
        </div>
    )
}

export default App;