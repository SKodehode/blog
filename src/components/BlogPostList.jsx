import "../styles/BlogPostList.css"

/**
 * BlogPostList is a general component that is used to display posts from our data array in a list format.
 * It is used to display all the posts in a object array in a list format, at the moment this component is used on the homepage. 
 * This component uses the content property from the object array to display each post's full text.
 */

function BlogPostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img className="post-image" src={post.image} alt={post.title} />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;