import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

interface State {
  count: number;
}

interface Props {
  message: string;
}

class ClassCounter extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      // count: 10,
    }));
  };

  render() {
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
        <Text>Message from parent: {this.props.message}</Text>
      </View>
    );
  }
}

export default ClassCounter;
