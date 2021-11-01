import {useLazyQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {GET_SPONSORED_BUSINESSES} from '../../apollo/queries/business-queries';
import Loading from '../../components/loading/loading';
import Footer from '../../components/footer/footer';
import Sponsored from '../../components/sponsored/sponsored';
import NavBar from '../../components/navbar/navBar';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

const SponsoredPage = ({history}) => {
  const [getSponsor, {loading, data, error}] = useLazyQuery(
    GET_SPONSORED_BUSINESSES,
    {variables: {limit: 5}}
  );

  useEffect(() => {
    getSponsor();
  }, [getSponsor]);

  return (
    <>
      <NavBar/>
      <div className="container-md sponsored">
        <h3 className="mb-3" onClick={() => history.push('/sponsored')}>
          Sponsored Business
        </h3>
        <div className="row">
          {loading &&
          Array(5)
            .fill()
            .map((_, index) => (
              <div key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                <Loading rectHeight={200} text={true}/>
              </div>
            ))}

          {data && data.businessMany && data.businessMany.length > 0
            ? data.businessMany.map(business => (
              <div
                key={business._id}
                className="col-12 col-lg-6 mb-3 mb-xl-5"
              >
                <Link to={`/detail/${business._id}`}>
                  <Sponsored business={business}/>
                </Link>
              </div>
            ))
            : !loading && (
            <div className="container-md">No sponsored business found</div>
          )}

          {error && <div>error: {error}</div>}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default withRouter(SponsoredPage);
