import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext, UserContext } from "../App";


const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };
  

export default function NavBar(){

    const theme = useContext(ThemeContext)
    const user = useContext(UserContext)
    console.log("Theme: ", theme)
    console.log("User: ", user)

    return (
        <nav style={theme}>
            <NavLink activeStyle={linkStyles} to="/">Home</NavLink>
            <NavLink activeStyle={linkStyles} to="/about">About</NavLink>
            <NavLink activeStyle={linkStyles} to="/contact">Contact</NavLink>
            <NavLink activeStyle={linkStyles} to="/movies">Movies</NavLink>
        </nav>
    )
}