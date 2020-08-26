import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';

export default function Box({ color, style, content }) {
  const [visible, setVisible] = useState(false);
  const [backgroundColor, setBgColor] = useState(color);
  const SOS = {
    black: ['black', 'silver', '#E2E2E2', 'white'],
    blue: ['#003DA7', '#005DFF', '#649CFF', '#BED6FF'],
    red: ['#BE0000', '#FF0000', '#FF5E5E', '#FFA2A2'],
    green: ['#22AF00', '#2BD800', '#32FF00', '#A7FF91'],
  };

  const handleSos = () => {
    setVisible(true);
    let i = 0;
    window.loop = setInterval(() => {
      setBgColor(SOS[color][i]);
      i === 3 ? (i = 0) : i++;
    }, 400);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.colors,
          {
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            ...style,
          },
        ]}
        onPress={() => (!content ? setVisible(true) : handleSos())}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>{content}</Text>
      </TouchableOpacity>
      <Modal visible={visible} animationType='fade'>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.full, { backgroundColor: backgroundColor }]}
          onPress={() => {
            clearInterval(window.loop);
            setVisible(false);
          }}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  colors: {
    width: 60,
    height: 60,
    padding: 5,
    margin: 10,
  },
  full: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
