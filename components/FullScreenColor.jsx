import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FullScreenColor({ color }) {
  return <View style={styles.full} />;
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: color,
  },
});
