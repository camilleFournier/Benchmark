import React from "react";
import { Link } from "react-router-dom";
import { PictureItem, TextItem } from './../Item/Item';
import Header from '../Header/Header';
import LoremIpsum from '../../utils/loremipsum';

import './Scrolling.css';

class Scrolling extends React.Component {
  state = {
    nbPictures: 20,
    listPictures: [],
    listText: [],
    showPicture: false,
  }; 

  componentDidMount() {
    this.setState({ listPictures: this.listItems(), listText: this.listText() });
  }

  changeContent = () => {
    this.setState({ showPicture: !this.state.showPicture });
  };

  listItems() {
    const list = [];
    for (var i = 1; i <= this.state.nbPictures; i++) {
      list.push(<PictureItem index={i} />);
    }
    return list;
  }

  listText() {
    const list = [];
    for (var i = 1; i <= LoremIpsum.length; i++) {
      list.push(<TextItem index={i} />);
    }
    return list;
  }

  render() {
    return (
      <div className="scrolling">
        <Header
          title="Scrolling"
          picture={this.state.showPicture}
          changeContent={this.changeContent}
        />
        <div className="scrollable">
          { this.state.showPicture ? this.state.listPictures : this.state.listText }
        </div>
      </div>
    );
  }
}

export default Scrolling;
