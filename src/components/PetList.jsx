import React, { useState, useEffect } from "react";
import { getAllPets } from "../services/main/pets";
import Container from 'react-bootstrap/Container';
import SearchBar from "./SearchBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deletePet } from "../services/main/pets";
import { Link } from "react-router-dom";



export default function PetList() {

    const [pets, setPets] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            const petsData = await getAllPets();
            setPets(petsData);
        };

        fetchPets();
    }, []);

    const handleChange = (search) => {
        if (typeof search === 'string') {
          const filteredResults = pets.filter((pet) =>
            pet.name && pet.name.toLowerCase().startsWith(search.toLowerCase())
          );
          setSearchResults(filteredResults);
        } else {
          setSearchResults([]);
        }
      }

    const removePets = (petId) => {
        const updatePets = pets.filter(item => item.id !== petId);
        setPets(updatePets);
    }

    const handleDelete = (petId) => {
        removePets(petId)
        deletePet(petId);
    };


    return (
        <>
        
        <SearchBar  pets={pets} onChange={handleChange}/>
            <Container>
                <Row className="mb-6">
                    {pets.map((pet) => (
                        <Col key={pet.id} xs="4" className="mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{pet.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{pet.breed}</Card.Subtitle>
                                    <Card.Text>
                                        {pet.dateOfBirth}
                                    </Card.Text>
                                    <Button variant="primary" style={{ marginRight: '20px' }}  as={Link} to={`/pet/${pet.id}`}>Show more</Button>
                                    <Button variant="danger" onClick={() => handleDelete(pet.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}