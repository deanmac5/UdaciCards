import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckDetail extends Component {
    
    render(){
        const { deck } = this.props.navigation.state.params

        return (
            <View>
                <Text>{deck.title} </Text>
                <Text>{deck.questions.length} </Text>
            </View>
        )
    }
}

export default DeckDetail