import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Components/Context";
import { getPostAction } from "../../Store/Actions/post.actions";
// import { getPosts } from "../../Services/post.service";

const PostList = () => {
  // const [posts, setPosts] = useState([]);
  const { setAppTitle } = useAppContext();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    setAppTitle("Post");
    // getPosts().then((res) => {
    //   setPosts(res);
    // });
    if (!posts.length) {
      dispatch(getPostAction());
    }
  }, [dispatch, posts.length, setAppTitle]);
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
