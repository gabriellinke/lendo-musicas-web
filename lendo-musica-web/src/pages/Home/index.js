import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";

import './styles.css';
import logo from '../../assets/logo1.svg';

const Home = () =>
{
    const [formData, setFormData] = useState({ 
        artist: '',
        song: '',
    });

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    function handleInputChange(event)
    {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value }) 
    }

    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                    <Link to="/latest">Últimas buscas</Link>
                </header>
                <main>
                    <fieldset>
                        <legend>
                            <h2>Buscar letra</h2>
                            <p>Encontre a letra de uma música ao fazer uma busca com o nome do artista e o nome da música.</p>
                        </legend>
                        <div className="field">
                            <label htmlFor="artist">Artista</label>
                            <input type="text" name="artist" id="artist" placeholder="Insira o nome do artista" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="song">Música</label>
                            <input type="text" name="song" id="song" placeholder="Insira o nome da música" onChange={handleInputChange}/>
                        </div>                       
                    </fieldset>
                    <button className="search">Buscar</button>
                </main>
            </div>
        </div>
    );
};

export default Home;