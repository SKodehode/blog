import "../styles/Home.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostLatest from "../components/BlogPostLatest";
import { data } from "../data/data";

function Home() {
    return(
        <LayoutBase>
            <h1>Welcome home!</h1>
            <BlogPostLatest posts={data}/>
        </LayoutBase>
    );
}

export default Home;