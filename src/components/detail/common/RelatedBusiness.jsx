import React, {useEffect, useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import {GET_BUSINESS_RELATED_MANY} from "../../../apollo/queries/business_queries";
import "./related-biz-style.css";

const RelatedBusiness = ({business}) => {
  const [fetchRelated, {loading, data, error}] = useLazyQuery(GET_BUSINESS_RELATED_MANY);

  useEffect(()=>{
    fetchRelated({
      variables: {
        "category": [business.categories[0].name],
        "limit": 20,
        "id": business._id
      }
    })
  },[])

  return (
    <>
      {/* Related Business mobile + web */}
      <div className="bg-white mb-2 py-4 border-bottom">
        {data && data.businessMany && <p className="fs-5 fw-bold mb-4">Related Businesses</p>}

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
          {data && data.businessMany.map(biz=>(
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
    </>
  );
};

export default RelatedBusiness;
