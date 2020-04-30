import React, { useState, useEffect} from 'react';
import {Text, View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import { PictureItem, TextItem } from './Items';
import { HomeButton, ContentButton } from './HeaderOptions';


export default class ClickingScreen extends React.Component {
  state={
    index: 0,
    maxIndex: 20,
    showPicture: false,
  }

  componentDidMount(){ this.setHeader(); }
  componentDidUpdate() { this.setHeader(); }

  setHeader = () => {
    this.props.navigation.setOptions({
      headerRight: () => (<ContentButton toggleShowPicture={ this.toggleContent } showPicture={ this.state.showPicture } />),
      headerLeft: () => (<HomeButton navigation={ this.props.navigation } />),
    });
  }

  nextItem = () => {
    const newIndex = ((this.state.index + 1) % (this.state.maxIndex));
    console.log(newIndex);
    this.setState({ index: newIndex });
  }

  toggleContent = () => {
    this.setState({ showPicture: !this.state.showPicture })
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.nextItem} style={{ flex: 1}}>
        <View style={{ flex: 1 }}>
          { this.state.showPicture ? <PictureItem index={this.state.index} /> : <TextItem index={this.state.index} /> }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({

})
