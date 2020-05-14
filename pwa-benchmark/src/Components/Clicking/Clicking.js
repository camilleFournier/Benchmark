import React from 'react';
import Header from '../Header/Header';

import { TextItem, PictureItem } from './../Item/Item';

import './Clicking.css';

class Clicking extends React.Component {
    state = {
      index: 1,
      nbPictures: 50,
      nbText: 20,
      showPicture: false,
    }

    changeItem = () => {
      const maxIndex = this.state.showPicture ? this.state.nbPictures : this.state.nbText;
      const newIndex = ((this.state.index) % (maxIndex)) + 1;
      console.log(newIndex);
      this.setState({ index: newIndex});
    }

    changeContent = () => {
      this.setState({ showPicture: !this.state.showPicture , index: 1});
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