import { useState } from "react"

export default function MovieForm(){
    const [ movie, setMovie ] = useState({
        movieTitle: "",
        releaseDate: ""
    }) // [state, setterMethod ]

    const handleChange = (event)=>{

        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form onSubmit={()=>alert("Form submitted")}>
            <input 
                type="text"
                placeholder="Movie Title"
                name="movieTitle"
                value={movie.movieTitle}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Movie Release"
                name="releaseDate"
                value={movie.releaseDate}
                onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    )
}
