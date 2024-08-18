import React, { useState } from 'react';
import Header from './Header';
import AnimeCatalog from './AnimeCatalog';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <AnimeCatalog searchTerm={searchTerm} />
    </>
  );
};

export default App;
