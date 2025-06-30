import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type ExpensiveCalculationProps = {
  number: number;
};

const ExpensiveCalculation: React.FC<ExpensiveCalculationProps> = ({
  number,
}) => {
  const calculatedValue = useMemo(() => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += number;
    }
    return total;
  }, [number]);

  return <Text style={styles.result}>Expensive Result: {calculatedValue}</Text>;
};

type ChildButtonProps = {
  onPress: () => void;
};

const ChildButton: React.FC<ChildButtonProps> = React.memo(({ onPress }) => {
  console.log('ChildButton rendered');
  return <Button title="Increment" onPress={onPress} />;
});

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(1);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <ChildButton onPress={handleIncrement} />

      <Button
        title="Change Number"
        onPress={() => setNumber(prev => prev + 1)}
      />
      <ExpensiveCalculation number={number} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

// import { SafeAreaView, View, Text, Button } from 'react-native';
// import React, { useCallback, useState, useMemo } from 'react';

// const Optimization = () => {
//   const [numArr, setNumArr] = useState([1, 2, 3, 4, 5]);
//   const [render, setRender] = useState(false);
//   const [count, setCount] = useState(0);

//   const handlePress = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []);

//   function retCount() {
//     console.log('Counter w use callback rendered');
//     return <Text>Count: {count}</Text>;
//   }

//   //Implementation without use callback

//   const handlePressWC = () => {
//     console.log('Counter rendered');
//     setCount(prevCount => prevCount + 1);
//   };

//   const handleRerender = () => {
//     console.log('State rendered');
//     setRender(!render);
//   };

//   const suma = useMemo(() => {
//     return numArr.reduce((total: number, n: number) => total + n, 0);
//   }, [numArr]);
//   function handleSum() {
//     console.log('Suma rendered');
//     return <Text>Suma: {suma}</Text>;
//   }
//   return (
//     <SafeAreaView>
//       <Button title="Re Render Component" onPress={handleRerender} />
//       <View>
//         <Text>Optimization</Text>
//         <Text>Count: {count}</Text>
//         <Button title="Increment" onPress={handlePress} />
//         {retCount()}
//         {handleSum()}
//         {handleSum()}
//         {handleSum()}
//         {handleSum()}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Optimization;
