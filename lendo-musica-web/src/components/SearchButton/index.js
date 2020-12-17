import React from 'react'; 
import { FaSearch } from 'react-icons/fa';

import './styles.css';

const SearchButton = () =>
{
    return(
        <div id="search-button">
            <button className="search">
                <FaSearch className="search-icon" size={22}/>
                <p>Buscar</p>
            </button>
        </div>
    );
};

export default SearchButton;