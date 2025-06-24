import ClassCounter from '../ClassComponents/ClassCounter';
import ClassNavigationButton from '../ClassComponents/ClassNavigationButton';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ClassTextInput from '../ClassComponents/ClassTextInput';
// import { withNavigation } from 'react-navigation';

const ClassComponentImplementation = () => {
  return (
    <SafeAreaView>
      <View style={styles.separator}>
        <ClassCounter message="Hi, i'm a message from the parent component" />
      </View>
      <View style={styles.separator}>
        <ClassNavigationButton
          screenName="Hi"
          btnName="I'm a button made with a Class Component. Yay!"
          // navigation="placeholder"
        />
      </View>
      <View style={styles.separator}>
        <ClassTextInput txt="Class Text Input" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
  },
});

export default ClassComponentImplementation;
