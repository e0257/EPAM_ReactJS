import Counter from '../counter/counter';
import Search from '../search/search';
import GenreFilter from '../genre-filter/genre-filter';
import { useState } from 'react';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  }

  const handleSelect = (genre: string) => {
    setSelectedGenre(genre);
    console.log('Selected genre:', genre);
  }

  return (
    <>
      <Counter initialValue={10}/>
      <Search initialQuery='initial search' onSearch={handleSearch}/>
      <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={handleSelect} />
    </>
  );
}
