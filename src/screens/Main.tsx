import { SafeAreaView, Pressable, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useFetch from '../customHooks/useFetch';

import { DisplayContext } from '../context/DisplayContext';
import React, { useContext } from 'react';


const Main = () => {
  const navigation = useNavigation();
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

  const { signedIn, setSignedIn } = useContext(DisplayContext);

  return (
    <SafeAreaView>
      <Text>Main</Text>
      <Text>setSignedIn: {signedIn ? 'true' : 'false'}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('useRef' as never);
        }}
      >
        <Text>Go to useRef implementation</Text>
      </Pressable>

      <Button
        title="Go to class components"
        onPress={() => {
          navigation.navigate('ClassComponents' as never);
        }}
      />


      <Text>Fetched information</Text>
      <View>
        {data &&
          data.map(item => {
            return <Text key={item.id}>{item.title}</Text>;
          })}
      </View>

      <Button
        title="Go to counter"
        onPress={() => {
          navigation.navigate('CounterScreen' as never);
        }}
      />
      <Button
        title="Go to TodoList"
        onPress={() => {
          navigation.navigate('TodoListScreen' as never);
        }}
      />
      <Button
        title="Go to ShoppigCart"
        onPress={() => {
          navigation.navigate('ShoppingCartScreen' as never);
        }}
      />

      <Button
        title="Go to WebView"
        onPress={() => {
          navigation.navigate('WebViewScreen' as never);
        }}
      />

      <Button
        title="Go to Optimization"
        onPress={() => {
          navigation.navigate('OptimizationScreen' as never);
        }}
      />

      <Button
        title="Change signedIn"
        onPress={() => {
          setSignedIn(!signedIn);
        }}
      />
    </SafeAreaView>
  );
};

export default Main;
