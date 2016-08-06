import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class LangingPageOptionList extends Component {
  renderList(){
    return this.props.optionList.map(option => {
      return
        <li key="option.index">
          {option.title}
        </li>
    });
  }

  render(){
    return (<ul>{this.renderList()}</ul>);
  }
}

function mapStateToProps(state){
  return {
    optionList: state.landingPage.optionList
  };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return null; //bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LangingPageOptionList);
