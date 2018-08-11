import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { red } from '../utils/colors'
import { getDecks } from '../utils/helpers'
import Deck from './deck'

class DeckList extends Component {
    state = {
        decks: []
    }

    componentDidMount() {
        this.getDeckList()
    }

    getDeckList = async () => {
        const decks = await getDecks();
        this.setState({ decks: Object.values(decks) });
    };

    onPress(){
        console.log("Pressed")
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
                        <Deck
                            title={deck.title}
                            questions={deck.questions.length}
                            onPress={this.onPress()}
                            deck={deck}
                        />
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

    }
}