import "../styles/Blog.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostCard from "../components/BlogPostCard";
import { data } from "../data/data";
import { Link } from "react-router-dom";

function Catalog() {
    return(

            <LayoutBase>
                <h2 id="blog-title">Catalog view of my blog posts</h2>
                <Link to="blog/1">Post 1</Link>
                <Link to="blog/1">Post 2</Link>
                <Link to="blog/1">Post 3</Link>
                <Link to="blog/1">Post 4</Link>
                <Link to="blog/1">Post 5</Link>
                <BlogPostCard posts={data} />
            </LayoutBase>
    );
}

export default Catalog;