import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { createOrUpdatePet } from "../services/main/pets";

export default function NewPetForm() {

    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [dateValue, setDateValue] = useState('');

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        const formattedDate = formatDate(selectedDate);
        setDateValue(formattedDate);
      };
    
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
      };

    const handleSubmit = () => {
        const newPet = {
          name: petName,
          dateOfBirth: dateValue,
          breed: petBreed,
        };
        createOrUpdatePet(newPet);
      };

      const handleNameChange = (event) => {
        const newName = event.target.value;
        setPetName(newName);
      };

      const handleBreedChange = (event) => {
        const newBreed = event.target.value;
        setPetBreed(newBreed);
      };


    return (
        <>
            <Container>
                <form>
                        <div>
                            <label>Name</label>
                            <input 
                            type="text" 
                            placeholder="Pet's Name"
                            value={handleNameChange}/>
                        </div>
                        <div>
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            value={dateValue}
                            onChange={handleDateChange}
                        />
                        </div>
                        <div>
                            <label>Pet's Breed</label>
                            <input 
                            type="text"
                            placeholder="Pet's Breed"
                            value={handleBreedChange}/>
                        </div>
                        <Button variant="primary" style={{width: '200px'}} onSubmit={handleSubmit}>Submit</Button>
                </form>
            </Container>
        </>
    )

}
