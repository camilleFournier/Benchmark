import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import LoremIpsum from './../utils/loremipsum';

function PictureItem({ index }) {
    // const file = `/../utils/pictures/picture${index+1}.jpg`;
    return (
        <View>
            <Image style={styles.picture} source={pictures[index]} alt="Picture" />
        </View>
    );
}

function TextItem({ index }) {
    return (<Text style={styles.text}>{ LoremIpsum[ index ] }</Text>);
}

const styles = StyleSheet.create({
    picture: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    text: {
        textAlign: 'justify',
        marginHorizontal: 20,
        marginVertical: 10,
    }
})
export { PictureItem, TextItem }

const pictures = [
    require('../utils/pictures/picture1.jpg'),
    require('../utils/pictures/picture2.jpg'),
    require('../utils/pictures/picture3.jpg'),
    require('../utils/pictures/picture4.jpg'),
    require('../utils/pictures/picture5.jpg'),
    require('../utils/pictures/picture6.jpg'),
    require('../utils/pictures/picture7.jpg'),
    require('../utils/pictures/picture8.jpg'),
    require('../utils/pictures/picture9.jpg'),
    require('../utils/pictures/picture10.jpg'),
    require('../utils/pictures/picture11.jpg'),
    require('../utils/pictures/picture12.jpg'),
    require('../utils/pictures/picture13.jpg'),
    require('../utils/pictures/picture14.jpg'),
    require('../utils/pictures/picture15.jpg'),
    require('../utils/pictures/picture16.jpg'),
    require('../utils/pictures/picture17.jpg'),
    require('../utils/pictures/picture18.jpg'),
    require('../utils/pictures/picture19.jpg'),
    require('../utils/pictures/picture20.jpg'),
    require('../utils/pictures/picture21.jpg'),
    require('../utils/pictures/picture22.jpg'),
    require('../utils/pictures/picture23.jpg'),
    require('../utils/pictures/picture24.jpg'),
    require('../utils/pictures/picture25.jpg'),
    require('../utils/pictures/picture26.jpg'),
    require('../utils/pictures/picture27.jpg'),
    require('../utils/pictures/picture28.jpg'),
    require('../utils/pictures/picture29.jpg'),
    require('../utils/pictures/picture30.jpg'),
    require('../utils/pictures/picture31.jpg'),
    require('../utils/pictures/picture32.jpg'),
    require('../utils/pictures/picture33.jpg'),
    require('../utils/pictures/picture34.jpg'),
    require('../utils/pictures/picture35.jpg'),
    require('../utils/pictures/picture36.jpg'),
    require('../utils/pictures/picture37.jpg'),
    require('../utils/pictures/picture38.jpg'),
    require('../utils/pictures/picture39.jpg'),
    require('../utils/pictures/picture40.jpg'),
    require('../utils/pictures/picture41.jpg'),
    require('../utils/pictures/picture42.jpg'),
    require('../utils/pictures/picture43.jpg'),
    require('../utils/pictures/picture44.jpg'),
    require('../utils/pictures/picture45.jpg'),
    require('../utils/pictures/picture46.jpg'),
    require('../utils/pictures/picture47.jpg'),
    require('../utils/pictures/picture48.jpg'),
    require('../utils/pictures/picture49.jpg'),
    require('../utils/pictures/picture50.jpg'),
];