import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import useRefImplementation from '../screens/UseRefImplementation';
import ClassComponentImplementation from '../screens/ClassComponentImplementation';
import CounterScreen from '../screens/CounterScreen';
import TodoListScreen from '../screens/TodoListScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import WebViewScreen from '../screens/WebViewScreen';
import OptimizationScreen from '../screens/OptimizationScreen';

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
      <Stack.Screen name="TodoListScreen" component={TodoListScreen} />
      <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="OptimizationScreen" component={OptimizationScreen} />
    </Stack.Navigator>
  );
};

export default DynamicStackNavigation;
