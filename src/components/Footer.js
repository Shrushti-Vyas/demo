import React from 'react';
import { Image, Text, View, FlatList, StyleSheet } from 'react-native';

const imageList = [{
    image: require('../assests/image1.png')
},
{
    image: require('../assests/image2.png')
},
{
    image: require('../assests/image3.png')
},
{
    image: require('../assests/image4.png')
},
];

const Footer = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.spacer} />
                <Text style={styles.title}>You May Also Like</Text>
                <View style={styles.spacer} />
            </View>
            <FlatList
                data={imageList}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imageContainer}>
                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode={'contain'}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    title: { 
        marginHorizontal: 15, 
        marginTop: 10, 
        fontSize: 16, 
        fontWeight: 'bold', 
    },
    spacer: { 
        marginTop: 10, 
        borderWidth: 1, 
        borderColor: 'gray', 
        width: '100%', 
    },
    imageContainer: { 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
    },
    image: { 
        height: 102,
        marginTop: 5, 
        borderColor: 'black', 
        borderWidth: 1 ,
        aspectRatio: 16/9,
    },
});