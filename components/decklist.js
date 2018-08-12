import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { red, grey } from '../utils/colors'
import { getDecks } from '../utils/helpers'
import TextButton from './textbutton'


class DeckList extends Component {
    state = {
        decks: []
    }

    componentDidMount() {
        this.getDeckList()
        console.log(this.state)
        console.log(this.props)
    }

    getDeckList = async () => {
        const decks = await getDecks();
        this.setState({ decks: Object.values(decks) });
    };

    onClickPressed = (id, deck) => {
        console.log("Click pressed " + id + deck.title)
        this.props.navigation.navigate('DeckDetail', {deck: deck})
    }


    displayDecks() {
        const { decks } = this.state
        console.log(this.state)

        if (decks.length < 1) {
            return (
                <View style={styles.container}>
                    <Text style={styles.error}>There are no decks yet. Click to create some.</Text>
                </View>
            )
        }
        else {
            return decks.map((deck) => {
                return (
                    <View key={deck.title} style={styles.container}>
                        <TextButton onPress={(id) => this.onClickPressed(id, deck)}>
                            {deck.title} Deck 
                        </TextButton>
                        <Text style={styles.questions}>{deck.questions.length} Cards</Text>
                    </View>
                )
            })

        }
    }
    render() {
        return this.displayDecks();
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
        color: red,

    },
    questions: {
        alignItems: 'center',
        color: grey
    }
}