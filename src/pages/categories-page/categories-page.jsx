import React, {useEffect, useState} from 'react';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import Cards from '../../components/categories/cards';
import {GET_ALL_CATEGORIES} from '../../apollo/queries/category-queries';
import {useLazyQuery} from '@apollo/client';
import {makeStyles} from '@mui/styles';
import {Backdrop, CircularProgress} from '@mui/material';
import './category-style.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const CategoriesPage = () => {
  const classes = useStyles();
  const [subCatOn, setSubCatOn] = useState(false);
  const [subCat, setSubCat] = useState(null);

  const [getCategories, {loading, error, data}] =
    useLazyQuery(GET_ALL_CATEGORIES);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      <NavBar/>
      <div className="bg-white">
        <div className="container-md categories-container mb-5 pb-5">
          <h3 className="mb-5">Categories</h3>

          {subCatOn ? (
            <div>
              {subCat.sub_categories.map(s => (
                <p>
                  <Link to={`/search/subcat/${s}`} className="text-dark">
                    {s}
                  </Link>
                </p>
              ))}
            </div>
          ) : (
            <div className="row">
              {loading && (
                <Backdrop className={classes.backdrop} open={true}>
                  <CircularProgress color="inherit"/>
                </Backdrop>
              )}

              {data &&
              data.mainCategoryListMany &&
              (data.mainCategoryListMany.length > 0 ? (
                data.mainCategoryListMany.map(category => (
                  <div key={category._id} className="col-6 col-md-4 mb-3">
                    <Cards
                      category={category}
                      setSubCatOn={setSubCatOn}
                      subCatOn={subCatOn}
                      setSubCat={setSubCat}
                    />
                  </div>
                ))
              ) : (
                <div>
                  No categories found <br/>{' '}
                </div>
              ))}
              {error && <div>error: {error}</div>}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CategoriesPage;
