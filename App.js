// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/Menu';
import Features from './src/Features';
import MultiplayerEasyGame from './src/MultiplayerEasyGame';
import MultiplayerMediumGame from './src/MultiplayerMediumGame';
import MultiplayerHardGame from './src/MultiplayerHardGame';
import SoloEasyGame from './src/SoloEasyGame';
import SoloMediumGame from './src/SoloMediumGame';
import SoloHardGame from './src/SoloHardGame';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Bu satır ile tüm başlıkları gizleyebilirsiniz
        }}
      >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Features" component={Features} />
        <Stack.Screen name="MultiplayerEasyGame" component={MultiplayerEasyGame} />
        <Stack.Screen name="MultiplayerMediumGame" component={MultiplayerMediumGame} />
        <Stack.Screen name="MultiplayerHardGame" component={MultiplayerHardGame} />
        <Stack.Screen name="SoloEasyGame" component={SoloEasyGame} />
        <Stack.Screen name="SoloMediumGame" component={SoloMediumGame} />
        <Stack.Screen name="SoloHardGame" component={SoloHardGame} />



        {/* Diğer sayfaları buraya ekleyin */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
