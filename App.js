import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import DeckList from './components/decklist';
import { blue } from './utils/colors'
import { Constants } from 'expo'


function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
       <FlashStatusBar backgroundColor={ blue } barStyle="light-content" />
      <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
