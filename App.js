import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import LcdTest from './screen/LcdTest';
import TouchTest from './screen/TouchTest';
import DrawScreen from './screen/DrawScreen';
import { EN } from './data.json';

const App = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Switch>
          <Route exact path='/' render={() => <HomeScreen language={EN} />} />
          <Route
            exact
            path='/lcd-test'
            render={() => <LcdTest language={EN} />}
          />
          <Route
            exact
            path='/draw'
            render={() => <DrawScreen language={EN} />}
          />
          <Route
            exact
            path='/touch-test'
            render={() => <TouchTest language={EN} />}
          />
        </Switch>
      </NativeRouter>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
