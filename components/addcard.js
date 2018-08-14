import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { addCardToDeck, getDeck } from '../utils/helpers'
import { white } from '../utils/colors'

class AddCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: "",
            answer: "",
            deck: this.props.navigation.state.params.deck
        }
    }

    async saveNewCard(input) {
        // add the new card to the current deck
        const { navigate } = this.props.navigation
        const question = this.state.question
        const answer = this.state.answer
        const card = { question, answer }

        addCardToDeck(this.state.deck.title, card)
        const updatedDeck = getDeck(this.state.deck.title)
        console.log(updatedDeck)

        navigate('DeckDetail')
    }


    render() {

        return (
            <View style={styles.container}>
                {/* <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Enter question text</Text>
                </View> */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.question}
                        placeholder="Question"
                        onChangeText={(q) => this.setState({
                            question: q
                        })}
                    />
                </View>
                {/* <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Enter answer text</Text>
                </View> */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.answer}
                        placeholder="Answer"
                        onChangeText={(a) => this.setState({
                            answer: a
                        })}
                    />
                </View>

                <View>
                    <Button style={{ fontSize: 22 }} onPress={() => this.saveNewCard()}
                        title='Submit'
                    />
                </View>
            </View>
        )
    }
}

export default AddCard

export const styles = StyleSheet.create({
    textInput: {
        fontSize: 22
    },
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'left'
    }
})