import "./Navbar.css";
import searchIcon from '../img/search.png';
import settings from '../settings.json';
import { Link } from "react-router-dom";

function Navbar() {

    const navbarLinks = (
        <>
            <div className='navbar-bottom'>
                <h4>Option 1</h4>
                <h4>Option 2</h4>
                <h4>Option 3</h4>
            </div>

        </>
    );
    const navbarSearch = (
        <>
            <div className="navbar-search">
                <img src={searchIcon} alt='Search Icon'></img>
            </div>
        </>
    );
    return (
        <div className='navbar'>
            <div className='navbar-top'>
                <div className='navbar-name'>
                    <Link to={''}><h1>Blog Name</h1></Link>
                </div>
                {settings.features.search ? navbarSearch : null}
            </div>

            {settings.features.navbar_links ? navbarLinks : null}

        </div>
    );
}

export default Navbar;
