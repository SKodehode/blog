import "../styles/Catalog.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostCard from "../components/BlogPostCard";
import { data } from "../data/data";

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