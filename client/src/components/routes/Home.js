import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <header>
                <nav className="navBar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/artist">Artist</NavLink>
                 </nav>    
            </header>
  

            <body className="body">
            <NavLink to="/jazz">Jazz</NavLink>
            <NavLink to="/hiphop">Hip-Hop</NavLink>
            <NavLink to="/classic-rock">Classic Rock</NavLink>
            <NavLink to="/pop">Pop</NavLink>
            <NavLink to="/classical">Classical</NavLink>
            </body>

        </div>   
    )
}

export default Home