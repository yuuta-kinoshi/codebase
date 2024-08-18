import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className='p-3 shadow-md'>
      <div className="wrapper flex items-center gap-16">
        <h1 className='font-bold text-2xl'>
          <span className="text-violet-400">M</span>y
          <span className="text-violet-400">A</span>nime
          <span className="text-violet-400">I</span>nfo
        </h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            className='pl-2 border-b outline-none'
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search anime...'
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
