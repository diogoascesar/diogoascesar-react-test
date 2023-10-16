import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShowPetForm from "./ShowPetForm";

export default function ShowPet() {

    const {petId} = useParams();



    return (
        <>
            <ShowPetForm petId={petId}/>
        </>
    )

}
