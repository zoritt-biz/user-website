import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_SPONSORED_BUSINESSES } from '../../apollo/queries/business-queries';
import Loading from '../common/loading';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Sponsored from '../sponsored/sponsored';

const SponsoredPosts = () => {
  const [getSponsor, { loading, data, error }] = useLazyQuery(
    GET_SPONSORED_BUSINESSES
  );

  useEffect(() => {
    getSponsor({
      variables: {
        limit: 5,
      },
    });
  }, []);

  return (
    <>
      <div className="mt-5 container-md">
        <h3 className="mb-3">Sponsored Business</h3>
        <div className="row">
          {loading &&
            Array(4)
              .fill()
              .map((_, index) => (
                <div key={index} className="col-12 col-md-6 mb-3">
                  <Loading rectHeight={300} text={true} />
                </div>
              ))}

          {data && data.sponsoredMany && data.sponsoredMany.length > 0
            ? data.sponsoredMany
                .sort(() => (Math.random() > 0.5 ? 1 : -1))
                .map(business => (
                  <div key={business._id} className="col-12 col-md-6 mb-xl-5">
                    <Link
                      to={`/detail/${business._id}`}
                      className="text-decoration-none"
                    >
                      <Sponsored business={business} />
                    </Link>
                  </div>
                ))
            : !loading && (
                <div className="text-center my-5">
                  No sponsored business found
                </div>
              )}

          {error && <div>error: {error.message}</div>}
        </div>
      </div>
      {/*{data && data.businessMany && data.businessMany.length > 0 && (*/}
      {/*  <div className="container-md">*/}
      {/*    <SeeMore/>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
};

export default withRouter(SponsoredPosts);
