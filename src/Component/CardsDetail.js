import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/CardsDetail.css'
function CardsDetail({ selectedPokemon, addCard }) {
  const [select, setSelect] = useState({});

  useEffect(() => {
    if (selectedPokemon) {
      localStorage.setItem("selectedPokemon", JSON.stringify(selectedPokemon))
      setSelect(selectedPokemon)
    }
    else {
      const savedPokemon = localStorage.getItem("selectedPokemon")
      if (savedPokemon) {
        setSelect(JSON.parse(savedPokemon))
      }
    }

  }, [selectedPokemon])

  const handleAdd = () => {
    if (select.id) {
      addCard(select);
    }
  };

  return (
    <div className='CardsDetail_container'>
       <h1 key={select?.base_experience}>{select?.name}</h1>
      <div className='sub_container'>
        <div className='items_container'>
          <img src={select?.sprites?.other?.dream_world?.front_default} alt={select?.name}></img>
          <img src={select?.sprites?.other?.home?.front_shiny} alt={select?.name}></img>
        </div>
        <div className='pokemon_gif'>
          <img src={select?.sprites?.other?.showdown?.front_default} alt={select?.name} />
          <div className='pokemon_button'>
            <div><Link to="/">Back</Link></div>
            <div><button className="btn" onClick={handleAdd}>Add</button></div>
          </div>
        </div>
        <div className='pokemon_paragraph'>
          <div className='p1'>
            <p><b>Base Experience:</b>{select?.base_experience}</p>
            <p><b>Moves:</b>{select?.moves?.[0]?.move?.name}</p>
            <p><b>Moves1:</b>{select?.moves?.[1]?.move?.name}</p>
            <p><b>Moves2:</b>{select?.moves?.[1]?.version_group_details?.[1]?.version_group?.name}</p>
            <p><b>Moves3:</b>{select?.moves?.[2]?.move?.name}</p>
            <p><b>Moves4:</b>{select?.moves?.[3]?.move?.name}</p>
            <p><b>Height:</b>{select?.height}</p>
            <p><b>Weight:</b>{select?.weight}</p>
          </div>
          <div className='p2'>
            <p><b>Ability:</b>{select?.abilities?.[0]?.ability?.name}</p>
            <p><b>Ability:</b>{select?.abilities?.[1]?.ability?.name}</p>
            <p><b>Version:</b>{select?.game_indices?.[0]?.version?.name}</p>
            <p><b>Types:</b>{select?.types?.[0]?.type?.name}</p>
            <p><b>Types:</b>{select?.types?.[1]?.type?.name}</p>
            <p><b>Stats1:</b>{select?.stats?.[0]?.stat?.name}</p>
            <p><b>Stats2:</b>{select?.stats?.[1]?.stat?.name}</p>
            <p><b>Stats3:</b>{select?.stats?.[2]?.stat?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsDetail;