import React, { useContext, useEffect, useState } from 'react';
import { ButtonAtom, InputAtom, SelectAtom, TextAtom, TitleAtom } from '../atoms';
import { AnimalTypeContext } from '../contexts/AnimalTypesContext';
import { CanaryContext, CatContext, CockatielContext, DogContext, GuineaPigContext, HamsterContext, ParakeetContext, ParrotContext } from '../contexts/BreedContext';
import axios from 'axios';
import { PopupMolecule } from '../molecules';

const PetRegister = (props) => {

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

    const [form, setForm] = useState(0);
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


    function handleAnimalBreeds() {
        switch (animalType) {
            case 'Cachorro':
                return [...Object.values(dogBreeds)];
            case 'Gato':
                return [...Object.values(catBreeds)];
            case 'Papagaio':
                return [...Object.values(parrotBreeds)];
            case 'Calopsita':
                return [...Object.values(cockatielBreeds)];
            case 'Periquito':
                return [...Object.values(parakeetBreeds)];
            case 'Canário':
                return [...Object.values(canaryBreeds)];
            case 'Hamster':
                return [...Object.values(hamsterContext)];
            case 'Porquinho-da-índia':
                return [...Object.values(guineaPig)];
            default:
                return [];
        }
    }

    function resetForm(e) {
        e.preventDefault();

        setName("");
        setAnimalType("");
        setBreed("");
        setColors("");
        setSex("");
        setHeight("");
        setWeight("");
        setAge("");

        setForm((prevForm) => prevForm + 1)
    }

    async function postRegister() {
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

        await axios.post('http://localhost:3000/api/pets', data);
    }

    useEffect(() => {
        setBreeds(handleAnimalBreeds());
    }, [animalType, popUp]);

    return (
        <form key={form} className='register' onSubmit={resetForm}>
            <TitleAtom mode='lg'>
                Adicione um novo pet
            </TitleAtom>
            <div className='form'>
                <div className='input'>
                    <TitleAtom title='Nome' />
                    <InputAtom
                        placeholder='Digite o nome do pet'
                        required={true}
                        maxLength={64}
                        action={(e) => setName(e.target.value.trim())}
                    />
                </div>
                <div className='input-variant'>
                    <div className='input'>
                        <TitleAtom title='Tipo do animal' />
                        <SelectAtom
                            action={(e) => setAnimalType(e.target.value)}
                            placeholder='Selecione o tipo'
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
                            placeholder='Escolha a raça'
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
                        placeholder='Digite as cores que o pet possui'
                        required={true}
                        maxLength={28}
                        action={(e) => setColors(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <TitleAtom title='Sexo' />
                    <SelectAtom
                        action={(e) => setSex(e.target.value)}
                        placeholder='Selecione o sexo'
                    >
                        <option value={'M'}>Macho</option>
                        <option value={'F'}>Fêmea</option>
                    </SelectAtom>
                </div>
                <div className='input-variant'>
                    <div className='input'>
                        <TitleAtom title='Altura (opcional)' />
                        <InputAtom
                            type='number'
                            placeholder='Em centímetros'
                            max={120}
                            min={10}
                            action={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className='input'>
                        <TitleAtom title='Peso (opcional)' />
                        <InputAtom
                            type='number'
                            max={50}
                            min={0}
                            placeholder='Ex: 7 kg'
                            maxLength={3}
                            action={(e) => setWeight(e.target.value)}
                        />
                    </div>
                </div>
                <div className='input'>
                    <TitleAtom title='Idade' />
                    <InputAtom
                        placeholder='Digite a idade aproximada que o pet possui'
                        maxLength={2}
                        action={(e) => setAge(e.target.value)}
                    />
                </div>
            </div>
            <div className="actions">
                <ButtonAtom
                    mode='cancel'
                    title='Cancelar e limpar formulário'
                    action={() => setPopUp(true)}
                />
                <ButtonAtom
                    mode='primary'
                    title='Cadastrar pet'
                    action={() => {
                        postRegister();
                    }}
                />
            </div>
            {popUp &&
                <PopupMolecule
                    title='Tem certeza que deseja cancelar e limpar o formulário?'
                    description='Se fizer isso todos dados serão perdidos'
                    cancel='Não, voltar ao formulário'
                    confirm='Limpar formulário'
                    activate={popUp}
                    cancelAction={() => resetForm()}
                    confirmAction={() => setPopUp(false)}
                    onClose={() => setPopUp(false)}
                />
            }
        </form>
    )
}

export default PetRegister;