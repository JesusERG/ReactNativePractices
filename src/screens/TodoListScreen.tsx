import { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Button,
  Pressable,
} from 'react-native';
import { useContext } from 'react';
import { DisplayContext } from '../context/DisplayContext';

const TodoListScreen = () => {
  const { signedIn } = useContext(DisplayContext);

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTask([...task, newTask]);
    setNewTask('');
  };

  const removeTask = (index: any) => {
    const updatedTask = task.filter(item => item !== index);
    setTask(updatedTask);
  };

  return (
    <SafeAreaView>
      <Text>TodoList</Text>
      <Text>Signed in: {signedIn ? 'true' : 'false'}</Text>
      <TextInput
        placeholder="Enter task"
        value={newTask}
        onChangeText={text => setNewTask(text)}
      />
      <Button title="Add to list" onPress={addTask} />
      <View>
        <FlatList
          keyExtractor={index => index}
          data={task}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
              <Pressable onPress={() => removeTask(item)}>
                <Text>Remove</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TodoListScreen;
