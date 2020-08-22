import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Box({ color, style, content }) {
  return (
    <TouchableOpacity
      style={[
        styles.colors,
        { backgroundColor: color, justifyContent: 'center', ...style },
      ]}
      onPress={() => history.push('lcd-test')}
    >
      <Text style={{ textAlign: 'center', color: 'white' }}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  colors: {
    width: 60,
    height: 60,
    padding: 5,
    margin: 10,
  },
});
