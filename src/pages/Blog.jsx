import LayoutBase from "../components/layout/LayoutBase";
import { useParams } from "react-router-dom";

function Blog() {
    const params = useParams;
    const {id} = params
    return(
        <LayoutBase>
            <p>This is post {id}'s page.</p>
        </LayoutBase>
    )
}

export default Blog;



/* import LayoutBase from "../components/layout/LayoutBase";
import { data } from "../data/data";

function Blog({ posts={data} }) {
  return (
    <LayoutBase>
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
    </LayoutBase>
  );
}

export default Blog;
 */