import React, { useEffect, useState } from 'react';
import PetCardMolecule from '../molecules/components/PetCardMolecule';
import { ButtonAtom, InputAtom, TextAtom } from '../atoms';
import axios from 'axios';

const ViewAllPets = (props) => {

    const api = 'http://localhost:3000/api/pets';

    const [url, setUrl] = useState(api)
    const [pets, setPets] = useState([])
    const [pagination, setPagination] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    async function fetchData() {
        const { data } = await axios.get(url, {
            params: {
                page: pageNumber
            }
        });
        setPagination(data.pagination);
        setPets(data.data);
    }

    async function createQuery(e) {
        const value = e.target.value.replace('/\s/g', '');

        if (/^[a-zA-Z]+$/.test(value)) {
            setUrl(`${api}?name=${value}`)
        } else if (/^[0-9]+$/.test(value)) {
            setUrl(`${api}?code=${value}`)
        } else {
            setUrl(api);
        }
    }

    async function query() {
        const { data } = await axios.get(query);
        setPagination(data.pagination);
        setPets(data.data);
    }

    function handleNextPage() {
        if (pageNumber < pagination.total_pages) {
            setPageNumber(pageNumber + 1);
        } else {
            setPageNumber(pagination.current_page);
        }
    }

    function handlePreviousPage() {
        if (pageNumber != 0) {
            setPageNumber(pageNumber - 1);
        } else {
            setPageNumber(pagination.current_page);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url, pageNumber])

    return (
        <div className='view-all'>
            <div className='search-bar'>
                <InputAtom
                    mode='lg'
                    placeholder='Pesquise por nome ou código'
                    maxLength={255}
                    action={createQuery}
                />
                <ButtonAtom mode='icon' onClick={() => query()}>
                    <span className='material-icons'>search</span>
                </ButtonAtom>
            </div>
            {pets &&
                <div className='body'>
                    <div className='filters'>
                        <div className='pagination'>
                            <TextAtom text={`Página ${pagination.current_page} de ${pagination.total_pages}`} />
                            <button
                                className='icon'
                                onClick={handlePreviousPage}
                            >
                                <span className='material-icons'>chevron_left</span>
                            </button>
                            <button
                                className='icon'
                                onClick={handleNextPage}
                            >
                                <span className='material-icons'>navigate_next</span>
                            </button>
                        </div>
                        {/* <button className='btn-min' onClick={() => { }}>
                            <span className='material-icons'>tune</span>
                        </button> */}
                    </div>
                    {Array.isArray(pets) && pets.map((el) => {
                        return (
                            <PetCardMolecule
                                key={el.id}
                                id={el.id}
                                code={el.code}
                                name={el.name}
                                tag={el.animalType}
                                animalType={el.animalType}
                                breed={el.breed}
                                color={el.colors}
                                sex={el.sex === 'F' ? 'Fêmea' : 'Macho'}
                                age={el.age}
                                height={`${Number(el.height.toFixed(2))} cm`}
                                weight={`${Number(el.weight.toFixed(2))} kg`}
                            />
                        )
                    })}
                    <div className='filters'>
                        <div className='pagination'>
                            <TextAtom text={`Página ${pagination.current_page} de ${pagination.total_pages}`} />
                            <button
                                className='icon'
                                onClick={handlePreviousPage}
                            >
                                <span className='material-icons'>chevron_left</span>
                            </button>
                            <button
                                className='icon'
                                onClick={handleNextPage}
                            >
                                <span className='material-icons'>navigate_next</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ViewAllPets;