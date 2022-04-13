export function sayHello(){
    console.log("Hello world!")
}

export function sayYourName(name){
    console.log(`My name is ${name}`)
}

export const DEFAULT_PERSON = {
    name: "Anonymous",
    age: 0
}

export async function searchMovie(movie){
    const response = await fetch(`http://www.omdbapi.com/?apikey=4c2eada9&s=${movie}`)
    const data = await response.json()

    return data
}

export async function getMovieDetails(movie){
    const response = await fetch(`http://www.omdbapi.com/?apikey=4c2eada9&t=${movie}`)
    const data = await response.json()

    return data
}