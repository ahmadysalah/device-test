import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Link } from 'react-router-native';
import Box from '../components/Box';

export default function LcdTest() {
  return (
    <SafeAreaView>
      <Link underlayColor='transparent' exact to={'/'} style={styles.Back}>
        <>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {' '}
            {'< '} Back{' '}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Press on Box</Text>
        </>
      </Link>
      <View style={styles.container}>
        <Box color='black' />
        <Box color='silver' />
        <Box color='#E2E2E2' />
        <Box color='white' />
        <Box color='#003DA7' />
        <Box color='#005DFF' />
        <Box color='#649CFF' />
        <Box color='#BED6FF' />
        <Box color='#BE0000' />
        <Box color='#FF0000' />
        <Box color='#FF5E5E' />
        <Box color='#FFA2A2' />
        <Box color='#22AF00' />
        <Box color='#2BD800' />
        <Box color='#32FF00' />
        <Box color='#A7FF91' />
        <Box color='#DFDB00' />
        <Box color='#FFF300' />
        <Box color='#FDF771' />
        <Box color='#FFFCBE' />
        <Box color='maroon' />
        <Box color='brown' />
        <Box color='chocolate' />
        <Box color='tan' />
        <Box color='tomato' />
        <Box color='coral' />
        <Box color='darkorange' />
        <Box color='orange' />
        <Box color='black' content='SOS Black' />
        <Box color='red' content='SOS Red' />
        <Box color='blue' content='SOS Blue' />
        <Box color='green' content='SOS Green' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  Back: {
    backgroundColor: 'white',
    padding: 15,
    // marginTop: StatusBar.currentHeight,
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'silver',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
