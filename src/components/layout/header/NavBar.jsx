import { Link } from "react-router-dom";

/* This is the navbar component used to display a link to the homepage and the blogpost catalog. */

function NavBar() {
    return(
        <>
            <nav>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/catalog">Catalog</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
