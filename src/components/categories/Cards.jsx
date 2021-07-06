import React from 'react';

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { categoryController } from './categories';

const Cards = ({ parent }) => {
  return parent.map((element, index) => (
    <div key={index} className="col-6 col-md-4 col-xl-3 mb-3">
      <Grid key={index} item>
        <Card className="categories-card" variant="outlined" raised={true}>
          <CardActionArea className="categories-card-area">
            <CardContent>
              {categoryController(element)}
              <Typography
                gutterBottom
                className="d-flex justify-content-center"
                variant="subtitle2"
              >
                {element}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  ));
};

export default Cards;
