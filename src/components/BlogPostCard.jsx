function BlogPostCard({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img className="post-image" src={post.image} alt={post.title} />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.description}</p>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogPostCard;
