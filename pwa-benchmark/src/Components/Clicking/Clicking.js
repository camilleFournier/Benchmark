import React from 'react';
import Header from '../Header/Header';

import { TextItem, PictureItem } from './../Item/Item';

import './Clicking.css';

class Clicking extends React.Component {
    state = {
      index: 1,
      maxIndex: 20,
      showPicture: false,
    }

    changeItem = () => {
      const newIndex = ((this.state.index) % (this.state.maxIndex)) + 1;
      console.log(newIndex);
      this.setState({ index: newIndex});
    }

    changeContent = () => {
      this.setState({ showPicture: !this.state.showPicture });
    }

    render() {
        return (
          <div className="clicking">
            <Header title="Clicking" picture={this.state.showPicture} changeContent={this.changeContent}/>
            <div className="clickable" onClick={this.changeItem}>
              { this.state.showPicture ? 
                <PictureItem index={this.state.index} />
                :
                <TextItem index={this.state.index} />
              } 
              
            </div>
          </div>
        );
    }
}

export default Clicking