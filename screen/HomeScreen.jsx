import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
  Image,
  Modal,
  Button,
} from 'react-native';
import colors from '../styles/colors';
import image from '../assets/BG.jpeg';
import info from '../assets/info.png';
import * as Device from 'expo-device';
import { useHistory } from 'react-router-native';

const HomeScreen = (props) => {
  const { buttons, test } = props.language;
  const [modalVisible, setVisible] = useState(false);

  const history = useHistory();
  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <View onTouchStart={() => setVisible(true)}>
        <Image
          source={info}
          style={{
            height: 10,
            width: 10,
            position: 'absolute',
            marginTop: '10%',
            marginLeft: 5,
            padding: 20,
          }}
        />
      </View>
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
          <TouchableOpacity
            style={styles.controllersBtn}
            onPress={() => history.push('/lcd-test')}
          >
            <Text style={styles.controllersText}>{buttons[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controllersBtn}
            onPress={() => history.push('/sound-test')}
          >
            <Text style={styles.controllersText}>{buttons[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controllersBtn}
            onPress={() => history.push('/touch-test')}
          >
            <Text style={styles.controllersText}>{buttons[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controllersBtn}
            onPress={() => history.push('/draw')}
          >
            <Text style={styles.controllersText}>{buttons[2]}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Created By : Ahmad Salah</Text>
            <Text style={styles.modalText}>
              Email : a.ahmad.salah@gmail.com{' '}
            </Text>
            <Text style={styles.modalText}>Whatsapp : +970-599344838 </Text>

            <Button title='Close' onPress={() => setVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flex: 1,
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

  modalView: {
    margin: 20,
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
