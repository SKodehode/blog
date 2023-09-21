import React, { useState } from "react";
import "../styles/BlogPostLatest.css";

/**
 * BlogPostLatest is a component  used to display the latest post from our data array.
 * Two buttons are included that let's the users browse older posts, but the user will only be able to view the last five posts will from this component. 
 * This component is then displayed on the home page.
 */

function BlogPostLatest({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(posts.length - 1);

  /* nextPost is a function that increases current index by one, displaying the next object in the post array if there are any, however by default the lastest object will be displayed. */
  
  const nextPost = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  /* previousPost is a function that decreases the current index number by 1, displaying the previous object in the post array. */
  const previousPost = () => {
    if (currentIndex > posts.length - 5) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const post = posts[currentIndex];

  if (!post) {
    return null;
  }

  /* These are html elements that display the object's properties on the homepage. */
  return (
    <div className="latest-wrapper" key={post.id}>
      <img className="latest-image" src={post.image} alt={post.title} />
      <h2 className="latest-title">{post.title}</h2>
      <p className="latest-content">{post.content}</p>
      <p className="latest-timestamp">Posted {post.timestamp}</p>
      <div className="latest-button-wrapper">
        <button className="latest-button" onClick={previousPost}>Previous</button>
        <button className="latest-button" onClick={nextPost}>Next</button>
      </div>
    </div>
  );
}

export default BlogPostLatest;