import { createContext } from 'react'

export const AnimalTypeContext = createContext({
    dog: 'Cachorro',
    cat: 'Gato',
    parrot: 'Papagaio',
    cockatiel: 'Calopsita',
    parakeet: 'Periquito',
    canary: 'Canario',
    hamster: 'Hamster',
    guineaPig: 'Porquinho-da-índia'
})