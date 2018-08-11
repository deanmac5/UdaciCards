import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { grey } from '../utils/colors'

class Deck extends Component {

    render() {
        const { title, questions, deck } = this.props

        return (
            <View>
                <Button
                    title={title + " Deck"}
                />

                <Text style={styles.questions}>{questions} cards</Text>
            </View>
        )
    }
}

export default Deck

const styles = {
    questions: {
        alignItems: 'center',
        color: grey
    }
}