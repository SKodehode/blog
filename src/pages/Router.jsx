import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Catalog from './Catalog';
import Post from './Post';

/**
 * AppRouter is a function responsible for rendering this website's pages.
 * @returns 
 */

function AppRouter() {
    return(
        <>
            {/* Routes is a sub component in routing below BrowserRouter that is used to define our different routes. */}
            <Routes>
                {/* The Route components are used to create a page by defining it's url path in the path property and which elements this page should load in the element property. */}
                {/* Path "/" is the index page, the first page to be displayed when a user visits the site. */}
                <Route path="/" element={<Home/>}/>
                {/* Catalog is the page where each blog post will be displayed in a grid format allowing users to look for and search for a post with ease. */}
                <Route path="/catalog" element={<Catalog/>}/>
                {/* Post/:id is responsible for rendering a blog post's contents. It is one page rendering one post at a time depending on which link the user clicks on. */}
                {/* Each post has a unique link generated with own id based off of the id property in the post object array. */}
                <Route path="/post/:id" element={<Post/>}/>
            </Routes>
        </>
    )
}

export default AppRouter;