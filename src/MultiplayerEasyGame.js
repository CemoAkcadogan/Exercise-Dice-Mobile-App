import React, { useState } from 'react';
import { View, Text } from 'react-native';
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

  const rollDice = (player) => {
    const newDiceValue = Math.floor(Math.random() * 6) + 1;

    if (player === 1) {
      setPlayer1DiceValue(newDiceValue);
    } else {
      setPlayer2DiceValue(newDiceValue);
    }

    setCurrentStep(currentStep + 1);
  };

  const determineWinnerAndExercise = () => {
    const minDiceValue = Math.min(player1DiceValue, player2DiceValue);

    if (minDiceValue === player1DiceValue) {
      setWinnerName(player1Name);
    } else {
      setWinnerName(player2Name);
    }

    setCurrentStep(currentStep + 1);
  };

  const rollExerciseDice = () => {
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
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Card.Content>
          <Title>Multiplayer Easy Game</Title>
          {currentStep === 1 && (
            <View>
              <TextInput
                label="1. Oyuncu İsim"
                value={player1Name}
                onChangeText={(text) => setPlayer1Name(text)}
              />
              <TextInput
                label="2. Oyuncu İsim"
                value={player2Name}
                onChangeText={(text) => setPlayer2Name(text)}
              />
              <Button onPress={() => setCurrentStep(currentStep + 1)}>
                Devam Et
              </Button>
            </View>
          )}
          {currentStep === 2 && (
            <View>
              <Text>{player1Name}, zar atınız</Text>
              <Text style={{ fontSize: 24 }}>{player1DiceValue}</Text>
              <Button onPress={() => rollDice(1)}>Devam Et</Button>
            </View>
          )}
          {currentStep === 3 && (
            <View>
              <Text>{player2Name}, zar atınız</Text>
              <Text style={{ fontSize: 24 }}>{player2DiceValue}</Text>
              <Button onPress={() => rollDice(2)}>Devam Et</Button>
            </View>
          )}
          {currentStep === 4 && (
            <View>
              <Text>En az atan oyuncu isimi.</Text>
              <Text>Üzgünüm ama egzersizi sen yapacaksın...</Text>
              <Text>{winnerName}, egzersiz için zar at.</Text>
              <Button onPress={rollExerciseDice}>Devam Et</Button>
            </View>
          )}
          {currentStep === 5 && (
            <View>
              <Text>Süre, tekrar için zar at.</Text>
              <Text>Sonuç: {exerciseType} - {duration}</Text>
              <Button onPress={() => navigation.goBack()}>Geri Dön</Button>
            </View>
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

export default MultiplayerEasyGame;
