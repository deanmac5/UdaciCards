import React, { Component } from 'react'
import { View, Text, Button, Animated } from 'react-native'
import { red, grey, white } from '../utils/colors'
import { getDecks } from '../utils/helpers'



class DeckList extends Component {
    state = {
        decks: [],
        bounceValue: new Animated.Value(1),
    }

    
    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => this.getDeckList())
        // this removes problem with componentDidUpdate constantly reloading
    }

    getDeckList = async () => {
        const decks = await getDecks();
        this.setState({ decks: Object.values(decks) });
    };

    onClickPressed = (deck) => {
        Animated.sequence([
            Animated.timing(this.state.bounceValue, { duration: 200, toValue: 1.04}),
            Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4})
          ]).start()
        
        console.log("Click pressed " + deck.title)
        this.props.navigation.navigate('DeckDetail', { deck: deck })
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
                    <View key={deck.title} style={styles.item} >
                        <Button style={{ fontSize: 22 }} onPress={() => this.onClickPressed(deck)}
                            title={deck.title}
                        />
                        <Text style={{ color: grey, textAlign: 'right' }}>{deck.questions.length} Cards</Text>
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
    error: {
        color: red,

    },
    questions: {
        alignItems: 'center',
        color: grey
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,

        }
    },
}