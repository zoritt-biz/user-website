import React from 'react';
import Stories from 'react-insta-stories';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';

const Post = props => {
  const { data } = props;
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

  const isDesktopOrTablet = useMediaQuery({ minDeviceWidth: 600 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 400 });

  return (
    <Stories
      stories={stories}
      defaultInterval={2600}
      width={432}
      height={isTabletOrMobile ? 500 : isDesktopOrTablet ? 900 : 640}
      onAllStoriesEnd={() => props.history.push('/')}
      storyStyles={{ margin: 'auto' }}
    />
  );
};

export default withRouter(Post);
