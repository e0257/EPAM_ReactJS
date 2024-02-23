import React, { useState } from 'react';

import './search.scss';

interface SearchProps {
  initialQuery: string;
  onSearch: (query: string) => void;
}

function Search({ initialQuery, onSearch }: SearchProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleKeyDown = ({ key }: React.KeyboardEvent) => {
    if (key === 'Enter') {
      onSearch(query);
    }
  };

  const onChangeQuery = ({target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  }

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={query}
        placeholder='What do you want to watch?'
        onChange={onChangeQuery}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-btn"
        onClick={() => onSearch(query)}
      >Search</button>
    </div>
  );
}

export default Search;
