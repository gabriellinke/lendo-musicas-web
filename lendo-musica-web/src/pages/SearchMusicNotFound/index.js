import React from 'react'; 
import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo1.svg';
import SearchButton from '../../components/SearchButton';
import Logo from '../../components/Logo';

import './styles.css';

const SearchMusicNotFound = () =>
{
    return(
    <div id="page-not-found">
        <div className="content">
            <header>
                <Logo />
            </header>
            <main>
                <h1>Letra não encontrada</h1>
                <img src={illustration} alt="Ilustração"/>
                <p className='text'>Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca &lt;3</p>
                <SearchButton name='Nova busca'/>
            </main>
        </div>
    </div>
    );
};

export default SearchMusicNotFound;