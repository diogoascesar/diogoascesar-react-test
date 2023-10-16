import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './styles.css';

export default function SearchBar({ pets, onChange }) {
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [showToast, setShowToast] = useState(false); 

  useEffect(() => {
    onChange(searchResults);
  }, [searchResults]);

  const handleSearch = (e) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      const filteredResults = pets.filter((pet) =>
        pet.name && pet.name.toLowerCase().startsWith(searchTerm)
      );
      if (filteredResults.length === 0) {
        setShowToast(true);
      }
      setSearchResults(filteredResults);
    }
  };

  return (
    <Container>
      <Form className="d-flex mt-5">
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2 custom-search-input"
          aria-label="Search"
        />
        <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
      </Form>


      {searchResults.length > 0 && (
        <div>
          {searchResults.map((result) => (
            <h2 key={result.id}>{result.name}</h2>
          ))}
        </div>
      )}


    </Container>
  );
}
