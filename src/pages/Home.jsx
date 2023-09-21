import "../styles/Home.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostLatest from "../components/BlogPostLatest";
import { data } from "../data/data";

function Home() {
    return(
        <LayoutBase>
            <div className="home-wrapper">
                <h1>My Blog</h1>
                <BlogPostLatest posts={data}/>
            </div>
        </LayoutBase>
    );
}

export default Home;