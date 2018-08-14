import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import DeckList from './components/decklist';
import DeckDetail from './components/deckdetail'
import Quiz from './components/quiz'
import AddCard from './components/addcard'
import AddDeck from './components/adddeck'
import { blue, white} from './utils/colors'
import { Constants } from 'expo'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { wipeData } from './utils/helpers';


function FlashStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const DeckListNavigator = createStackNavigator({
  DeckList: {
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
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Add: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
})

const AddDeckNavigator = createStackNavigator({
  'Add Decks': {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})

const Tabs = createBottomTabNavigator({
  'Home': {
    screen: DeckListNavigator
  },
  'Add Deck': {
    screen: AddDeckNavigator,
  }
})

export default class App extends React.Component {

  componentDidMount() {
    wipeData() // for dev purposes only, remove before deploying to AppStore
  }

  render() {
    return (
      <View style={styles.container}>
        <FlashStatusBar backgroundColor={blue} barStyle="light-content" />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
