import React, {useEffect, useState} from 'react';
import Cards from '../../components/categories/cards';
import {GET_ALL_CATEGORIES} from '../../apollo/queries/category-queries';
import {useLazyQuery} from '@apollo/client';
import {Alert, Box, Container, Typography} from '@mui/material';
import './category-style.css';
import PreLoader from '../../components/preloader/preloader';
import appStyles from '../../app-styles';
import Grid from '@mui/material/Grid';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';
import BackButton from '../../components/back-button/back-button';

const CategoriesPage = () => {
  const classes = appStyles();
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
      <Box mt={5} pt={5} bgcolor="white">
        <Container maxWidth="lg">
          <BackButton/>
          <Box mb={5} pb={5}>
            <Typography variant="h5" mb={3}>
              Categories
            </Typography>

            {loading && <PreLoader/>}

            <Grid container spacing={2}>
              {data &&
              data.mainCategoryListMany &&
              data.mainCategoryListMany.length > 0 &&
              data.mainCategoryListMany.map(category => (
                <Grid key={category._id} item xs={6} md={4}>
                  <Cards
                    category={category}
                    setSubCatOn={setSubCatOn}
                    subCatOn={subCatOn}
                    setSubCat={setSubCat}
                  />
                </Grid>
              ))}
            </Grid>
            {/*)}*/}
          </Box>
        </Container>
      </Box>
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {error.message}
          </Alert>
        </Box>
      )}
      <Footer/>
    </>
  );
};

export default CategoriesPage;
