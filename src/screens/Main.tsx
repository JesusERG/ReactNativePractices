import { SafeAreaView, Pressable, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Main</Text>
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
    </SafeAreaView>
  );
};

export default Main;
