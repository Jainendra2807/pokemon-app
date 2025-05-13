import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsDetail from './Component/CardsDetail';
import Cards from './Component/Cards';
import Pokedex from './Component/Pokedex';

const App = () => {
  const [catchList, setCatchList] = useState(() => {
    const savedCatchList = localStorage.getItem('catchList');
    return savedCatchList ? JSON.parse(savedCatchList) : {};
  });

  const [selectedPokemon, setSelectedPokemon] = useState();

  const addCard = (pokemon) => {
    const newCatchList = { ...catchList, [pokemon.id]: pokemon };
    setCatchList(newCatchList);
    localStorage.setItem('catchList', JSON.stringify(newCatchList));
    alert('Card Added Successfully');
  };

  const handleDelete = (id) => {
    const newCatchList = { ...catchList };
    delete newCatchList[id];
    setCatchList(newCatchList);
    localStorage.setItem('catchList', JSON.stringify(newCatchList));
  };

  useEffect(() => {
    localStorage.setItem('catchList', JSON.stringify(catchList));
  }, [catchList]);
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Pokedex setSelectedPokemon={setSelectedPokemon} />} />
        <Route path='/details' element={<CardsDetail selectedPokemon={selectedPokemon} addCard={addCard} />} />
        <Route path='/addcards' element={<Cards catchList={catchList} handleDelete={handleDelete} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App