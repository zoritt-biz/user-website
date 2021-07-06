import React from 'react';

const RelatedBusiness = () => {
  return (
    <>
      {/* Related Business mobile + web */}
      <div className="bg-white mb-2 py-4 border-bottom">
        <p className="fs-5 fw-bold mb-4">Related Businesses</p>

        <div
          className="d-md-flex flex-md-nowrap d-block related"
          style={{ overflowX: 'scroll' }}
        >
          <div className="d-flex d-md-block  mb-4">
            <img
              src="../images/angla3.jpg"
              alt=""
              className="related-image rounded mr-3"
            />
            <div>
              <p className="fw-bold related-business-title">Angla Burger</p>
              <p className="mb-0 related-business-desc">
                Zimbabwe St, Addis Ababa
              </p>
              <p className="related-business-desc">+251 91 206 0505</p>
            </div>
            <p className="related-business-dolar">$$$$</p>
          </div>

          <div className="d-flex d-md-block  mb-4">
            <img
              src="../images/angla1.jpg"
              alt=""
              className="related-image rounded mr-3"
            />
            <div>
              <p className="fw-bold related-business-title">In-Joy Burger</p>
              <p className="mb-0 related-business-desc">
                Ednamall, Bole, Addis Ababa
              </p>
              <p className="related-business-desc">+251 93 987 8787</p>
            </div>
            <p className="related-business-dolar">$$</p>
          </div>

          <div className="d-flex d-md-block  mb-4">
            <img
              src="../images/angla2.jpg"
              alt=""
              className="related-image rounded mr-3"
            />
            <div>
              <p className="fw-bold related-business-title">Angla Burger</p>
              <p className="mb-0 related-business-desc">
                Zimbabwe St, Addis Ababa
              </p>
              <p className="related-business-desc">+251 91 206 0505</p>
            </div>
            <p className="related-business-dolar">$$$$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedBusiness;
