import React, { useEffect, useState } from 'react';
import '../Style/Cards.css';

function Cards({ catchList, handleDelete }) {
  const [catchItem, setCatchItem] = useState([]);

  useEffect(() => {
    const pokemonArray = Object.values(catchList);
    setCatchItem(pokemonArray);
  }, [catchList]);

  return (
    <div className='Cards_Container'>
      <div className='Cards_Subcontainer'>
        {catchItem.length === 0 ? (
          <p className='No_paragraph'>No Pokemon Added yet</p>
        ) : (
          catchItem.map((pokemon) => (
            <div key={pokemon.id} className='Cards_Info'>
            <div className='Cards_img'>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} style={{width:"150px",height:"100px",marginTop:"20px",paddingLeft:"10px",alignItems:"center"}}/>
            </div>
              <div className='pokemon_info'>
                <p><b>Pokemon Name:</b> {pokemon.name}</p>
                <p><b>Base Experience:</b> {pokemon.base_experience}</p>
                <p><b>Ability:</b> {pokemon.abilities[0].ability.name}</p>
                <p><b>Version:</b> {pokemon.game_indices[0].version.name}</p>
                <p><b>Moves:</b> {pokemon.moves[0].move.name}</p>
                <p><b>Types:</b> {pokemon.types[0].type.name}</p>
                <p><b>Height:</b> {pokemon.height}</p>
                <p><b>Weight:</b> {pokemon.weight}</p>
              </div>
              <button className="Card_button" onClick={() => handleDelete(pokemon.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Cards;