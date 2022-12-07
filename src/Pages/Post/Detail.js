import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../Components/Context";
import { getPostDetails } from "../../Services/post.service";

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const { setAppTitle } = useAppContext();
  useEffect(() => {
    setAppTitle("Post Details");
    getPostDetails(id).then((res) => {
      setPost(res);
    });
  }, [id, setAppTitle]);

  return (
    <div>
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : null}
    </div>
  );
};

export default Detail;
