import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

interface Props {
  txt: string;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  secureTextEntry?: boolean;
  autoComplete?: 'off' | 'email' | 'new-password' | 'username';
  autoCapitalize?: 'none' | 'sentences';
  autoCorrect?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
}

class ClassTextInput extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {
      txt,
      placeholder,
      keyboardType,
      secureTextEntry,
      autoComplete,
      autoCapitalize,
      autoCorrect,
      value,
      onChangeText,
      error,
    } = this.props;
    return (
      <View>
        <Text>{txt}</Text>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          value={value}
          onChangeText={onChangeText}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
      </View>
    );
  }
}

export default ClassTextInput;
