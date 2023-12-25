// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/Menu';
import Features from './src/Features';
import Diceroll from './src/Diceroll';

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
        <Stack.Screen name="Diceroll" component={Diceroll} />
        {/* Diğer sayfaları buraya ekleyin */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
