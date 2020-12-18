import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import SearchButton from '../../components/SearchButton';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo1.svg';
import load from '../../assets/load.gif';

const Home = () =>
{
    const [formData, setFormData] = useState({ 
        artist: '',
        song: '',
    });
    const [loading, setLoading] = useState(false);


    function handleInputChange(event)
    {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value }) 
    }

    async function handleSubmit(event)
    {
        event.preventDefault(); //Faz que a página não seja atualizada automaticamente ao enviar o formulário

        setLoading(true);
        api.get(`${formData.artist}/${formData.song}`)    //Faz a consulta a API, salva a letra, ou se der errado manda para a página de letra não encontrada
            .then(async (response) => {
                console.log(response.data.lyrics);
                if(response.data.lyrics !== "")
                {
                    // await AsyncStorage.setItem('@lyrics', response.data.lyrics);
                    setLoading(false);
                    // navigate('SearchResult');
                }
                else
                {
                    setLoading(false);
                    // navigate('NotFound');
                }
            })
            .catch(response => {
                console.log(response);
                // navigate('NotFound');
                setLoading(false);
            })
        setFormData({artist: '', song: ''});

        //Direciona
    }

    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                    <Link to="/latest">Últimas buscas</Link>
                </header>
                <main>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>
                                <h2>Buscar letra</h2>
                                <p>Encontre a letra de uma música ao fazer uma busca com o nome do artista e o nome da música.</p>
                            </legend>
                            <div className="field">
                                <label htmlFor="artist">Artista</label>
                                <input type="text" value={formData.artist} name="artist" id="artist" placeholder="Insira o nome do artista" onChange={handleInputChange}/>
                            </div>
                            <div className="field">
                                <label htmlFor="song">Música</label>
                                <input type="text" value={formData.song} name="song" id="song" placeholder="Insira o nome da música" onChange={handleInputChange}/>
                            </div>                       
                        </fieldset>
                        <SearchButton />
                    </form>
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

export default Home;