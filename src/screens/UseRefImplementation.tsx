// import { Text, SafeAreaView, Pressable, Alert } from 'react-native';
// import { useState, useRef } from 'react';

// const useRefImplementation = () => {
//   let a = 1;

//   const [render, setRender] = useState(0);
//   Alert.alert(a.toString());
//   console.log(a)

//   return (
//     <SafeAreaView>
//       <Text>useRef Implementations</Text>
//       <Pressable onPress={() => (a += 1)}>
//         <Text>Increase variable</Text>
//       </Pressable>

//       <Pressable onPress={() => setRender(Math.random())}>
//         <Text>Rerender</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default useRefImplementation;

import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';

export default function App() {
  //RE RENDERING
  const [render, setRender] = useState(0);
  Alert.alert('RE renderd');
  let a = 10;

  //INPUT FOCUS CASE
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus(); // Focuses the TextInput when the button is pressed
  };

  //MUTABLE VALUES
  const countRef = useRef(a); // For storing mutable value

  const incrementWithoutRerender = () => {
    countRef.current += 1; // Updates ref without causing re-render
    Alert.alert(countRef.current.toString(), 'wo re redndering'); // Logs the updated value
  };

  const incrementWithRerender = () => {
    countRef.current += 1;
    setRender(Math.random()); // Updates state and triggers re-render
    Alert.alert(countRef.current.toString(), 'with re redndering');
  };
  return (
    <View>
      <View>
        <TextInput ref={inputRef} placeholder="Enter text here" />
        <Button title="Focus Input" onPress={handleFocus} />
        <Button
          title="RE REnder the component"
          onPress={() => setRender(Math.random())}
        />
      </View>

      <View>
        <Text>Count: {countRef.current}</Text>
        <Button
          title="Increment Without Re-render"
          onPress={incrementWithoutRerender}
        />
        <Button
          title="Increment With Re-render"
          onPress={incrementWithRerender}
        />
      </View>
    </View>
  );
}
