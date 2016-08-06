import React, {Component} from 'react';
import UploadPhoto from './upload_photo';
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class RecipeCreateNew extends Component{
  render(){
    return(
      <Grid>
        <Row>
          <Col xs={12}><h3>Reteta noua</h3></Col>
        </Row>
      <UploadPhoto />
      </Grid>
    );
  }
}
