import "../styles/Home.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostList from "../components/BlogPostList";
import { data } from "../data/data";

function Home() {
    return(
        <LayoutBase>
            <h1>Welcome home!</h1>
            <BlogPostList posts={data}/>
        </LayoutBase>
    );
}

export default Home;