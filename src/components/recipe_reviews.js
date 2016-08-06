import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import UploadPhoto from './upload_photo';

class RecipeReviews extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}><h3>Poza ta pentru reteta</h3></Col>
        </Row>
      <UploadPhoto />
      </Grid>
    );
  }
}

export default RecipeReviews;
