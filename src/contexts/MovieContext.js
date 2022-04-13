import { createContext, useState, useEffect } from "react";
import { searchMovie } from "../utilities/utilities";
import useMovies from "../hooks/useMovies";

export const MovieContext = createContext()

export const MovieContextProvider = ({children})=>{
    const {movies, isLoaded} = useMovies("Marvel") // {movies, isLoaded}

    return(
        <MovieContext.Provider value={{movies, isLoaded}}>
            {children}
        </MovieContext.Provider>
    )
}

