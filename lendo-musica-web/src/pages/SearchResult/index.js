import React from 'react';
import SearchButton from '../../components/SearchButton';
import Logo from '../../components/Logo';
import { Link } from "react-router-dom";

import './styles.css';

const SearchResult = () =>
{
    return(
        <div id="page-search-result">
            <div className="content">
                <main>
                    <Logo width="50px"/>
                    <h1>Letra encontrada</h1>
                    <Link to='/lyrics'>
                        <div className="backgroundImage">
                            <p className="artist">{localStorage.getItem('@artist').replace(/^./, localStorage.getItem('@artist')[0].toUpperCase())}</p>
                            <p className="song">{localStorage.getItem('@song').replace(/^./, localStorage.getItem('@song')[0].toUpperCase())}</p>
                        </div>
                    </Link>
                    <h2>Não encontrou o que <br/> procurava?</h2>
                    <SearchButton name='Nova busca'/>
                </main>
            </div>
        </div>
    );
};

export default SearchResult;