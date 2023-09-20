import LayoutBase from "../components/layout/LayoutBase";
import { useParams } from "react-router-dom";
import { data } from "../data/data";
import ErrorPage from "./Error";

function Post() {
    const { id } = useParams()
    const post = data.find((post) => post.id === parseInt(id));

    if (!post) {
      return <ErrorPage />
    }
    return(
      <LayoutBase>
        <div className="post-card" key={post.id}>
          <img className="post-image" src={post.image} alt={post.title} />
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <p className="post-timestamp">{post.timestamp}</p>
        </div>
      </LayoutBase>
    )
}

export default Post;