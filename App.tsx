/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

function App(): JSX.Element {
  const[isHide,setIsHide] = useState(false);

  const list = [{
    title: 'Stranger Things 1',
    duration: '2017 | 02:03:30',
  },
  {
    title: 'Stranger Things 2',
    duration: '2017 | 0:43:30',
  },
  {
    title: 'Stranger Things 3zs',
    duration: '2017 | 0:59:30',
  },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        ListHeaderComponent={() => <Header />}
        renderItem={({ item }) => (
          <>
            <View style={styles.textContainer}>
              <Image
                source={require('./src/assests/image1.png')}
                style={styles.image}
                resizeMode={'contain'}
              />
              <View>
                <Text>{item.title}</Text>
                <Text>{item.duration}</Text>
              </View>
              <Image
                source={require('./src/assests/dots.png')}
                style={styles.dot}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.spacer} />
          </>
        )
        }
        ListFooterComponent={() => <Footer />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  image: {
    height: 100,
    width: 150,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  dot: {
    height: 25,
    width: 25,
    marginTop: 5,
  },
  spacer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
  },
});

export default App;
