import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {BorderlessButton, BaseButton } from 'react-native-gesture-handler';


export function HomeButton({ navigation }) {
    return (
        <BaseButton onPress={ () => navigation.goBack() } style={ styles.button }>
            <View accessible style={ styles.button }>
                <Image style={styles.icon} source={require('./../utils/icons/home_icon.png')}/>
            </View>
        </BaseButton>
    )
}

export function ContentButton({ toggleShowPicture, showPicture }) {
    console.log(showPicture);
    return(
        <BaseButton onPress={ toggleShowPicture } style={ styles.button }>
            <View accessible style={styles.button}>
                {
                    showPicture ? 
                        <Image style={ styles.icon } source={ require('./../utils/icons/picture_icon.png') } />
                        :
                        <Image style={ styles.icon } source={ require('./../utils/icons/text_icon.png') } />
                }
            </View>
        </BaseButton>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
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

// export { HomeButton, ContentButton }