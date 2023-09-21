import Header from "./header/Header";
import Footer from "./footer/Footer";

/* This component is the base layout for each page. */
/* This ensures that each page has the similar overal look and it saves us from having to importing the header and footer into every page. */

function LayoutBase(properties) {
    return(
        <>
        <Header/>
        <main>
            {properties.children}
        </main>
        <Footer/>
        </>
    );
}

export default LayoutBase