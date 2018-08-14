import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { white, green } from '../utils/colors'
import TextButton from './textbutton'

class DeckDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params
        return {
            title: `${deck.title} Deck`
        }
    }


    render() {
        const { deck } = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                
                <Text style={{fontSize: 18}}>This card has {deck.questions.length} card(s). </Text>
                <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('Quiz', { deck: deck })}
                    title='Start Quiz'
                />
                 
                <Button onPress={() => this.props.navigation.navigate('Add', { deck: deck })}
                    title='Add Card'
                />
                </View>
                
            </View>
        )
    }
}

export default DeckDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,

    }
});