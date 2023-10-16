import React, {useState, useEffect} from "react";
import { getAllPets } from "../services/main/pets";
import PetCard from "./PetCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        setSearchResults(search)
    }

    console.log(pets)
    return (
        <>
        <Container>
            <Row className="mb-6">
            {pets.map((pet, index) => (
                <Col key={pet.id} xs="4" className="mt-4">
                    <PetCard key={index} props={pet}/>
                </Col>
            ))}
            </Row>
        </Container>
        </>
    )
}