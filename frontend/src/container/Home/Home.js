import React, {useEffect} from 'react';
import PostItem from "../../components/PostItem/PostItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/postsActions";
import {apiURL} from "../../config";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <>
      {posts && (Object.values(posts).map(item => (
        <PostItem
          key={item._id}
          image={`${apiURL}/${item.image}`}
          title={item.title}
          author={item.author}
          datetime={item.datetime}
          url={`/posts/${item._id}`}
        />)
      ))}
    </>
  );
};

export default Home;