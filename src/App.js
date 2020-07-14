import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import PokemonPage from './components/PokemonPage/PokemonPage';
import AllPokemons from './components/AllPokemons/AllPokemons';
import page404 from './components/page404/page404';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
      <BrowserRouter basename="/pokedex"> {/*just for github pages */}
        <div className="App">
            <Route path="/" exact component={Navbar}></Route> {/*it's outside so that for landing page both navbar and landigpage get rendered and not just navbar and as it's exact it wont get rendered for any other route */}
            <Switch>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/pokemon/:search" component={PokemonPage}></Route>
            <Route path="/AllPokemons/:pageno" component={AllPokemons}></Route>
            <Route component={page404}></Route>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
