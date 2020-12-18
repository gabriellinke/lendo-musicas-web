import React from 'react';
import logo from '../../assets/logo1.svg';
import musicImage from '../../assets/musica.jpg';
import SearchButton from '../../components/SearchButton';

import './styles.css';

const SearchResult = () =>
{
    return(
        <div id="page-search-result">
            <img src={logo} alt="Logo"/>
            <h1>Letra encontrada</h1>
            <img src={musicImage} alt="Imagem de música"/>
            <h2>Não encontrou o que procurava?</h2>
            <SearchButton name='Nova busca'/>
        </div>
    );
};

export default SearchResult;