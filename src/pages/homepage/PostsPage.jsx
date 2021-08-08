import {useLazyQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {GET_POSTS} from '../../apollo/queries/post_queries';
import Loading from '../../components/common/Loading';
import Posts from '../../components/homepage/Posts';
import {Link} from "react-router-dom";

const PostsPage = ({history}) => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - (60 * 60 * 24 * 8 * 1000));

  const [getPosts, {data, loading, error}] = useLazyQuery(GET_POSTS, {
    variables: {
      "skip": 0,
      "limit": 10,
      "sort": "CREATEDAT_DESC",
      "filterDate": newDate.toISOString().split("T")[0]
    },
  });

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3 px-3">
        <Link to="/posts-scroll" className="text-decoration-none text-dark">Posts ></Link>
      </h3>
      <div className="row">
        {loading &&
        Array(2)
          .fill()
          .map((_, index) => (
            <div key={index} className="col-6">
              <Loading rectHeight={250} avatar={false} line={false}/>
            </div>
          ))}
        {error && <div>error: {error}</div>}
      </div>

      <div
        className="d-flex event-item-container pb-3 pr-md-3"
        style={{overflowX: 'scroll'}}
      >
        {data && data.postMany && data.postMany.length > 0
          ? data.postMany.map(post => (
            <div key={post._id} className="col-8 col-sm-5 col-md-4 col-lg-3 px-0 ml-3">
              <Posts post={post}/>
            </div>
          ))
          : !loading && <div className="container-md">No posts found</div>}
      </div>
    </div>
  );
};

export default PostsPage;
