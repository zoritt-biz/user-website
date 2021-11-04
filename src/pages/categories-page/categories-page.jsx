import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import Cards from '../../components/categories/cards';
import { GET_ALL_CATEGORIES } from '../../apollo/queries/category-queries';
import { useLazyQuery } from '@apollo/client';
import { makeStyles } from '@mui/styles';
import {
  Backdrop,
  CircularProgress,
  Box,
  Alert,
  Typography,
  Container,
} from '@mui/material';
import './category-style.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import PreLoader from '../../components/preloader/preloader';

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
  const [show, setShow] = useState(false);

  const [getCategories, { loading, error, data }] =
    useLazyQuery(GET_ALL_CATEGORIES);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      <NavBar show={show} handleNavbar={handleNavbar} />
      {loading && <PreLoader />}
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {}}
            severity="error"
            variant="filled"
            sx={{ width: '300px', margin: 'auto' }}
          >
            {error.message}
          </Alert>
        </Box>
      )}
      <Box bgcolor="white" onClick={hideNavbar}>
        <Container maxWidth="lg">
          <Box mb={5} pb={5}>
            <h3 className="mb-5">Categories</h3>
            <Typography variant="h5" mb={3}>
              Categories{' '}
            </Typography>

            {subCatOn && (
              <>
                <Box p={1}>
                  <IconButton onClick={() => setSubCatOn(false)}>
                    <Close />
                  </IconButton>
                </Box>
                {subCat.sub_categories.map(s => (
                  <p>
                    <Link to={`/search/subcat/${s}`} className="text-dark">
                      {s}
                    </Link>
                  </p>
                ))}
              </>
            )}

            {data &&
              data.mainCategoryListMany &&
              data.mainCategoryListMany.length > 0 &&
              data.mainCategoryListMany.map(category => (
                <div key={category._id} className="col-6 col-md-4 mb-3">
                  <Cards
                    category={category}
                    setSubCatOn={setSubCatOn}
                    subCatOn={subCatOn}
                    setSubCat={setSubCat}
                  />
                </div>
              ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default CategoriesPage;
