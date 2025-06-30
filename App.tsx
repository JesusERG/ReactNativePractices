/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import DynamicStackNavigation from './src/navigation/DynamicStackNavigation';
import { DisplayContext } from './src/context/DisplayContext';
import { useState } from 'react';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <DisplayContext.Provider value={{ signedIn, setSignedIn }}>
      <NavigationContainer>
        <DynamicStackNavigation />
      </NavigationContainer>
    </DisplayContext.Provider>
  );
}

export default App;
