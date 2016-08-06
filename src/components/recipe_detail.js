import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import RecipeAbout from './recipe_about';
import RecipeReviews from './recipe_reviews'

export default class RecipeDetails extends Component{
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };
  }

  handleChange = (value) => {
    this.setState({ slideIndex: value});
  };

  render(){
    // var {recipe} = this.props;
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex} >
          <Tab label="Despre" value={0} className="capitalLetter"/>
          <Tab label="Ingred." value={1} className="capitalLetter" />
          <Tab label="Instr." value={2} className="capitalLetter" />
          <Tab label="Opinii" value={3} className="capitalLetter" />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >
          <div>
            <RecipeAbout />
          </div>
          <div>
            Ingrediente
          </div>
          <div>
            Instrauctiuni
          </div>
          <div>
            <RecipeReviews />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return {
//     recipe: state.currentRecipe //.optionList
//   };
// }
//
// export default connect(mapStateToProps, null)(RecipeDetails);
