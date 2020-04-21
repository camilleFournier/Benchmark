import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import TextFields from "@material-ui/icons/TextFields";
import Image from "@material-ui/icons/Image";
import { withRouter } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  goHome = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <AppBar position="sticky" color="primary">
        <Toolbar className="header">
          <IconButton
            aria-label="home"
            className="btn-home"
            color="primary"
            onClick={this.goHome}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <h1 className="title">{this.props.title}</h1>
          <IconButton
            className="switch-content"
            color="primary"
            onClick={this.props.changeContent}
          >
            {this.props.picture ? (
              <Image fontSize="large" />
            ) : (
              <TextFields fontSize="large" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);