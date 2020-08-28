import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { useHistory } from 'react-router-native';
import Box from '../components/TouchAbleBox';

export default function TouchTest() {
  const [points, setPoints] = useState();
  const history = useHistory();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        history.goBack();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Box top={true} />
        <Box top={true} />
        <Box top={true} />
        <Box top={true} />
        <Box top={true} />
        <Box top={true} />
      </View>
      <View style={styles.top}>
        <Box center={true} />
        <Box center={true} />
        <Box center={true} />
        <Box center={true} />
      </View>
      <View style={styles.top}>
        <Box center={true} />
        <Box center={true} />
        <Box center={true} />
        <Box center={true} />
      </View>
      <View style={styles.left}>
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
      </View>
      <View style={styles.right}>
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
        <Box left={true} />
      </View>
      <View style={styles.top}>
        <Box bottom={true} />
        <Box bottom={true} />
        <Box bottom={true} />
        <Box bottom={true} />
        <Box bottom={true} />
        <Box bottom={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    position: 'absolute',
    left: 1,
  },
  right: {
    flex: 1,
    position: 'absolute',
    right: 1,
  },
});
