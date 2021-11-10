import React, {useEffect} from "react";
import NavBar from "../../components/navbar/navBar";
import Footer from "../../components/footer/footer";
import Box from "@mui/material/Box";
import {useParams} from "react-router";
import {Container, Typography} from "@mui/material";
import appStyles from "../../app-styles";
import {Link} from "react-router-dom";
import BackButton from "../../components/back-button/back-button";
import SearchPaper from "../../components/home-page/search-bar/search-paper";

const SubCategories = (props) => {
  const classes = appStyles();
  const {name} = useParams();

  useEffect(() => {
  }, [])

  return (
    <div>
      <NavBar/>
      <Box my={5}/>
      <Container maxWidth="lg" sx={{ mt: '100px' }}>
        <BackButton  />
      </Container>

      <Container maxWidth="lg">
        <Typography variant="h6" my={3}>
          {name}
        </Typography>
      </Container>
      {/*{searchLoading && (*/}
      {/*  <Box my={5} py={5}>*/}
      {/*    <PreLoader />*/}
      {/*  </Box>*/}
      {/*)}*/}

      <Box>
        {/*{subCat.sub_categories.map((s, index) => (*/}
        {/*  <p key={index}>*/}
        {/*    <Link to={`/search/subcat/${s}`} className={classes.link}>*/}
        {/*      {s}*/}
        {/*    </Link>*/}
        {/*  </p>*/}
        {/*))}*/}
      </Box>

      <Box my={5}/>
      <Footer/>
    </div>
  );
}

export default SubCategories;