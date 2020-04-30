import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Components/HomeScreen';
import ClickingScreen from './src/Components/ClickingScreen';
import ScrollingScreen from './src/Components/ScrollingScreen';

import { StyleSheet, View } from 'react-native';

import { BorderlessButton, BaseButton } from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    showPicture: false,
  }

  HomeIcon = () => {
    return (
    <Image style={ styles.icon } source={ require('./src/utils/icons/home_icon.png') } />)
  }

  ContentIcon = () => {
    return (this.state.showPicture ?
      <Image style={ styles.icon } source={ require('./src/utils/icons/picture_icon.png') } />
      :
      <Image style={ styles.icon } source={ require('./src/utils/icons/text_icon.png') } />
    );
  }

  ContentButton = () => {
    return(
      <BaseButton onPress={this.changeContent}>
        <View accessible style={{ padding: 10}}>
          { this.ContentIcon() }
        </View>
      </BaseButton>
    )
  }

  changeContent = () => {
    this.setState({ showPicture: !this.state.showPicture });
  }
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: styles.header, headerTitleStyle: styles.headerTitle, headerTitleAlign: "center" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Benchmark Hybrid',
              headerTitleAlign: 'left',
            }}
          />
          <Stack.Screen
            name="Clicking"
            component={ClickingScreen}
            initialParams={{ showPicture: this.state.showPicture }}
            // options={{
            //   headerTitleAlign: 'center',
              // headerBackImage: this.HomeIcon,
              // headerLeftContainerStyle: { padding: 10},
              // headerStyle: styles.header,
              // headerTitleStyle: styles.headerTitle,
              // headerRight: this.ContentButton,
            // }}
          />
          <Stack.Screen
            name="Scrolling"
            component={ScrollingScreen}
            initialParams={ { showPicture: this.state.showPicture }}
            // options={{
            //   headerTitleAlign: 'center',
              // headerBackImage: this.HomeIcon,
              // headerLeftContainerStyle: { padding: 10 },
              // headerStyle: styles.header,
              // headerTitleStyle: styles.headerTitle,
              // headerRight: this.ContentButton,
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "darkorchid",
    padding: 50,
  },
  header: {
    backgroundColor: 'darkorchid',
  },
  headerTitle: {
    color: "white",
  },
  icon: {
    height: 36,
    width: 36,
    tintColor: "white",
  },
  
});
