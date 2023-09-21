import "../styles/Home.css"
import LayoutBase from "../components/layout/LayoutBase";
import BlogPostLatest from "../components/BlogPostLatest";
import { data } from "../data/data";

/* This is the homepage and the index page. It displays a small image with the site's title and a short welcome message. */
/* Further down it displays the latest blog post added into the array. It also comes buttons that let's the user browse the 5 latest posts.  */

function Home() {
    return(
        <LayoutBase>
            <div className="home-wrapper">
                <img className="home-image" src="./images/home_background.jpg" alt="Image of a book where it reads; thought catalog. With a black pen laying on top of it." />
                <h1 className="home-title">Thoughts Unleashed: Navigating Life's Path</h1>
                <p className="home-content">Welcome to my blog! 🌟 Whether you're a first-time visitor or a loyal reader, I'm thrilled to have you here. This blog is a place where I share my thoughts, insights, and experiences on various topics that I'm passionate about. I hope you find inspiration, knowledge, and a sense of community as you explore the articles and stories I've crafted. Feel free to dive into the content, leave your thoughts in the comments, and join me on this journey of learning and discovery. Thanks for stopping by, and I look forward to sharing this space with you!</p>
            </div>
            <div className="latest-section">
            <h3 className="home-subtitle">Latest post:</h3>
                <hr class="home-separator"></hr>
                <BlogPostLatest posts={data}/>
            </div>
        </LayoutBase>
    );
}

export default Home;