import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text>Device Test</Text>
      </View>
      <View style={styles.controllers}>
        <Button
          // onPress={onPressLearnMore}
          style={styles.controllers__btn}
          title='LCD Test'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
        <Button
          // onPress={onPressLearnMore}
          title='LCD Test'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
        <Button
          // onPress={onPressLearnMore}
          title='LCD Test'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controllers: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controllers__btn: {},
});

export default HomeScreen;
