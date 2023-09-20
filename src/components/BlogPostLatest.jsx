import "../styles/BlogPostLatest.css"

/**
 * BlogPostLatest is a component  used to display the latesrt post from our data array.
 * This component is then displayed on the home page.
 */

function BlogPostLatest({ posts }) {
  const post = posts[posts.length - 1];

  if (!post) {
     return null;
  }
  return (
        <div className="post-card" key={post.id}>
          <img className="post-image" src={post.image} alt={post.title} />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      )}

export default BlogPostLatest;