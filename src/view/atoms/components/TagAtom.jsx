import React, { useContext } from "react";
import { TagContext } from "../../contexts/TagContext";
import { AnimalTypeContext } from "../../contexts/AnimalTypesContext";

const TagAtom = (props) => {

    const color = useContext(TagContext);
    const animal = useContext(AnimalTypeContext);

    function handleTagColor() {
        switch (props.animalType) {
            case animal.dog:
                return color.CACHORRO;
            case animal.cat:
                return color.GATO;
            case animal.parrot:
                return color.PAPAGAIO
            case animal.cockatiel:
                return color.CALOPSITA
            case animal.parakeet:
                return color.PERIQUITO
            case animal.canary:
                return color.CANARIO
            case animal.hamster:
                return color.HAMSTER
            case animal.guineaPig:
                return color.PORQUINHO_DA_INDIA
            default:
                return color.DEFAULT
        }
    }

    return (
        <div
            className='tag'
            style={{ backgroundColor: `${handleTagColor()}` }}
        >
            <p>
                {props.tag}
            </p>
        </div>
    )
}

export default TagAtom;