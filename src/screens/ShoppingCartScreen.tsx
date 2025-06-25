import React, { useReducer } from 'react';
import { SafeAreaView, FlatList, Text, Button, View } from 'react-native';
import { initialState, reducer } from '../state/ShoppingCartState';

const ShoppingCartScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item: string, price: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, price } });
  };

  const removeItem = (index: any) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { index } });
  };

  return (
    <SafeAreaView>
      <Text>ShoppingCartScreen</Text>

      <Button title="Add Item" onPress={() => addItem('Item 1', 10)} />
      <Button title="Add Item" onPress={() => addItem('Item 2', 20)} />

      <View>
        <Text>Cart Items:</Text>
        <FlatList
          keyExtractor={index => index}
          data={state.cart}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item.item}</Text>
              <Text>{item.price}</Text>
              <Button
                title="Remove"
                onPress={() => {
                  removeItem(index);
                }}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
