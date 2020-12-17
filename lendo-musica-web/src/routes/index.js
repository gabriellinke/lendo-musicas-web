import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SearchMusicNotFound from '../pages/SearchMusicNotFound';
import Result from '../pages/Result';
import SearchResult from '../pages/SearchResult';
import LatestSearches from '../pages/LatestSearches';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={SearchMusicNotFound} path="/not-found" exact/>
                <Route component={Result} path="/lyrics" exact/>
                <Route component={SearchResult} path="/result" exact/>
                <Route component={LatestSearches} path="/latest" exact/>
                <Route component={Home} />  {/* Usa o switch para essa rota com a home ser a rota default caso não encontre nenhuma */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;