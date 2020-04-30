import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.view}>
        <Text style={styles.intro}>
          This app was developped within a Master Thesis aiming to compare
          the rendering performance of PWA and Android applications. The
          comparison focuses on two rendering processes: scrolling and
          changing the content to display (here as clicking).
        </Text>
        <Text style={styles.question}>Which one do you want to test ?</Text>
        <RectButton
          style={ styles.button }
          onPress={ () => navigation.navigate('Scrolling') }>
          <Text style={ styles.buttonText }>Scrolling</Text>
        </RectButton>
        <RectButton
          style={ styles.button }
          onPress={ () => navigation.navigate('Clicking') }>
          <Text style={ styles.buttonText }>Clicking</Text>
        </RectButton>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Scrolling')}>
          <Text style={styles.buttonText}>Scrolling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Clicking')}>
          <Text style={styles.buttonText}>Clicking</Text>
        </TouchableOpacity> */}
      </View>
    );

}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
    },
    intro: {
        textAlign: "justify",
        marginHorizontal: 50,
        marginTop: 50,
    },
    question: {
        textAlign: "justify",
        marginHorizontal: 50,
        marginTop: 10,
        marginBottom: 40,
    },
    button: {
        padding: 10,
        margin: 15,
        backgroundColor:"darkorchid",
        width: "auto",
        borderRadius: 5,
        elevation: 5,
    },
    buttonText: {
        textTransform: 'uppercase',
        color: "white",
    }

})