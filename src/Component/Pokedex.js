import React, { useState, useEffect } from 'react';
import '../Style/Pokedex.css';
import { useNavigate } from 'react-router-dom';

function Pokedex({ setSelectedPokemon }) {
    const [cardData, setCardData] = useState([]);
    const [previous, setPrevious] = useState(null);
    const [next, setNext] = useState(null);
    const [nextIndex, setNextIndex] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon");
                const data = await response.json();
                console.log(data);
                setCardData(data?.results || []);
                setPrevious(data?.previous || null);
                setNext(data?.next || null);
                console.log(next, previous);
            } catch (error) {
                console.log(error);
            }
        };
        fetchInitialData();
    }, [next,previous]);

    const handlePrevious = async () => {
        if (!previous) return;
        setNextIndex(nextIndex - 20);
        try {
            const response = await fetch(previous);
            const data = await response.json();
            setCardData(data?.results || []);
            setNext(data?.next || null);
            setPrevious(data?.previous || null);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNext = async () => {
        if (!next) return;
        setNextIndex(nextIndex + 20);
        try {
            const response = await fetch(next);
            const data = await response.json();
            setCardData(data?.results || []);
            setNext(data?.next || null);
            setPrevious(data?.previous || null);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAbilitiesData = async (pokemonUrl) => {
        try {
            const response = await fetch(pokemonUrl);
            const data = await response.json();
            setSelectedPokemon(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCardClick = async (pokemon) => {
        await fetchAbilitiesData(pokemon.url);
        navigate('/details');
    };
    console.log(cardData);

    return (
        <div className="container">
            <div className="card_container">
                {cardData.map((pokemon, index) => (
                    <div className="card" key={pokemon.name} onClick={() => handleCardClick(pokemon)}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + nextIndex}.svg`} alt={pokemon.name} />
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    </div>
                ))}
            </div>
            <div className="button">
                <button className="btn1" onClick={handlePrevious}>Previous</button>
                <button className="btn2" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Pokedex;