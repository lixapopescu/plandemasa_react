import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

// import {List, ListItem} from 'material-ui/List';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';

import { landingPageSelectOption } from '../actions/landing_page_select_option';

class LandingPageOptionList extends Component {
  renderList(){
    return this.props.optionList.map(option => {
      return (
        // <ListItem key={option.order} primaryText={option.title} leftIcon={<ContentInbox/>} className="optionFillPage"/>
        <div key={option.order} className="fillPageItem">
          <Link to={option.route}>
            {option.title}
          </Link>
        </div>
      );
    });
  }

  render(){
    return (<div className="fillPageContainer">{this.renderList()}</div>);
  }
}

function mapStateToProps(state){
  return {
    optionList: state.landingPage //.optionList
  };
}

export default connect(mapStateToProps, {landingPageSelectOption})(LandingPageOptionList);
