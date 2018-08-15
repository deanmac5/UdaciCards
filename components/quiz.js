import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TextButton from './textbutton'
import { pink, grey, white, green, red, black } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons'
import DeckList from './decklist';

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

    toggleAnswer() {
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

        if (this.state.cardNumber < this.state.cards.length - 1) {
            this.setState({
                cardNumber: this.state.cardNumber + 1,
            })
        } else {
            this.setState({
                finished: true
            })
        }
    }

    handleRestart(e) {
        e.preventDefault()
        this.setState({
            finished: false,
            cardNumber: 0
        })
    }

    handleGoHome(e) {
        e.preventDefault()
        this.props.navigation.navigate('DeckList')
    }

    render() {
        const card = this.state.cards[this.state.cardNumber]
        const displayAnswerText = this.state.displayAnswer ? card.answer : 'Show Answer'

        if (this.state.finished) {
            const correct = this.state.cards.filter(c => c.correct)
            return (
                <View>
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>You have completed the quiz.</Text>
                        <Text style={styles.resultText}>Your score is: </Text>
                        <Text style={styles.resultEmText}>{correct.length} </Text>
                        <Text style={styles.resultText}>out of {this.state.cards.length}</Text>
                    </View>
                    <View>
                        <Button onPress={(e) =>this.handleRestart(e)} title="Restart this quiz" />
                        <Button onPress={(e) => this.handleGoHome(e)} title="Go back to list" />
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.progress}>Question {this.state.cardNumber + 1} / {this.state.cards.length}</Text>
                <Text style={styles.question}>{card.question}</Text>
                <Button onPress={() => this.toggleAnswer()}
                    title={displayAnswerText}
                />
                <View style={styles.answerContainer}>

                    <View style={[styles.iconContainer]}>
                        <Ionicons
                            name='ios-close-circle-outline'
                            color={red}
                            size={80}
                            onPress={() => this.handleAnswer(false)}
                        />
                        <TextButton onPress={() => this.handleAnswer(false)}>Incorrect</TextButton>
                    </View>


                    <View style={[styles.iconContainer]}>
                        <Ionicons
                            name='ios-checkmark-circle-outline'
                            color={green}
                            size={80}
                            onPress={() => this.handleAnswer(true)}></Ionicons>
                        />
                        <TextButton onPress={() => this.handleAnswer(true)}>Correct</TextButton>
                    </View>

                </View>
            </View>
        )
    }
}

export default Quiz

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'space-between',
    },
    progress: {
        color: grey,
        fontSize: 14,
        textAlign: 'right',
        marginRight: 10,
    },
    question: {
        color: pink,
        fontSize: 30,
        textAlign: 'center',
    },
    answerContainer: {
        flexDirection: 'row',
        padding: 50,
        justifyContent: 'space-between'
    },
    resultContainer: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultText: {
        color: black,
        fontSize: 24
    },
    resultEmText: {
        color: green,
        fontSize: 40
    }
})