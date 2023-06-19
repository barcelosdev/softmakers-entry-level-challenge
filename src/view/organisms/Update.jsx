import React, { useContext, useEffect, useState } from 'react';
import { ButtonAtom, InputAtom, SelectAtom, TitleAtom } from '../atoms';
import { AnimalTypeContext } from '../contexts/AnimalTypesContext';
import { CanaryContext, CatContext, CockatielContext, DogContext, GuineaPigContext, HamsterContext, ParakeetContext, ParrotContext } from '../contexts/BreedContext';
import { PopupMolecule } from '../molecules';
import Overlay from '../utils/Overlay';
import axios from 'axios';
import Toast from '../utils/Toast';

const Update = (props) => {

    const api = 'http://localhost:3000/api/pets/';

    const animals = useContext(AnimalTypeContext);
    const dogBreeds = useContext(DogContext);
    const catBreeds = useContext(CatContext);
    const parrotBreeds = useContext(ParrotContext);
    const cockatielBreeds = useContext(CockatielContext);
    const parakeetBreeds = useContext(ParakeetContext);
    const canaryBreeds = useContext(CanaryContext);
    const hamsterContext = useContext(HamsterContext);
    const guineaPig = useContext(GuineaPigContext);

    const animalTypes = [...Object.values(animals)];

    const [id, setId] = useState('');
    const [view, setView] = useState(props.view);
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [breed, setBreed] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [colors, setColors] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [popUp, setPopUp] = useState(false);
    const [pet, setPet] = useState({});
    const [toast, setToast] = useState(false);

    function handleAnimalBreeds() {
        switch (animalType) {
            case animals.dog:
                return [...Object.values(dogBreeds)];
            case animals.cat:
                return [...Object.values(catBreeds)];
            case animals.cat:
                return [...Object.values(parrotBreeds)];
            case animals.cockatiel:
                return [...Object.values(cockatielBreeds)];
            case animals.parrot:
                return [...Object.values(parakeetBreeds)];
            case animals.canary:
                return [...Object.values(canaryBreeds)];
            case animals.hamster:
                return [...Object.values(hamsterContext)];
            case animals.guineaPig:
                return [...Object.values(guineaPig)];
            default:
                return [];
        }
    }

    function resetForm() {
        setName("");
        setAnimalType("");
        setBreeds("");
        setColors("");
        setSex("");
        setHeight("");
        setWeight("");
        setAge("");
    }

    async function getRegister(id) {
        try {
            const { data } = await axios.get(api + id);
            setPet(data.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    async function updateRegister() {
        try {
            const data = {
                name: name,
                animalType: animalType,
                breed: breed,
                sex: sex,
                age: age,
                colors: colors,
                height: height,
                weight: weight,
            }

            await axios.put(api + pet.id, data)
        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteRegister() {
        try {
            await axios.delete(api + pet.id);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        setPet(getRegister(props.id))
        setBreeds(handleAnimalBreeds());
    }, [animalType, id, view, popUp]);

    return (
        <>
            {view &&
                <Overlay>
                    <div className='update'>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}
                        >
                            <TitleAtom mode='lg'>
                                Atualizar dados
                            </TitleAtom>
                            <button className='btn-min'>
                                <span
                                    onClick={() => {
                                        setView(false);
                                        props.onClose();
                                    }}
                                    className='material-icons'
                                >close
                                </span>
                            </button>
                        </div>
                        <div className='form'>
                            <div className='input'>
                                <TitleAtom title='Nome' />
                                <InputAtom
                                    required={true}
                                    maxLength={64}
                                    action={(e) => setName(e.target.value)}
                                    value={pet.name}
                                />
                            </div>
                            <div className='input-variant'>
                                <div className='input'>
                                    <TitleAtom title='Tipo do animal' />
                                    <SelectAtom
                                        action={(e) => setAnimalType(e.target.value)}
                                        placeholder={pet.animalType}
                                        value={pet.animalType}
                                    >
                                        {animalTypes.map((el) => {
                                            return <option key={el} value={el}>{el}</option>
                                        })}
                                    </SelectAtom>
                                </div>
                                <div className='input'>
                                    <TitleAtom title='Raça' />
                                    <SelectAtom
                                        action={(e) => setBreed(e.target.value)}
                                        placeholder={pet.breed}
                                        value={pet.breed}
                                    >
                                        {breeds.map((el) => {
                                            return <option key={el} value={el}>{el}</option>
                                        })}
                                    </SelectAtom>
                                </div>
                            </div>
                            <div className='input'>
                                <TitleAtom title='Cores predominates' />
                                <InputAtom
                                    required={true}
                                    maxLength={28}
                                    action={(e) => setColors(e.target.value)}
                                    value={pet.color}
                                />
                            </div>
                            <div className='input-variant'>
                                <div className='input'>
                                    <TitleAtom title='Idade' />
                                    <InputAtom
                                        maxLength={2}
                                        action={(e) => setAge(e.target.value)}
                                        value={pet.age}
                                    />
                                </div>
                                <div className='input'>
                                    <TitleAtom title='Sexo' />
                                    <SelectAtom
                                        action={(e) => setSex(e.target.value)}
                                        placeholder={pet.sex === 'F' ? 'Fêmea' : 'Macho'}
                                        value={pet.sex}
                                    >
                                        <option value={'M'}>Macho</option>
                                        <option value={'F'}>Fêmea</option>
                                    </SelectAtom>
                                </div>
                            </div>
                            <div className='input-variant'>
                                <div className='input'>
                                    <TitleAtom title='Altura (opcional)' />
                                    <InputAtom
                                        type='number'
                                        max={120}
                                        min={10}
                                        action={(e) => setHeight(e.target.value)}
                                        value={pet.height}
                                    />
                                </div>
                                <div className='input'>
                                    <TitleAtom title='Peso (opcional)' />
                                    <InputAtom
                                        type='number'
                                        max={50}
                                        min={0}
                                        maxLength={3}
                                        action={(e) => setWeight(e.target.value)}
                                        value={pet.weight}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <ButtonAtom
                                mode='warning'
                                title='Excluir cadastro'
                                action={() => setPopUp(true)}
                            />
                            <ButtonAtom
                                mode='primary'
                                title='Atualizar cadastro'
                                action={() => updateRegister()}
                            />
                        </div>
                        {popUp &&
                            <PopupMolecule
                                title='Tem certeza que deseja remover os dados do sistema?'
                                description={`Todos os dados de ${pet.name} serão apagados`}
                                cancel='Não, cancelar'
                                confirm='Sim, desejo apagar os dados'
                                view={popUp}
                                cancelAction={() => { }}
                                confirmAction={() => {
                                    deleteRegister().then(() => {
                                        setToast(true);
                                    })

                                    setPopUp(false);
                                    setView(false);
                                }}
                                onClose={() => setPopUp(false)}

                            />
                        }
                        {toast &&
                            <Toast message="Mensagem do Toast" onClose={() => setToast(false)} />
                        }
                    </div>
                </Overlay>
            }
        </>
    )
}

export default Update;