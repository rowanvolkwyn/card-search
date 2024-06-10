import { useState } from 'react';

const Search = () => {

    const [ search, setSearch ] = useState(false);
    const [ cardName, setCardName ] = useState('');
    const [ cardImage, setCardImage ] = useState('');

    //create an async function to fetch the data from the API
    const fetchRandom = async () => {
        const response = await fetch('https://api.scryfall.com/cards/random');
        const data = await response.json();
        console.log(data);
        setCardName(data.name)
        setCardImage(data.image_uris.png);
        setSearch(true);
    }   

    const fetchRandomCommander = async () => {
        const response = await fetch('https://api.scryfall.com/cards/random?q=is%3Acommander');
        const data = await response.json();
        console.log(data);
        setCardName(data.name)
        setCardImage(data.image_uris.png);
        setSearch(true);
    }

    return (
        <div id='search'>
            <h1>Search for any card</h1>
            <div id='fields'>
                <input type="text" placeholder="Search..." />
                <button onClick={fetchRandom}>Random</button>
                <button onClick={fetchRandomCommander}>Random Commander</button>
            </div>
            <div id='results'>
                <p>{cardName}</p>
                <img src={cardImage} alt="" />
            </div>
        </div>
    )
}

export default Search;