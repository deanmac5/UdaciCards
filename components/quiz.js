import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import TextButton from './textbutton'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: 0,
            cards: this.props.navigation.state.params.deck.questions,
            displayAnswer: false,
            finished: false
        }
    }

    toggleAnswer(){
        this.setState({
            displayAnswer: !this.state.displayAnswer
        })
    }

    handleAnswer = correct => {
        let card = this.state.cards[this.state.cardNumber]
        card = {
            ...card,
            correct
        }
        this.state.cards[this.state.cardNumber] = card

        if (this.state.cardNumber < this.state.cards.length -1){
            this.setState({
                cardNumber: this.state.cardNumber+1,
            })
        }else {
            this.setState({
                finished: true
            })
        }
    }

    render(){
        const card = this.state.cards[this.state.cardNumber]
        const displayAnswerText = this.state.displayAnswer ? card.answer : 'Show Answer'

        if (this.state.finished){
            const correct = this.state.cards.filter(c => c.correct)
            return (
                <View>
                    <Text>This quiz is complete</Text>
                    <Text>you scored {correct.length} out of {this.state.cards.length}</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>{card.question}</Text>
                <TextButton onPress={()=> this.toggleAnswer()}>
                   {displayAnswerText}
                </TextButton>
                <View>
                    <TextButton onPress={()=> this.handleAnswer(true)}>Correct</TextButton>
                    <TextButton onPress={()=> this.handleAnswer(false)}>Incorrect</TextButton>
                </View>
            </View>
        )
    }
}

export default Quiz