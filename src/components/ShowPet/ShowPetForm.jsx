import React, { useState, useEffect } from 'react';
import { getPetById } from '../../services/main/pets';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function ShowPetForm({ petId }) {
    const [pet, setPet] = useState({});

    useEffect(() => {
        async function fetchPets() {
            try {
                const pet = await getPetById(petId);
                setPet(pet);
            } catch (error) {
                console.error('ERROR:', error);
            }
        }

        fetchPets();
    }, []);


    console.log("ocdjasoidasodnj", pet)
    return (
        <>
            <Col key={pet.id} xs="4" className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{pet.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{pet.breed}</Card.Subtitle>
                        <Card.Text>
                            {pet.dateOfBirth}
                        </Card.Text>
                        <Button variant="primary" style={{ marginRight: '20px' }} as={Link} to={`/${pet.id}`}>Show more</Button>
                        <Button variant="danger" onClick={() => handleDelete(pet.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
}

export default ShowPetForm;

