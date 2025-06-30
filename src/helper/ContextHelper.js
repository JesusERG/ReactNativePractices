// asyncStorageHelpers.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return { success: true, message: 'Data stored successfully.' };
  } catch (error) {
    console.error('Error storing data:', error);
    return { success: false, error: error.message };
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return { success: true, message: 'Data removed successfully.' };
  } catch (error) {
    console.error('Error removing data:', error);
    return { success: false, error: error.message };
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    return { success: true, message: 'All data cleared successfully.' };
  } catch (error) {
    console.error('Error clearing all data:', error);
    return { success: false, error: error.message };
  }
};

export const mergeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);

    // merge item
    await AsyncStorage.mergeItem('myKey', JSON.stringify(jsonValue));

    // read merged item
    const currentData = await AsyncStorage.getItem('myKey');

    Alert.alert(currentData, 'currentData');

    return {
      success: true,
      message: 'Data merged successfully.',
      mergedData: currentData,
    };
  } catch (error) {
    console.error('Error storing data:', error);
    return { success: false, error: error.message };
  }
};

export const storeDataa = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return { success: true, message: 'Data stored successfully.' };
  } catch (error) {
    console.error('Error storing data:', error);
    return { success: false, error: error.message };
  }
};
