import React, {useEffect} from 'react';
import {useLazyQuery} from "@apollo/client";
import {GET_BUSINESS_BY_FILTER} from "../../../apollo/queries/business-queries";
import "./related-biz-style.css";

const RelatedBusiness = ({business}) => {
  const [fetchRelated, {loading, data, error}] = useLazyQuery(GET_BUSINESS_BY_FILTER);

  useEffect(() => {
    fetchRelated({
      variables: {
        "category": "",
        "distance": 0,
        "query": "",
        "openNow": false,
        "lat": 0.0,
        "lng": 0.0,
        "page": 1,
        "perPage": 15
      }
    })
  }, [])

  return (
    <>
      {/* Related Business mobile + web */}
      searchData.getBusinessesByFilter.items
      {data && data.getBusinessesByFilter && data.getBusinessesByFilter.items.length > 0 && (
        <div className="bg-white mb-2 py-4 border-bottom">
          <p className="fs-5 fw-bold mb-4">Related Businesses</p>

          {
            loading && (
              <div>
                loading...
              </div>
            )
          }
          <div
            className="row related"
            style={{overflowX: 'scroll'}}
          >
            {data && data.getBusinessesByFilter && data.data.getBusinessesByFilter.items.map(biz => (
              <div className="col-5 col-md-3 col-lg-2 mb-4 border mr-2 rounded-lg px-0 border-light">
                <div>
                  <div className="position-relative related-biz-cont">
                    <div className="position-absolute related-biz">
                      <img
                        src={biz.pictures[0]}
                        alt=""
                        className="related-biz-pic-back rounded"
                      />
                    </div>
                    <div className="position-absolute related-biz">
                      <img
                        src={biz.pictures[0]}
                        alt=""
                        className="related-biz-pic rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <p className="fw-bold related-business-title">{biz.businessName}</p>
                  <p className="mb-0 related-business-desc">
                    {biz.location}
                  </p>
                  <p className="related-business-desc">{biz.phoneNumber[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RelatedBusiness;
