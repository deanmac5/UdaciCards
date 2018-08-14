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

    async saveNewDeck(navigation) {
        console.log("new deck created")
        await saveDeckTitle(this.state.newTitle)
        const deck = await getDeck(title)
        console.log('added deck is ' + deck)
        navigation.navigate('DeckDetail')
    }

    render() {
        const { navigation } = this.props
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
                    <Button onPress={() => this.saveNewDeck(navigation)}
                        title='Submit'
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