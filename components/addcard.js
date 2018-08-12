import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class AddCard extends Component {
    render(){
        return (
            <View>
                <Text>Enter question text</Text>
                <Text>Enter answer text</Text>
                <Text>Submit</Text>
            </View>
        )
    }
}

export default AddCard