import LayoutBase from "../components/layout/LayoutBase";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

function Post() {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = data.find((item) => item.id === postId);

  if (!post) {
    return (
      <LayoutBase>
        <div className="error-message">
          <p>Sorry, the requested post does not exist.</p>
        </div>
      </LayoutBase>
    );
  }

  return (
    <LayoutBase>
      <div className="post-card" key={post.id}>
        <img className="post-image" src={post.image} alt={post.title} />
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <p className="post-timestamp">{post.timestamp}</p>
      </div>
    </LayoutBase>
  );
}

export default Post;