import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const { height, width } = Dimensions.get('screen');
export default function TouchAbleBox({ top, bottom, center, left }) {
  const [bg, setBg] = useState('transparent');
  return (
    <View
      onTouchStart={() => setBg(getRandomColor())}
      style={[
        styles.touchBox,
        {
          borderRightWidth: top || bottom || center ? 0 : 1,
          borderTopWidth: left ? 0 : 1,
          backgroundColor: bg,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  touchBox: {
    height: height / 11,
    width: width / 6,
    borderWidth: 1,
  },
});
