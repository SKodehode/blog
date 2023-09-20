import "../styles/Blog.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostCard from "../components/BlogPostCard";
import { data } from "../data/data";

function Catalog() {
    return(

            <LayoutBase>
                <BlogPostCard posts={data} />
            </LayoutBase>
    );
}

export default Catalog;