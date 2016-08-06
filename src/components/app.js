import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Account from 'material-ui/svg-icons/action/account-circle';

export default class App extends Component {
  handleBackClick(event){
    console.log('back');
    event.preventDefault();
    // this.context.router.transitionTo('/');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="P"
            iconElementLeft={<IconButton><BackArrow/></IconButton>}
            iconElementRight={<IconButton><Account/></IconButton>}
            onLeftIconButtonTouchTap={this.handleBackClick.bind(this)}
            onTitleTouchTap={this.handleBackClick.bind(this)}/>
         {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
