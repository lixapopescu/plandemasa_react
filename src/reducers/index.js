import { combineReducers } from 'redux';

import LandingPageOptionsReducer from './reducer_landing_page_options';
import CurrentRecipeReducer from './reducer_recipe_current';

const rootReducer = combineReducers({
  landingPage: LandingPageOptionsReducer,
  currentRecipe: CurrentRecipeReducer
});

export default rootReducer;
