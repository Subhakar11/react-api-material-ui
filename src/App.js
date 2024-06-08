import React, { useState } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <CssBaseline />
      <Container className="page-content">
        <div className="page-header">
          <Typography variant="h4" gutterBottom>
            User Directory
          </Typography>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ItemList searchQuery={searchQuery} />
      </Container>
    </>
  );
};

export default App;
