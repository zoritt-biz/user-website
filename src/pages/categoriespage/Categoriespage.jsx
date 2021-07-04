import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import Cards from '../../components/categories/Cards';
import { GET_CATEGORIES } from '../../apollo/queries/category_queries';
import { useLazyQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const CategoriesPage = () => {
  const classes = useStyles();
  const [getCategories, { loading, error, data }] =
    useLazyQuery(GET_CATEGORIES);

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="container-md categories-container">
          <h3 className="mb-3">Categories</h3>
          <div className="row">
            {loading && (
              <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
            {data &&
              data.categoryMany &&
              (data.categoryMany.length > 0 ? (
                <Cards
                  parent={data.categoryMany
                    .map(category => category.parent)
                    .filter(
                      (category, index, array) =>
                        array.indexOf(category) === index
                    )}
                />
              ) : (
                // .map(category => (
                //   <div className="col-6 col-md-4 col-xl-3 mb-3">
                //   </div>
                // ))
                <div>
                  No categories found <br />{' '}
                </div>
              ))}
            {error && <div>error: {error}</div>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;
