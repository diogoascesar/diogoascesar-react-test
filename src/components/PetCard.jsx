import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deletePet } from "../services/main/pets";


export default function PetCard({props}) {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.breed}</Card.Subtitle>
                    <Card.Text>
                        {props.dateOfBirth}
                    </Card.Text>
                    <Button variant="primary" style={{marginRight: '20px'}}>Edit</Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
}

