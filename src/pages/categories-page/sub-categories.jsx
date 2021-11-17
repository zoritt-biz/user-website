import React, {useEffect} from "react";
import NavBar from "../../components/navbar/navBar";
import Footer from "../../components/footer/footer";
import Box from "@mui/material/Box";
import {useParams} from "react-router";
import {Container, Typography} from "@mui/material";
import appStyles from "../../app-styles";
import BackButton from "../../components/back-button/back-button";
import {useLazyQuery} from "@apollo/client";
import {GET_SUB_CATEGORIES} from "../../apollo/queries/category-queries";
import {Link} from "react-router-dom";
import PreLoader from "../../components/preloader/preloader";

const SubCategories = (props) => {
  const classes = appStyles();
  const {name} = useParams();

  const [getSubCategories, {loading, error, data}] =
    useLazyQuery(GET_SUB_CATEGORIES);

  useEffect(() => {
    getSubCategories({
      variables: {
        name
      }
    })
  }, [])

  return (
    <div>
      <NavBar/>
      <Box my={5}/>
      <Container maxWidth="lg" sx={{mt: '100px'}}>
        <BackButton/>
      </Container>

      <Container maxWidth="lg">
        <Typography variant="h6" my={3}>
          {name}
        </Typography>
      </Container>

      {loading && (
        <Box my={5} py={5}>
          <PreLoader/>
        </Box>
      )}

      <Box p={3}>
        {data &&
        data.mainCategoryListOne &&
        data.mainCategoryListOne.sub_categories.map((s, index) => (
          <p key={index}>
            <Link to={`/search/subcat/${s}`} className={classes.link}>
              {s}
            </Link>
          </p>
        ))}
      </Box>

      <Box my={5}/>
      <Footer/>
    </div>
  );
}

export default SubCategories;