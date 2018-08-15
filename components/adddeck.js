import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { getDeck, saveDeckTitle } from '../utils/helpers'
import { white, green } from '../utils/colors'

class AddDeck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Create New Deck`
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            newTitle: ""
        }
    }

    async saveNewDeck() {
        const { navigate } = this.props.navigation

        await saveDeckTitle(this.state.newTitle)
        const deck = await getDeck(this.state.newTitle)
        this.setState({
            newTitle: ""
        })
        navigate('DeckDetail', { deck: deck })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.textInput}
                        placeholder="enter new deck title"
                        onChangeText={title => this.setState({
                            newTitle: title
                        })}
                        value={this.state.newTitle}
                    />
                </View>
                <View>
                    <Button onPress={() => this.saveNewDeck()}
                        title='Create Deck'
                    />
                </View>
            </View>
        )
    }
}

export default AddDeck

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