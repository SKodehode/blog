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
        <div className="latest-wrapper" key={post.id}>
          <img className="latest-image" src={post.image} alt={post.title} />
          <h2 className="latest-title">{post.title}</h2>
          <p className="latest-content">{post.content}</p>
          <p className="latest-timestamp">{post.timestamp}</p>
        </div>
      )}

export default BlogPostLatest;