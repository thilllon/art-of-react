import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    if (data) return; // reloading 방지. 대신 이미 데이터가 있으면 새로 불러오지 않아서 최신을 보장하지 않음 => 더 나은 방법있음.
    // 로딩중에도 데이터 유지시키고, 유저한테는 데이터 있는 경우 로딩중이라는 말 안보여주기. 그리고 내부적으로는 새로 페칭

    dispatch(getPosts());
  }, [data, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;
