import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { red } from '../node_modules/ansi-colors';

class DeckList extends Component {
    state = {
        decks: []
    }


    render(){

        const { decks } = this.state

        if (decks.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.error}>There are no decks yet. Click to create some.</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>This is the deck list</Text>
            </View>
        )
    }
}

export default DeckList

const styles = {
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    error: {
        color: 'red'
    }
}