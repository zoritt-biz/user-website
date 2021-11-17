import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/client';

import {Alert, Box} from '@mui/material';

import {GET_BUSINESS_DETAIL} from '../../apollo/queries/business-queries';

import Detail from '../../components/detail/detail';
import PreLoader from '../../components/preloader/preloader';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import detailPageStyles from "./detail-page-styles";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {GET_POP_UP} from "../../apollo/queries/pop-up-queries";

const DetailPage = props => {
  const classes = detailPageStyles();
  const id = props.match.params.id;
  //fetch id from url and useQuery
  const [getBusiness, {loading, data, error}] = useLazyQuery(GET_BUSINESS_DETAIL);
  const [getPopUp, {loading: popUpLoading, data: popUpData, error: popUpError}] = useLazyQuery(GET_POP_UP);

  const [openAd, setOpenAd] = useState(true);

  useEffect(() => {
    getBusiness({variables: {id: id}});
  }, [getBusiness, id]);

  useEffect(() => {
    if(data){
      if(data.businessById){
        console.log("Here")
        console.log(data.businessById.categories[0].name)
        getPopUp({
          variables: {
            category: data.businessById.categories[0].name
          }
        })
      }
    }
  }, [data]);

  return (
    <Box position="relative" p={0} m={0}>
      <NavBar/>

      {loading && (
        <Box my={5} py={5}>
          <Box my={5} py={5}/>
          <PreLoader/>
        </Box>
      )}

      {data && data.businessById && (
        <Detail key={data.businessById._id} business={data.businessById}/>
      )}
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

      {console.log(popUpData)}
      {openAd && popUpData && popUpData.popUpOne && (
        <Box
          p={1} style={{
          width: "100%",
        }}
          position="fixed"
          bottom={0}
        >
          <Box
            className={classes.boxStyles}
          >
            <Box
              className="ad-cont"
              width="100%"
              overflow="hidden"
              position="relative"
              sx={{mt: '66px'}}
            >
              <Box
                position="absolute"
                right={0}
                style={{
                  backgroundColor: "white",
                  zIndex: "1000",
                  borderRadius: "50%"
                }}
              >
                <IconButton
                  onClick={() => setOpenAd(false)}
                >
                  <Close/>
                </IconButton>
              </Box>
              <Box className="slideshowSlider ad" position="absolute">
                <img
                  src={popUpData.popUpOne.image}
                  alt="business_picture"
                  className="ad-pic"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailPage;
