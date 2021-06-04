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
import Stories from 'react-insta-stories';
import { useMediaQuery } from 'react-responsive';

const Post = ({ data }) => {
  const stories = data.map(item => {
    return {
      url: item.photos.map(image => image),
      header: {
        heading: item.description,
        profileImage: item.photos[0],
      },
    };
  });

  const isDesktopOrTablet = useMediaQuery({ minDeviceWidth: 600 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 400 });

  // const [progress, setProgress] = useState(0);
  // const [item, setItem] = useState(0);
  // const history = useHistory();

  // const [favourite, setFavourite] = useState(false);

  // useEffect(() => {
  //   const handleProgress = oldProgress => {
  //     // setItem(item + 1);
  //     // item < data.length && setItem(item + 1);
  //     // item < data.length ? ( setItem(item +1) ) : return history.push("/")
  //     // data.length === item && history.push('/');
  //     console.log('data length ', data);

  //     console.log('item length ', item);
  //     return oldProgress === 0;
  //   };
  //   setInterval(() => {
  //     setProgress(oldProgress => {
  //       // if (item === data.length) {
  //       //   setItem(0);
  //       //   history.push('/');
  //       // } else {
  //       if (oldProgress === 100) {
  //         // setHandle(false)
  //         // return;

  //         // item < data.length && setItem(item + 1);
  //         // return history.push('/');
  //         // item < data.length ? return  setItem(item + 1) : return history.push("/")
  //         // if (item + 1 < data.length) {
  //         //   console.log('item', item + 1);
  //         //   console.log('data', data.length);
  //         //   let x = item + 1;
  //         //   setItem(x);
  //         //   return oldProgress === 0;
  //         // } else {
  //         //   return history.push('/');
  //         // }
  //         return;
  //       }
  //       // }

  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 400);
  //   setItem(item + 1);
  // }, [history, item, data, setItem]);

  return (
    <Stories
      stories={stories}
      defaultInterval={2600}
      width={isTabletOrMobile ? 260 : isDesktopOrTablet ? 532 : 360}
      height={isTabletOrMobile ? 500 : isDesktopOrTablet ? 900 : 640}
    />
    // <Paper elevation={0} className="paper">
    //   <img
    //     id="image"
    //     src={data[item].photos[0]}
    //     // src="../images/events2.jpg"
    //     alt="burgers"
    //     className="img-fluid event-image"
    //   />
    //   <div className="event-progress-bar-container">
    //     <LinearProgress
    //       variant="determinate"
    //       value={progress}
    //       className="flex-grow-1 event-progress-bar"
    //     />
    //   </div>
    //   <Typography className="event-name fs-3">Posts</Typography>
    //   <Typography className="event-description fs-5">
    //     {data[item].description}
    //   </Typography>
    //   <Avatar
    //     className="event-avatar"
    //     alt="wow burger"
    //     src={data[item].photos}
    //   />

    //   <Typography className="event-avatar-name fs-6">
    //     {/* {post.title[0]} */}
    //   </Typography>
    //   <Typography className="event-avatar-caption  opacity-50">
    //     Fry day is the best day
    //   </Typography>

    //   {favourite ? (
    //     <Favorite
    //       onClick={handleClick}
    //       fontSize="large"
    //       className="event-favourite-color"
    //     />
    //   ) : (
    //     <FavoriteBorder
    //       fontSize="large"
    //       onClick={handleClick}
    //       className="event-favourite-color"
    //     />
    //   )}
    //   <Share className="event-share-icon" fontSize="large" />
    //   <KeyboardArrowRight className="event-right-arrow " fontSize="small" />
    //   <KeyboardArrowLeft className="event-left-arrow" fontSize="small" />
    // </Paper>
  );
};

export default Post;
