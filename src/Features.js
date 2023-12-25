// Features.js
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Alert, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Features = ({ navigation }) => {
  const [playerCount, setPlayerCount] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  const startGame = () => {
    if (!playerCount || !difficulty) {
      Alert.alert('Uyarı', 'Lütfen oyuncu sayısı ve zorluk seviyesi seçin.');
      return;
    }

    // Seçilen değerlere göre farklı sayfalara yönlendirme
    if (playerCount === '1') {
      if (difficulty === 'easy') {
        navigation.navigate('SoloEasyGame');
      } else if (difficulty === 'medium') {
        navigation.navigate('SoloMediumGame');
      } else if (difficulty === 'hard') {
        navigation.navigate('SoloHardGame');
      }
    } else if (playerCount === '2') {
      if (difficulty === 'easy') {
        navigation.navigate('MultiplayerEasyGame');
      } else if (difficulty === 'medium') {
        navigation.navigate('MultiplayerMediumGame');
      } else if (difficulty === 'hard') {
        navigation.navigate('MultiplayerHardGame');
      }
    }
  };

  return (
    <ImageBackground source={require('../images/rolldice_background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <Text style={styles.title}>Oyun Ayarları</Text>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Oyuncu Sayısı:</Text>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{
                label: 'Seçin...',
                value: null,
              }}
              onValueChange={(value) => setPlayerCount(value)}
              items={[
                { label: '1 Kişi', value: '1' },
                { label: '2 Kişi', value: '2' },
              ]}
            />
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Zorluk Seviyesi:</Text>
            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={{
                label: 'Seçin...',
                value: null,
              }}
              onValueChange={(value) => setDifficulty(value)}
              items={[
                { label: 'Kolay', value: 'easy' },
                { label: 'Orta', value: 'medium' },
                { label: 'Zor', value: 'hard' },
              ]}
            />
          </View>

          <Button style={styles.Button} title="Oyunu Başlat" onPress={startGame} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buton:{
  backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
    padding: 50,
    marginTop: 20,
  },
  pickerLabel: {
    fontSize: 50,
    marginBottom: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default Features;
