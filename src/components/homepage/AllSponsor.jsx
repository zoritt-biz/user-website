import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_BUSINESS_MANY } from '../../apollo/queries/business_queries';
import Loading from '../common/Loading';
import Sponsored from '../sponsored/Sponsored';

const AllSponsor = () => {
  const [getSponsor, { loading, data, error }] = useLazyQuery(
    GET_BUSINESS_MANY,
    { variables: { limit: 4 } }
  );

  useEffect(() => {
    getSponsor();
  }, [getSponsor]);
  return (
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

        {data && data.businessMany && data.businessMany.length > 0
          ? data.businessMany.map(business => (
              <div key={business._id} className="col-12 col-md-6 mb-xl-5">
                <Sponsored business={business} />
              </div>
            ))
          : !loading && (
              <div className="text-center">No sponsored business found</div>
            )}

        {error && <div>error: {error}</div>}
      </div>
    </div>
  );
};

export default AllSponsor;
