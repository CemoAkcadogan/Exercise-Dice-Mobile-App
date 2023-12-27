import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button, Card, Title, TextInput } from 'react-native-paper';

const MultiplayerEasyGame = ({ navigation }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1DiceValue, setPlayer1DiceValue] = useState(null);
  const [player2DiceValue, setPlayer2DiceValue] = useState(null);
  const [winnerName, setWinnerName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [canRollDice, setCanRollDice] = useState(true);

  const rollDice = (player) => {
    const newDiceValue = Math.floor(Math.random() * 6) + 1;

    if (player === 1) {
      setPlayer1DiceValue(newDiceValue);
    } else {
      setPlayer2DiceValue(newDiceValue);
    }

    setCanRollDice(false);
  };

  const determineWinnerAndExercise = () => {
    if (player1DiceValue !== null && player2DiceValue !== null) {
      if (player1DiceValue === player2DiceValue) {
        // Eğer zarlar eşit gelirse, tekrar zar atılabilir veya başka bir işlem yapılabilir.
        alert('Zarlar eşit. Tekrar zar atınız.');
        setCanRollDice(true);
        return;
      }

      const minDiceValue = Math.min(player1DiceValue, player2DiceValue);

      if (minDiceValue === player1DiceValue) {
        setWinnerName(player1Name);
      } else {
        setWinnerName(player2Name);
      }

      setCurrentStep(currentStep + 1);
    }
  };

  const rollExerciseDice = (winner) => {
    const exerciseTypes = [
      'Jumping Jacks (Mekik Atlayışı)',
      'Duvara Dayalı Şınav',
      'Yerinde Koşu',
      'Mekik',
      'Diz Kaldırma',
      'Plank (Düz Durma)',
    ];

    const durations = ['30 saniye', '60 saniye', '90 saniye', '10 tekrar', '30 tekrar', 'free'];

    const randomExerciseType = exerciseTypes[Math.floor(Math.random() * exerciseTypes.length)];
    const randomDuration = durations[Math.floor(Math.random() * durations.length)];

    setExerciseType(randomExerciseType);
    setDuration(randomDuration);

    setCurrentStep(currentStep + 1);
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      if (player1Name && player2Name) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Lütfen her iki oyuncunun ismini de giriniz.');
      }
    } else if (currentStep === 2 && player1Name) {
      setCurrentStep(currentStep + 1);
      setCanRollDice(true); // Burada setCanRollDice'ı true yapalım.
    } else if (currentStep === 3 && player2Name) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4) {
      determineWinnerAndExercise();
    } else if (currentStep === 5) {
      setCanRollDice(true);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../images/rolldice_background.png')} style={styles.backgroundImage}>
        <Card>
          <Card.Content>
            <Title>Multiplayer Easy Game</Title>
            {currentStep === 1 && (
             <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: 300 }}>
              <TextInput
              label="1. Oyuncu İsim"
               value={player1Name}
              onChangeText={(text) => setPlayer1Name(text)}
              style={{ marginBottom: 10 }}
    />
              <TextInput
              label="2. Oyuncu İsim"
              value={player2Name}
              onChangeText={(text) => setPlayer2Name(text)}
              style={{ marginBottom: 10 }}
    />
            <Button
            onPress={handleContinue}
            mode="contained"
            style={{ backgroundColor: '#004aad' }}
            >
            Devam Et
            </Button>
          </View> 
          )}
           {currentStep === 2 && player1Name && (
  <View>
    <Text>{player1Name}, kimin egzersiz yapacağını belirlemek için zar atınız.</Text>
    {canRollDice && (
      <Button onPress={() => rollDice(1)}>Zar At</Button>
    )}
    {!canRollDice && (
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Atılan Zar: {player1DiceValue}</Text>
    )}
    {!canRollDice && (
      <Button
        onPress={handleContinue}
        mode="contained"
        style={{ backgroundColor: '#004aad', marginTop: 10 }}
      >
        Devam Et
      </Button>
    )}
  </View>
)}
{currentStep === 3 && player2Name && (
  <View>
    <Text>{player2Name}, kimin egzersiz yapacağını belirlemek için zar atınız.</Text>
    {canRollDice && (
      <Button onPress={() => rollDice(2)}>Zar At</Button>
    )}
    {!canRollDice && (
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Atılan Zar: {player2DiceValue}</Text>
    )}
    {!canRollDice && (
      <Button
        onPress={handleContinue}
        mode="contained"
        style={{ backgroundColor: '#004aad', marginTop: 10 }}
      >
        Devam Et
      </Button>
    )}
  </View>
)}
{currentStep === 4 && (
  <View>
    <Text>{winnerName}, egzersiz için zar atın.</Text>
    {canRollDice && (
      <Button onPress={() => rollDice(1)}>Zar At</Button>
    )}
    {!canRollDice && (
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Atılan Zar: {player1DiceValue}</Text>
    )}
    {!canRollDice && (
      <Button
        onPress={() => rollExerciseDice(winnerName)}
        mode="contained"
        style={{ backgroundColor: '#004aad', marginTop: 10 }}
      >
        Devam Et
      </Button>
    )}
  </View>
)}
{currentStep === 5 && (
  <View>
    <Text>Süre ve tekrar için zar atın.</Text>
    {canRollDice && (
      <Button onPress={() => rollDice(2)}>Zar At</Button>
    )}
    {!canRollDice && (
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Atılan Zar: {player2DiceValue}</Text>
    )}
    {!canRollDice && (
      <Button
        onPress={() => navigation.goBack()}
        mode="contained"
        style={{ backgroundColor: '#004aad', marginTop: 10 }}
      >
        Geri Dön
      </Button>
    )}
  </View>
)}
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MultiplayerEasyGame;
