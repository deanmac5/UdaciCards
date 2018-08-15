import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { addCardToDeck, getDeck, getDecks } from '../utils/helpers'
import { white } from '../utils/colors'
import { callTest, callTest1 } from '../utils/test'

class AddCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: "",
            answer: "",
            deck: this.props.navigation.state.params.deck,
            dTitle: this.props.navigation.state.params.deck.title
        }
    }

    async saveNewCard(input) {
        console.log("Save new card pressed")
        // add the new card to the current deck
        const { navigate } = this.props.navigation
        const question = this.state.question
        const answer = this.state.answer
        const card = { question, answer }
        console.log("Card is " + Object.values(card))
        console.log("State " + this.state.dTitle)

        addCardToDeck(this.state.dTitle, card)
        console.log("card should have been added")
        
        // const deck = await getDeck(this.state.dTitle)
        const decks =  await getDecks()
        console.log("all: " + Object.values(decks))
        const deck = await getDeck(this.state.dTitle)
        console.log("deck should be: " + Object.values(deck))
        console.log(deck.questions.length)
        navigate('DeckDetail', { deck: deck })
    }


    render() {

        return (
            <View style={styles.container}>
            
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