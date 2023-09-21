import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* This is a simple component that scrolls you to the top of the page each time the user clicks on a new route page. */
/* Without this function the user would likely start at the bottom of each singluar post page. */
/* We use scrollTo(0, 0) setting the position of the scroll to the top, this could be changed to a specific section of the page if required. */

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;