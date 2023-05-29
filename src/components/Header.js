import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require('../assests/image1.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
        <View>
          <Text style={styles.mainTitle}>2017 | English</Text>
          <Text style={styles.subTitle}>Stranger Things</Text>
          <Text style={styles.duration}>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</Text>
        </View>
        <View>
          <View style={styles.spacer} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>See More</Text>
            <Image
              source={require('../assests/Back.png')}
              style={styles.backImage}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.spacer} />
        </View>
      </View>
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  subContainer: { 
    height: 300, 
    width: 400, 
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 10, 
    marginTop: 80, 
    marginLeft: 6, 
    marginBottom: 160,
  },
  image: { 
    height: 300, 
    width: 400, 
  },
  mainTitle: { 
    marginTop: 20, 
    fontWeight: '500', 
  },
  subTitle: {
    marginTop: 5, 
    fontWeight: 'bold', 
    fontSize: 18,
  },
  duration: {
    marginTop: 5, 
    fontWeight: '500',
  },
  spacer: { 
    marginTop: 10, 
    borderWidth: 1, 
    borderColor: 'gray', 
    width: '100%', 
  },
  textContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  text: { 
    marginTop: 5, 
    fontWeight: 'bold', 
    fontSize: 16, 
    fontStyle: 'italic', 
  },
  backImage: { 
    height: 20, 
    width: 20, 
    marginTop: 5, 
    transform: [{ rotate: '90deg' }], 
    tintColor: 'black',
  },
});