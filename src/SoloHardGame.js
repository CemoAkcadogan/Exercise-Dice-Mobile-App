// SoloHardGame.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const SoloHardGame = () => {
  const [diceResult, setDiceResult] = useState(null);

  const rollDice = () => {
    // Zar atma işlemi
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceResult(randomValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Solo Hard Game</Text>

      <Button title="Zar At" onPress={rollDice} />

      {diceResult !== null && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18 }}>Atılan Zar: {diceResult}</Text>
        </View>
      )}
    </View>
  );
};

export default SoloHardGame;