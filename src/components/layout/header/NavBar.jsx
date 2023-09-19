import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/blog/:id">Test</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
