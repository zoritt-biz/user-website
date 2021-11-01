import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { useLazyQuery } from '@apollo/client';
import Loading from '../../components/common/loading';
import { GET_POSTS } from '../../apollo/queries/post-queries';
import SinglePost from './single-post';

const PostsScroll = () => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 8 * 1000);

  const [getPosts, { data, loading, error }] = useLazyQuery(GET_POSTS, {
    variables: {
      page: 1,
      perPage: 10,
      filterDate: newDate.toISOString().split('T')[0],
    },
  });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-md events-container">
        <h3 className="mb-3">What's new?</h3>
        <div className="row">
          {loading &&
            Array(5)
              .fill()
              .map((_, index) => (
                <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                  <Loading rectHeight={200} avatar={true} />
                </div>
              ))}
          {data &&
            data.postMany &&
            (data.postMany.length > 0
              ? data.postMany.map(post => (
                  <div
                    key={post._id}
                    className="col-12 col-md-6 col-lg-4 mb-3 mb-xl-5"
                  >
                    <SinglePost post={post} />
                  </div>
                ))
              : !loading && (
                  <div className="container-md">No recent post found</div>
                ))}
          {error && <div>error: {error}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostsScroll;
