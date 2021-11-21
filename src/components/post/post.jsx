import React from 'react';
import Stories from 'react-insta-stories';
import {withRouter} from 'react-router-dom';
import {useMediaQuery, useTheme} from '@mui/material';

const Post = props => {
  const {data} = props;
  const stories = data.map(item => {
    return {
      url: item.photos.map(image => image),
      header: {
        heading: item.description,
        profileImage: item.photos[0],
      },
      style: {
        justifyContent: 'center',
      },
    };
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stories
      stories={stories}
      defaultInterval={2600}
      width={isMobile ? 320 : 450}
      height={isMobile ? 700 : 900}
      onAllStoriesEnd={() => props.history.push('/')}
      storyStyles={{margin: 'auto'}}
    />
  );
};

export default withRouter(Post);
