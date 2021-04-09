import React, { useState } from 'react';

import { Favorite, FavoriteBorder, Share, MoreVert } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const ImageContent = () => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <>
      {/* image icon */}
      <div className="d-flex d-md-none justify-content-end icon-content container-fluid p-3">
        {favourite ? (
          <Favorite onClick={handleClick} className="sponsored-icon-color" />
        ) : (
          <FavoriteBorder onClick={handleClick} className="text-white" />
        )}
        <Share className="text-white ml-3" />
        <MoreVert className="text-white ml-3" />
      </div>

      {/* image text responsive */}
      <div className="img-content d-block d-md-flex position-absolute end-0 start-0 container-md">
        <div className="p-4">
          <p className="fs-1 fw-bold text-white mb-1">Wow Burger</p>
          <div className="d-none d-md-block">
            <p className="fs-6 fw-bold text-white mb-1">
              $$ . Burger, Shawarma
            </p>
            <p className="mb-1 text-white">
              <span className="detail-open mr-2">Open</span>
              9:00 AM - 6:00 PM ET
            </p>
          </div>
        </div>

        <div className="d-none d-md-block ml-auto mt-auto pb-4">
          <Button
            size="large"
            disableElevation
            className="text-white see-all rounded fs-6 text-capitalize"
            variant="outlined"
          >
            See All Photos
          </Button>
        </div>
      </div>
    </>
  );
};

export default ImageContent;
