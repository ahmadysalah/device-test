import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import colors from '../styles/colors';
import image from '../assets/BG.jpeg';
import * as Device from 'expo-device';
import { Link } from 'react-router-native';

const dimensions = Dimensions.get('screen');
const HomeScreen = (props, history) => {
  const { buttons, test } = props.language;
  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text
          style={[styles.controllersText, { fontSize: 20, fontWeight: 'bold' }]}
        >
          Device Test
        </Text>
        <Text style={styles.text}>
          {test[0]} : {Platform.OS}
        </Text>
        <Text style={styles.text}>
          {test[1]} : {Device.brand}
        </Text>
        <Text style={styles.text}>
          {test[2]} : {Platform.constants.Model}
        </Text>
        <Text style={styles.text}>
          {test[3]} : {Device.deviceName}
        </Text>
        <Text style={styles.text}>
          {test[4]} Year: {Device.deviceYearClass}
        </Text>
        <Text style={styles.text}>
          {test[5]} Version: {Device.osVersion}
        </Text>
        <Text style={styles.text}>
          {test[6]}: {Device.totalMemory.toString().substr(0, 4)}
        </Text>

        <Text style={styles.text}>
          {test[7]} :{'  '}
          {Dimensions.get('screen').width +
            ' x ' +
            Dimensions.get('screen').height}{' '}
        </Text>
        <Text style={styles.text}>
          {test[8]}: {Platform.constants.Fingerprint ? 'True' : 'False'}
        </Text>
      </View>
      <View style={styles.controllers}>
        <View style={styles.controllersRow}>
          <TouchableOpacity style={styles.controllersBtn}>
            <Link exact to={'/lcd-test'}>
              <Text style={styles.controllersText}>{buttons[0]}</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controllersBtn}
            // onPress={onPressLearnMore}
          >
            <Text style={styles.controllersText}>{buttons[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controllersBtn}
            // onPress={onPressLearnMore}
          >
            <Text style={styles.controllersText}>{buttons[2]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    flex: 1,
    // height: 600,
    resizeMode: 'cover',
  },
  header: {
    flex: 1,
    // backgroundColor: colors.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controllers: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  controllersRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  controllersText: {
    color: 'white',
    textAlign: 'center',
  },
  controllersBtn: {
    margin: 5,
    width: 150,
    padding: 15,
    backgroundColor: colors.primary,
    color: 'white',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    padding: 5,
    color: 'white',
  },
});

export default HomeScreen;
