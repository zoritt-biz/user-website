import React from 'react';

import { Skeleton } from '@material-ui/lab';

const Loading = ({ rectHeight, avatar, text, line }) => {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rect"
        height={rectHeight}
        className="mb-2"
      />
      {avatar && (
        <div className="d-flex mb-2">
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
          <div className="mt-2 ml-3" style={{ width: '30%' }}>
            <Skeleton animation="wave" height={10} className="mb-2" />
            <Skeleton animation="wave" height={10} />
          </div>
        </div>
      )}

      {line && <Skeleton animation="wave" height={30} />}

      {text && <Skeleton animation="wave" height={30} />}
    </>
  );
};

export default Loading;
