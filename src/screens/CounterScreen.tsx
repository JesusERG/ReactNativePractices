import { SafeAreaView, Text, Button, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import {
  getData,
  storeData,
  removeData,
  mergeData,
  //   clearAllData,
} from '../helper/ContextHelper';

const CounterScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState<string | null>(null);

  //   const inc = () => {
  //     setCount(count + 1);
  //   };

  useEffect(() => {
    const loadStoredData = async () => {
      const data = await getData('myKey');
      setStoredValue(data);
    };
    loadStoredData();
  }, []);

  const handleSave = async () => {
    const result = await storeData('myKey', inputValue);
    if (result.success) {
      setStoredValue(inputValue);
      setInputValue('');
      Alert.alert(result.message ?? 'Unknown error');
    } else {
      Alert.alert(`Error: ${result.error}`);
    }
  };

  const handleRemove = async () => {
    const result = await removeData('myKey');
    if (result.success) {
      setStoredValue(null);
      Alert.alert(result.message ?? 'Unknown error');
    } else {
      Alert.alert(`Error: ${result.error}`);
    }
  };

  const handleMerge = async () => {
    const result = await mergeData('myKey', inputValue);
    if (result.success) {
      setStoredValue(result.mergedData ?? null);
      setInputValue('');
      Alert.alert(result.message ?? 'Unknown error');
    } else {
      Alert.alert(`Error: ${result.error}`);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Enter value to store"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Save Data" onPress={handleSave} />
      <Button title="Remove Data" onPress={handleRemove} />
      <Button title="Merge Data" onPress={handleMerge} />
      <Text>Stored Value: {storedValue}</Text>
    </SafeAreaView>
  );
};

export default CounterScreen;
