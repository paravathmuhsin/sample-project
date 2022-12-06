import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useState(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((res) => {
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
