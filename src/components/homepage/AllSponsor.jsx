import React from 'react';
import Sponsored from './Sponsored';

const AllSponsor = () => {
  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3">Sponsored Posts</h3>
      <div className="row">
        <div className="col-12 col-md-6 mb-xl-5">
          <Sponsored title="Bek" />
        </div>
        <div className="col-12 col-md-6 ">
          <Sponsored title="Miruts" />
        </div>
        <div className="col-12 col-md-6 mb-xl-5">
          <Sponsored title="Nati" />
        </div>
        <div className="col-12 col-md-6">
          <Sponsored title="Nati" />
        </div>
      </div>
    </div>
  );
};

export default AllSponsor;
