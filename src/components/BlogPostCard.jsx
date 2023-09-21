import "../styles/BlogPostCard.css"
import { Link } from "react-router-dom";

/**
 * BlogPostCard.jsx is a general component that we use to display the contents from our object arrays in a card format. 
 * This component is used by the catalog page to display each post as a card with limited information from the post object by refering to it's description property instead of it's content property.
 */

function BlogPostCard({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="Card" key={post.id}>
          <img className="card-image" src={post.image} alt={post.title} />
          <h2 className="card-title">{post.title}</h2>
          <p className="card-content">{post.description}</p>
          <p className="card-timestamp">Posted  {post.timestamp}</p>
          <Link className="card-link" to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </>
  );
}

export default BlogPostCard;
