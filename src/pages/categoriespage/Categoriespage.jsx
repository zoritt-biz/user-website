import React from 'react';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';

const CategoriesPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Categories />
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;
