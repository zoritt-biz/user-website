import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_POSTS } from '../../apollo/queries/post_queries';
import Loading from '../../components/common/Loading';
import Posts from '../../components/homepage/Posts';

const PostsPage = () => {
  const [getPosts, { data, loading, error }] = useLazyQuery(GET_POSTS, {
    variables: { limit: 3 },
  });
  const count = [1, 2, 3];

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3">Posts</h3>
      <div className="row">
        {loading &&
          count.map(index => (
            <div key={index} className="col-4">
              <Loading rectHeight={250} avatar={false} line={false} />
            </div>
          ))}

        {data && data.postMany && data.postMany.length > 0
          ? data.postMany.map(post => (
              <div key={post._id} className="col-4 posts-col">
                <Posts post={post} />
              </div>
            ))
          : !loading && <div className="text-center">No posts found</div>}
        {error && <div>error: {error}</div>}
      </div>
    </div>
  );
};

export default PostsPage;
