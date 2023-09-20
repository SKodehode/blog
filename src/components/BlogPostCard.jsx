import "../styles/BlogPostCard.css"
import { Link } from "react-router-dom";
import { data } from "../data/data";

/**
 * BlogPostCard.jsx is a general component that we use to display the contents from our object arrays in a card format. 
 * This component is used by the catalog page to display each post as a card with limited information from the post object by refering to it's description property instead of it's content property.
 */

function BlogPostCard({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img className="post-image" src={post.image} alt={post.title} />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.description}</p>
          <p className="post-timestamp">{post.timestamp}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostCard;
