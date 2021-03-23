import React from 'react';
import Sponsored from './Sponsored';

const AllSponsor = () => {
  return (
    <div className="px-4 mt-5">
      <h3 className="mb-3">Sponsored Posts</h3>
      <Sponsored title="Bek" />
      <Sponsored title="Miruts" />
      <Sponsored title="Nati" />
    </div>
  );
};

export default AllSponsor;
