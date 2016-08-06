import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import RecipeImage from './recipe_image';

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class RecipeCard extends Component {
  children(){
    return (
      <div>
        <div className="row">
            <div className="col-xs-6">
              <RecipeImage />
            </div>
            <div className="col-xs-6">
              <div className="row">
                <div className="col-xs-12">
                  <div>Title</div>
                </div>
                <div className="col-xs-12">
                  <div>Author</div>
                </div>
                <div className="col-xs-12">
                  <div>Description/Instructions</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Paper style={style} zDepth={2} children={this.children()}/>
      </div>
    );
  }
}
