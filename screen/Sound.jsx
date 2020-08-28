import React, { useState, useEffect } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';
import { Link, useHistory } from 'react-router-native';

const audio1 = require('../assets/sounds/samsung1.mp3');

export default function App() {
  const history = useHistory();
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) {
      loadAssets().then(() => setReady(true));
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        history.goBack();
        return true;
      }
    );
    return () => backHandler.remove();
  }, [ready]);

  if (!ready) {
    return <Text>loading audio</Text>;
  }

  return (
    <>
      <Link underlayColor='transparent' exact to={'/'} style={styles.Back}>
        <>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {' '}
            {'< '} Back{' '}
          </Text>
        </>
      </Link>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            - Press the play button to play test speakers music (it lasts only
            40 seconds)
          </Text>
          <Text style={styles.text}>- This music will play in background.</Text>
          <Text style={styles.text}>
            - If you don`t here anything, try to check device speaker
          </Text>
          <Text style={styles.text}>
            - this function should work in IOS and android
          </Text>
          <Text style={styles.text}>
            - If you want to stop this music sound test click on button again.
          </Text>
        </View>
        <Button
          title={playing ? 'Stop' : 'Play the music'}
          onPress={async () => {
            await Audio.setAudioModeAsync({
              allowsRecordingIOS: false,
              interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
              playsInSilentModeIOS: true,
              staysActiveInBackground: true,
              interruptionModeAndroid:
                Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
              shouldDuckAndroid: true,
              playThroughEarpieceAndroid: false,
            });

            if (playing) sound1.stopAsync();
            else {
              window.sound1 = new Audio.Sound();
              await sound1.loadAsync(audio1);
              await sound1.playAsync();
            }
            setPlaying(!playing);
          }}
        />
      </View>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 30,
  },
  text: {
    margin: 10,
    fontSize: 13,
  },
  Back: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'silver',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
};

const loadAssets = async () => {
  await Asset.loadAsync(audio1);
};
