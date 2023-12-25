// src/Menu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/rolldice_menu_background.png')} style={styles.backgroundImage}>
        <Text style={styles.text}>Arkadaşlarınızla eğlenin ve gelişin</Text>
        <Text style={styles.texttwo}>Eğlenceli rekabetin tek adresi!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Features')}
        >
          <Text style={styles.buttonText}>Spora Başla</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  texttwo:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 100, // Sayfanın altından uzaklık
    right: 20, // Sağdan uzaklık
    padding: 16,
    backgroundColor: '#4b55a9',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
});

export default Menu;
