import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import useRefImplementation from '../screens/UseRefImplementation';

const Stack = createNativeStackNavigator();

const DynamicStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="useRef" component={useRefImplementation} />
    </Stack.Navigator>
  );
};

export default DynamicStackNavigation;
