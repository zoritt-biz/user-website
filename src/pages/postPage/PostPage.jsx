import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Close} from '@material-ui/icons';
import {useLazyQuery} from '@apollo/client';
import {makeStyles} from '@material-ui/core/styles';
import {Backdrop, CircularProgress} from '@material-ui/core';
import Post from '../../components/post/Post';
import {GET_POSTS} from '../../apollo/queries/post_queries';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const PostPage = () => {
  const classes = useStyles();
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
  }, []);

  return (
    <div className="event">
      <div className="d-flex justify-content-center align-items-center event-container">
        <Link to="/">
          <p className="event-logo  fs-2">ዞሪት</p>
        </Link>

        <Link to="/">
          <Close className="event-close fs-2"/>
        </Link>

        {loading && (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit"/>
          </Backdrop>
        )}

        {data && data.postMany && <Post data={data.postMany}/>}

        {error && <div>error: {error}</div>}
      </div>
    </div>
  );
};

export default PostPage;
