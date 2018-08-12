import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { addCardToDeck, getDeck } from '../utils/helpers'
import TextButton from './textbutton'

class AddCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: "",
            answer: "",
            deck: this.props.navigation.state.params.deck
        }
    }

    saveNewCard(navigate) {
        // add the new card to the current deck
        const question = this.state.question
        const answer = this.state.answer
        const card = { question, answer }

        addCardToDeck(this.state.deck.title, card)
        const updatedDeck = getDeck(this.state.deck.title)
        this.props.navigation.goBack()
    }


    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>{this.state.deck.title}</Text>
                <Text>Enter question text</Text>
                <TextInput
                    value={this.state.question}
                    placeholder="Question"
                    onChangeText={(q) => this.setState({
                        question: q
                    })}
                />
                <Text>Enter answer text</Text>
                <TextInput
                    value={this.state.answer}
                    placeholder="Answer"
                    onChangeText={(a) => this.setState({
                        answer: a
                    })}
                />

                <View>
                    <TextButton style={{ fontSize: 22 }} onPress={() => this.saveNewCard(navigate)}>
                        Save Question
                    </TextButton>
                </View>
            </View>
        )
    }
}

export default AddCard