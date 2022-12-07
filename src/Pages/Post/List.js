import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Components/Context";
import { getPosts } from "../../Services/post.service";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { setAppTitle } = useAppContext();

  useState(() => {
    setAppTitle("Post");
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);
  return (
    <div>
      <h3>Posts</h3>
      {posts.map((i) => (
        <Link to={"/post/" + i.id} key={i.id}>
          <h4>{i.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
