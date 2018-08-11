import { AsyncStorage } from 'react-native'

const CARD_KEY = 'DSMmobileflashcards:decks'

// getDecks: return all of the decks along with their titles, questions, and answers.
export const getDecks = async () => {
    let jsonData = await AsyncStorage.getItem(CARD_KEY)
    if (jsonData === null) {
        jsonData = await initStorage()
    }

    const data = JSON.parse(jsonData)
    return data
}

// getDeck: take in a single id argument and return the deck associated with that id.
export const getDeck = async id => {
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export const saveDeckTitle = async title => {
}

// addCardToDeck: take in two arguments, title and card, and will add the card to
// the list of questions for the deck with the associated title.
export const addCardToDeck = async (title, card) => {
}

const initStorage = async () => {
    await AsyncStorage.setItem(CARD_KEY, JSON.stringify(defaultData));
    return await AsyncStorage.getItem(CARD_KEY);
}


const defaultData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            },
        ],
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer:
                    'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
}
