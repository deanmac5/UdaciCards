import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import DeckList from './components/decklist';
import DeckDetail from './components/deckdetail'
import Quiz from './components/quiz'
import AddCard from './components/addcard'
import { blue, yellow, white } from './utils/colors'
import { Constants } from 'expo'
import { createStackNavigator } from 'react-navigation'


function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: `Mobile FlashCards`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
    
  },
  DeckDetail: {
    screen: DeckDetail,

    navigationOptions: {
      title: `Mobile FlashCards`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,

    // navigationOptions: {
    //   title: `Mobile FlashCards`,
    //   headerTintColor: white,
    //   headerStyle: {
    //     backgroundColor: blue,
    //   }
    // }
  },
  Add: {
    screen: AddCard,

    // navigationOptions: {
    //   title: `Mobile FlashCards`,
    //   headerTintColor: white,
    //   headerStyle: {
    //     backgroundColor: blue,
    //   }
    // }
  }
})

export default class App extends React.Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
       <FlashStatusBar backgroundColor={ blue } barStyle="light-content" />
      <MainNavigator />
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
