import React from 'react'; 
import { useHistory } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

import './styles.css';

const SearchButton = (props) =>
{
    const history = useHistory();

    function onDefaultClick()
    {
        history.push('/');
    }

    return(
        <div id="search-button">
            <button className="search" onClick={props.onClick ? props.onClick : onDefaultClick}>
                <FaSearch className="search-icon" size={22}/>
                <p>{props.name? props.name : 'Buscar'}</p>
            </button>
        </div>
    );
};

export default SearchButton;