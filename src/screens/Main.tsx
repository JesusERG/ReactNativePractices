import { SafeAreaView, Pressable, Text } from 'react-native';
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
    </SafeAreaView>
  );
};

export default Main;
