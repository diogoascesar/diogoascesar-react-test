import { useParams } from "react-router-dom";
import { getPetById, createOrUpdatePet } from "../../services/main/pets";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function EditPet(){
    const { petId } = useParams();
    const [pet, setPet] = useState({ name: '', dateOfBirth: '', breed: '' });

    useEffect(() => {
        async function fetchPets() {
            try {
                const petData = await getPetById(petId);
                setPet(petData);
            } catch (error) {
                console.error('ERROR:', error);
            }
        }

        fetchPets();
    }, [petId]);

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        const formattedDate = formatDate(selectedDate);
        setPet({ ...pet, dateOfBirth: formattedDate });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = () => {
        createOrUpdatePet(pet);
    };

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setPet({ ...pet, name: newName });
    };

    const handleBreedChange = (event) => {
        const newBreed = event.target.value;
        setPet({ ...pet, breed: newBreed });
    };

    return (
        <>
            <Container>
                <form className="pet-form-container">
                    <div className="input-group-box">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Pet's Name"
                            value={pet.name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="input-group-box">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            value={pet.dateOfBirth}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="input-group-box">
                        <label>Pet's Breed</label>
                        <input
                            type="text"
                            placeholder="Pet's Breed"
                            value={pet.breed}
                            onChange={handleBreedChange}
                        />
                    </div>
                    <Button variant="primary" style={{ width: '200px' }} onClick={handleSubmit}>Submit</Button>
                </form>
            </Container>
        </>
    )
}
