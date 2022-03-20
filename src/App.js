import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import './App.css';
import SearchBox from './components/SearchBox';

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(setMonsters);
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className='App'>
      <h1 className='App-title'>Mosters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
