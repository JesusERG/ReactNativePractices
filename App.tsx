/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import DynamicStackNavigation from './src/navigation/DynamicStackNavigation';

function App() {
  return (
    <NavigationContainer>
      <DynamicStackNavigation />
    </NavigationContainer>
  );
}

export default App;
