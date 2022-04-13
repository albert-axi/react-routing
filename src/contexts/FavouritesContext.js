import { createContext, useState, useEffect } from "react";
import { searchMovie } from "../utilities/utilities";

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({children})=>{
    const [favourites, setFavourites] = useState([])
    
    useEffect(() => {
        fetch("http://127.0.0.1:3000/favouriteMovies")
        .then(res=>res.json())
        .then(data => {
            setFavourites(data)
        })
    }, [])

    return(
        <FavouritesContext.Provider value={[favourites, setFavourites]}>
            {children}
        </FavouritesContext.Provider>
    )
}

