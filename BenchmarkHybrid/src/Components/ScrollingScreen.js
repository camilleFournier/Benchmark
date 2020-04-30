import React, { useState, useEffect } from 'react';
import {Text, View, FlatList} from 'react-native';
import {HomeButton, ContentButton} from './HeaderOptions';
import { TextItem, PictureItem } from './Items';
import LoremIpsum from './../utils/loremipsum';

export default class ScrollingScreen extends React.Component {
  state = {
    nbPictures: 20,
    listData: [],
    showPicture: false,
  };

  componentDidMount() { this.setHeader(); this.listItems(); }
  componentDidUpdate() { this.setHeader(); }

  setHeader = () => {
    this.props.navigation.setOptions({
      headerRight: () => (<ContentButton toggleShowPicture={ this.toggleContent } showPicture={ this.state.showPicture } />),
      headerLeft: () => (<HomeButton navigation={ this.props.navigation } />),
    });
  }

  listItems() {
    const list= [];
    const length = this.state.showPicture ? this.state.nbPictures : LoremIpsum.length;
    for (var i = 0; i < length; i++) {
      list.push({ index: i });
    };
    this.setState({ listData: list });
    return list;
  }
  toggleContent = () => {
    this.setState({ showPicture: !this.state.showPicture });
    this.listItems();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.listData}
          extraData={this.state.updated}
          renderItem={(items) => <Item picture={this.state.showPicture} index={item.index}/>}
          keyExtractor={(item) => `${item.index}`}/>
      </View>
    )
  }
 
}

function Item(props) {
  return (
    props.picture ? <PictureItem index={ props.index } /> : <TextItem index={ props.index } />
  )

}