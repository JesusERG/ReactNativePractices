import React, { Component } from 'react';
import { Text, Pressable, Alert } from 'react-native';

interface NavigationButtonProps {
  screenName: string;
  btnName: string;
  navigation?: any;
  // redirectScreen?: string;
}

class ClassNavigationButton extends Component<NavigationButtonProps> {
  constructor(props: any) {
    super(props);
    // this.props.navigation.navigate(this.props.screenName);
  }
  render() {
    return (
      <Pressable
        onPress={() => {
          Alert.alert('I was pressed');
        }}
      >
        <Text>{this.props.btnName}</Text>
      </Pressable>
    );
  }
}

export default ClassNavigationButton;
