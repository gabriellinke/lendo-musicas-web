import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Logo from '../../components/Logo';
import SearchButton from '../../components/SearchButton';
import api from '../../services/api';

import './styles.css';
import load from '../../assets/load.gif';

const LatestSearches = () =>
{
    const [musics, setMusics] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    useEffect(() => {   // Acessa o histórico
        let historic = [];
        let aux = localStorage.getItem('@musics');   // Recupera o histórico
        if(aux)
            historic = JSON.parse(aux);
        setMusics(historic);
    }, [])

    function clearHistoric()   // Limpa o histórico
    {
        localStorage.setItem("@musics", '[]');
        history.push('/');
    }

    function handleSearch(artist, song) 
    {
        localStorage.setItem('@artist', artist);
        localStorage.setItem('@song', song);
        setLoading(true);
        if(artist !== '' && song !== '')
            api.get(`${artist}/${song}`)
                .then(async (response) => {
                    console.log(response.data.lyrics);
                    if(response.data.lyrics !== "")
                    {
                        localStorage.setItem('@lyrics', response.data.lyrics);
                        localStorage.setItem('@artist', artist);
                        localStorage.setItem('@song', song);
                        history.push('/result');
                        setLoading(false);
                    }
                    else
                    {
                        history.push('/not-found');
                        setLoading(false);
                    }
                })
                .catch(response => {
                    console.log(response);
                    history.push('/not-found');
                    setLoading(false);
                })
    }

    return(
        <div id="page-latest-searches">
            <div className="content">
                <header>
                    <Logo />
                    <button className="clear" onClick={clearHistoric}>Limpar histórico X</button>
                </header>
                <main>
                    <h1>Histórico:</h1>
                    {musics.length > 0 ? 
                        musics.map((music) => {
                            return(
                                <button className="music" onClick={() => handleSearch(music.artist, music.song)}>
                                <p>{music.artist.replace(/^./, music.artist[0].toUpperCase())} - {music.song.replace(/^./, music.song[0].toUpperCase())}</p>
                            </button>
                            )
                        })
                        :
                        (<p className="empty">Nenhuma música no histórico.<br/> Tente realizar uma busca.</p>)
                    }
                    <div className="search"><SearchButton /></div>
                </main>
            </div>
            {loading && 
                <div className="loading-modal">
                    <img src={load} alt="Carregando"/>
                </div>
            }
        </div>
    );
};

export default LatestSearches;