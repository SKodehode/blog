import "../styles/Catalog.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostCard from "../components/BlogPostCard";
import { data } from "../data/data";

/* This page displays the blog posts in a catalog view. Currently displaying them from the first post till the latest one. */

function Catalog() {
    return(
            <LayoutBase>
                <div className="catalog-wrapper">
                    <BlogPostCard posts={data} />
                </div>
            </LayoutBase>
    );
}

export default Catalog;