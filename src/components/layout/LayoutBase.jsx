import Header from "./header/Header";
import Footer from "./footer/Footer";

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