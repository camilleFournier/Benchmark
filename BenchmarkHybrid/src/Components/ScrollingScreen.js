import React, { useState, useEffect } from 'react';
import {Text, View, FlatList} from 'react-native';
import {HomeButton, ContentButton} from './HeaderOptions';
import { TextItem, PictureItem } from './Items';
import LoremIpsum from './../utils/loremipsum';

export default class ScrollingScreen extends React.Component {
  state = {
    nbPictures: 50,
    listData: [],
    nbItems: LoremIpsum.length,
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

  listItems(showPicture) {
    const list= [];
    const length = showPicture ? this.state.nbPictures : LoremIpsum.length;
    for (var i = 0; i < length; i++) {
      list.push({ index: i });
    };
    console.log(length);
    this.setState({ listData: list, nbItems: length });
    return list;
  }
  toggleContent = () => {
    const showPicture = !this.state.showPicture
    this.setState({ showPicture });
    this.listItems(showPicture);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.listData}
          extraData={this.state.nbItems}
          renderItem={(item) => <Item picture={this.state.showPicture} index={item.item.index}/>}
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