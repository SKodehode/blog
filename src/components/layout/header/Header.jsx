import "../../../styles/Header.css"
import NavBar from "./NavBar";

/* This is the header component with the navbar component nested inside. */

function Header() {
    return(
        <>
            <header>
                <NavBar/>
            </header>
        </>
    );
}

export default Header