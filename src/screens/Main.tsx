import { SafeAreaView, Pressable, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../customHooks/useFetch';

const Main = () => {
  const navigation = useNavigation();
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

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

      <Text>Fetched information</Text>
      <View>
        {data &&
          data.map(item => {
            return <Text key={item.id}>{item.title}</Text>;
          })}
      </View>
    </SafeAreaView>
  );
};

export default Main;
