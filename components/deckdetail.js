import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckDetail extends Component {

    componentDidMount() {
        console.log("DD props: " + this.props.navigation.params)
    }
    
    render(){
        const {id, deck} = this.props

        return (
            <View>
                <Text>This is the add deck detail view: {id} </Text>
            </View>
        )
    }
}

export default DeckDetail