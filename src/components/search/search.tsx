import React, { useState } from 'react';

import './search.scss';

interface SearchProps {
  initialQuery: string;
  onSearch: (query: string) => void;
}

export default function Search({ initialQuery, onSearch }: SearchProps) {
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
      <h3 className="search-title">Find your movie</h3>
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
