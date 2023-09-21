import { Link } from "react-router-dom";

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
