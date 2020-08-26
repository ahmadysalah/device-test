import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Text, Alert } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';
import { useHistory } from 'react-router-native';

export default function DrawScreen() {
  const [points, setPoints] = useState('');
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
    <View
      style={styles.container}
      onTouchMove={({ nativeEvent: { locationX, locationY } }) =>
        setPoints(`${points}, ${locationX},${locationY} `)
      }
    >
      <Text style={[styles.Back, { fontSize: 16, fontWeight: 'bold' }]}>
        Draw !
      </Text>
      <Svg height='100%' width='100%'>
        <Polyline points={points} fill='none' stroke='black' strokeWidth='3' />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  Back: {
    backgroundColor: 'white',
    padding: 20,
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'silver',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
