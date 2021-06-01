import React, { useEffect, useState } from 'react';
import { Paper, Typography, Avatar, LinearProgress } from '@material-ui/core';
import {
  Favorite,
  FavoriteBorder,
  Share,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from '@material-ui/icons';

import { useHistory } from 'react-router';

const Post = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const [item, setItem] = useState(0);
  const history = useHistory();

  const [favourite, setFavourite] = useState(false);
  const [handle, setHandle] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  useEffect(() => {
    const handleProgress = oldProgress => {
      // setItem(item + 1);
      // item < data.length && setItem(item + 1);
      // item < data.length ? ( setItem(item +1) ) : return history.push("/")
      // data.length === item && history.push('/');
      console.log('data length ', data);

      console.log('item length ', item);
      return oldProgress === 0;
    };
    setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          // setHandle(false)
          // return;
          console.log('data length ', data);

          console.log('item length ', item);
          // item < data.length && setItem(item + 1);
          // return history.push('/');
          // item < data.length ? return  setItem(item + 1) : return history.push("/")
          if (item + 1 < data.length) {
            setItem(value => value + 1);
            return oldProgress === 0;
          } else {
            return history.push('/');
          }
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
  }, [history, item, data, setItem]);

  const handleBackward = () => {
    setItem(item - 1);
    setHandle(true);
  };

  const handleForward = () => {
    setItem(item + 1);
    setHandle(true);
  };

  console.log('item outside ', item);
  return (
    <Paper elevation={0} className="paper">
      <img
        src={data[item].photos[0]}
        // src="../images/events2.jpg"
        alt="burgers"
        className="img-fluid event-image"
      />
      <div className="event-progress-bar-container">
        <LinearProgress
          variant="determinate"
          value={progress}
          className="flex-grow-1 event-progress-bar"
        />
      </div>
      <Typography className="event-name fs-3">Posts</Typography>
      <Typography className="event-description fs-5">
        {data[item].description}
      </Typography>
      <Avatar
        className="event-avatar"
        alt="wow burger"
        src={data[item].photos}
      />

      <Typography className="event-avatar-name fs-6">
        {/* {post.title[0]} */}
      </Typography>
      <Typography className="event-avatar-caption  opacity-50">
        Fry day is the best day
      </Typography>

      {favourite ? (
        <Favorite
          onClick={handleClick}
          fontSize="large"
          className="event-favourite-color"
        />
      ) : (
        <FavoriteBorder
          fontSize="large"
          onClick={handleClick}
          className="event-favourite-color"
        />
      )}
      <Share className="event-share-icon" fontSize="large" />
      <KeyboardArrowRight
        className="event-right-arrow "
        fontSize="small"
        onClick={handleForward}
      />
      <KeyboardArrowLeft
        className="event-left-arrow"
        fontSize="small"
        onClick={handleBackward}
      />
    </Paper>
  );
};

export default Post;
