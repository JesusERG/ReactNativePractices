import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import useRefImplementation from '../screens/UseRefImplementation';
import ClassComponentImplementation from '../screens/ClassComponentImplementation';
import CounterScreen from '../screens/CounterScreen';

const Stack = createNativeStackNavigator();

const DynamicStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="useRef" component={useRefImplementation} />
      <Stack.Screen
        name="ClassComponents"
        component={ClassComponentImplementation}
      />
      <Stack.Screen name="CounterScreen" component={CounterScreen} />
    </Stack.Navigator>
  );
};

export default DynamicStackNavigation;
