import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/decklist';
import { reset } from './utils/helpers';


export default class App extends React.Component {
  
  render() {
    return (
      <DeckList />
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
