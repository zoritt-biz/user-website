import React, {useEffect} from 'react';
import {withRouter} from 'react-router';
import {useLazyQuery} from '@apollo/client';
import {Link} from 'react-router-dom';

import {ArrowForwardIos} from '@mui/icons-material';

import {GET_POSTS} from '../../apollo/queries/post-queries';

import Loading from '../loading/loading';
import SinglePost from "./single-post";

const Posts = props => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 8 * 1000);

  const [getPosts, {data, loading, error}] = useLazyQuery(GET_POSTS);

  useEffect(() => {
    getPosts({
      variables: {
        page: 1,
        perPage: 10,
        filterDate: newDate.toISOString().split('T')[0],
      },
    });
  }, []);

  return (
    <div className="mt-5 px-0 px-md-3 container-md">
      <h3 className="mb-3 px-3">
        <Link to="/posts-scroll" className="text-decoration-none text-dark">
          What's new? <ArrowForwardIos fontSize="small"/>
        </Link>
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
        {error && <div>error: {error.message}</div>}
      </div>

      <div
        className="d-flex event-item-container pb-3 pr-md-3"
        style={{overflowX: 'scroll'}}
      >
        {data &&
        data.postPagination &&
        data.postPagination.items &&
        (data.postPagination.items.length > 0
          ? data.postPagination?.items?.map(post => (
            <div
              key={post._id}
              className="col-8 col-sm-5 col-md-4 col-lg-3 px-0 ml-3"
            >
              <SinglePost post={post}/>
            </div>
          ))
          : !loading && <div className="container-md">No posts found</div>)}
        {error && <div>error: {error.message}</div>}
      </div>
    </div>
  );
};

export default withRouter(Posts);
