import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, green } from '../utils/colors'
import TextButton from './textbutton'

class DeckDetail extends Component {


    render() {
        const { deck } = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                <Text>{deck.title} </Text>
                <Text>{deck.questions.length} </Text>
            
                <TextButton style={styles.iosSubmit} onPress={() => this.props.navigation.navigate('Quiz',{deck: deck})}>
                    Start Quiz
                </TextButton>

                <TextButton style={{ fontSize: 20 }} onPress={() => this.props.navigation.navigate('Add',{deck: deck})}>
                    Add Card
                </TextButton>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    iosSubmit: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
});