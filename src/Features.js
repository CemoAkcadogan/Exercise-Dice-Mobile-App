import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button, Card, Title, RadioButton } from 'react-native-paper';

const Features = ({ navigation }) => {
  const [playerCount, setPlayerCount] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  const startGame = () => {
    if (!playerCount || !difficulty) {
      alert('Lütfen oyuncu sayısı ve zorluk seviyelerinden ikisinide işaretleyin.');
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
        <Card style={styles.menuContainer}>
          <Card.Content>
            <Title style={styles.title}>Son Bir Adım Kaldı !</Title>

            <Text style={styles.subtitle}>Oyuncu sayısı Seçiniz</Text>
            <RadioButton.Group onValueChange={(value) => setPlayerCount(value)} value={playerCount}>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="1 Kişi" value="1" />
                <RadioButton.Item label="2 Kişi" value="2" />
              </View>
            </RadioButton.Group>

            <Text style={styles.subtitle}>Zorluk Seviyesi Seçiniz</Text>
            <RadioButton.Group onValueChange={(value) => setDifficulty(value)} value={difficulty}>
              <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Kolay" value="easy" />
                <RadioButton.Item label="Orta" value="medium" />
                <RadioButton.Item label="Zor" value="hard" />
              </View>
            </RadioButton.Group>

            <Button mode="contained" onPress={startGame} style={styles.button}>
              Oyunu Başlat
            </Button>
          </Card.Content>
        </Card>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  radioButtonContainer: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#004aad',
  },
});

export default Features;
