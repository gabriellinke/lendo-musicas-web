import React, { useEffect } from 'react'; 
import logo from '../../assets/logo2.svg';
import backButon from '../../assets/backButton.svg';
import newSearch from '../../assets/newSearch.svg';
import { Link } from "react-router-dom";

import './styles.css';

const Result = () =>
{
    useEffect(() => {  // Recupera os dados do async storage / Salva a nova música no histórico
        const storagedArtist = localStorage.getItem('@artist');
        const storagedSong = localStorage.getItem('@song');

        // Salva os dados no histórico
        if(storagedArtist !== "" && storagedSong !== "" )
        {
            let musics = [];
                let historic = localStorage.getItem('@musics');  // Recupera o histórico
                if(historic)
                    musics = JSON.parse(historic);

                if(musics.length > 0)   // Verifica se a música já está no histórico
                    for(let music of musics)
                    {
                        if(storagedArtist === music.artist && storagedSong === music.song)
                            return;
                    }

                /* Adiciona um novo valor no array criado */
                musics.push({artist: storagedArtist, song: storagedSong});
                if(musics.length > 10)  // Se tiver mais de 10 itens no histórico remove o mais antigo
                    musics.shift();

                // /* Salva o item */
                localStorage.setItem('@musics', JSON.stringify(musics));
        }
    }, [])

    return(
        <div id="page-result">
            <div className="content">
                <header>
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                    <Link to='/'><img src={backButon} alt="botão para voltar"/></Link>
                </header>
                <main>
                    <p className="song">{localStorage.getItem('@song').replace(/^./, localStorage.getItem('@song')[0].toUpperCase())}</p>
                    <p className="artist">CANÇÃO DE {localStorage.getItem('@artist').toUpperCase()}</p>
                    <p className="lyrics">{localStorage.getItem('@lyrics')}</p>
                    <p className="like">Curtiu? Busque mais letras.</p>
                    <Link to='/'>
                        <img src={newSearch} alt="nova busca"/>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Result;