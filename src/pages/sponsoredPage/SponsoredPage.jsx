import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_BUSINESS_MANY } from '../../apollo/queries/business_queries';
import Loading from '../../components/common/Loading';
import Footer from '../../components/footer/Footer';
import Sponsored from '../../components/sponsored/Sponsored';
import Navbar from '../../components/navbar/navbar';

const SponsoredPage = () => {
  const [getSponsor, { loading, data, error }] = useLazyQuery(
    GET_BUSINESS_MANY,
    { variables: { limit: 50 } }
  );
  const count = [1, 2, 3, 4, 5];
  useEffect(() => {
    getSponsor();
  }, [getSponsor]);
  return (
    <>
      <Navbar />
      <div className="container-md sponsored">
        <h3 className="mb-3">Sponsored Business</h3>
        <div className="row">
          {loading &&
            count.map(index => (
              <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                <Loading rectHeight={200} text={true} />
              </div>
            ))}

          {data && data.businessMany && data.businessMany.length > 0
            ? data.businessMany.map(business => (
                <div
                  key={business._id}
                  className="col-12 col-lg-6 mb-3 mb-xl-5"
                >
                  <Sponsored business={business} />
                </div>
              ))
            : !loading && (
                <div className="container-md">No sponsored business found</div>
              )}

          {error && <div>error: {error}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponsoredPage;