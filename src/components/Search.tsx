import React, { useState } from 'react';

type SearchProps = {
  onSearch: (searchValue: string) => void;
};

function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    onSearch(searchValue);
    resetInputField();
  };

  return (
    <form className='search'>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type='text'
      />
      <input onClick={callSearchFunction} type='submit' value='SEARCH' />
    </form>
  );
}

export default Search;
