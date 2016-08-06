import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
// import RecipeCard from './components/recipe_card';
import LandingPage from './containers/landing_page_option_list';
import RecipeDetail from './components/recipe_detail';
import RecipeCreateNew from './components/recipe_create_new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="reteta_de_azi" component={RecipeDetail} />
    <Route path="reteta_noua" component={RecipeCreateNew} />
  </Route>
);
