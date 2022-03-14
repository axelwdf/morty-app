import './searchBox.css';
import React, { useState } from "react";
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const SearchBox = ({setRicks}) => {
    const [searchingName, setSearchingName] = useState("");
    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchingName}`)
            .then(res => setRicks(res.data));
    }

    return(
        <div className="SearchBox">
            
            <input
                className="input"
                placeholder="ID del 1 al 126"
                type="text" 
                onChange={e => setSearchingName(e.target.value)}
                value={searchingName}
            />
            <button 
                className="button"
                onClick={searchType} >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBox;