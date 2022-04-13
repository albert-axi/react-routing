import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Movies from './pages/Movies';
import { searchMovie } from './utilities/utilities';
import { useEffect, useState, createContext, useContext } from 'react';
import MovieDetails from './components/MovieDetails';
import { MovieContext } from './contexts/MovieContext';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const user = {
  username: "batman",
  password: "bruce_wayne"
}

export const ThemeContext = createContext()
export const UserContext = createContext()


function App() {
  const {movies, isLoaded} = useContext(MovieContext)

  return (
    <div className="App">
        <Router>
          <ThemeContext.Provider value={themes.dark}>
            <UserContext.Provider value={user}>
              <NavBar />
            </UserContext.Provider>
          </ThemeContext.Provider>

          <NavBar/> 
          <Switch>
            {/* dynamic route */}
            <Route path="/movies/:movieTitle" >
              <MovieDetails movies={movies}/>
            </Route>
            {/* static routes */}
            <Route path="/movies" render={() => <Movies movies={movies} isLoaded={isLoaded}/>} />
            <Route path="/contact" component={Contact} /> 
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
