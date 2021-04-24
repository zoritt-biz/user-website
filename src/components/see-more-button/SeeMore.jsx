import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useLazyQuery } from '@apollo/client';
import { GET_BUSINESS_MANY } from '../../apollo/queries/business_queries';
import { Link } from 'react-router-dom';

const SeeMore = () => {
  const [getBusiness, { data }] = useLazyQuery(GET_BUSINESS_MANY, {
    variables: { limit: 3 },
  });

  useEffect(() => {
    getBusiness();
  }, [getBusiness]);
  return (
    <>
      {data && data.businessMany && data.businessMany.length > 0 ? (
        <div className="mt-5 d-flex justify-content-center see-more-button-container pb-5">
          <Link to="/sponsored" className="text-decoration-none">
            <Button
              size="large"
              disableElevation
              className="see-more-button rounded fs-6 text-capitalize text-white"
              variant="contained"
            >
              See More
            </Button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default SeeMore;
