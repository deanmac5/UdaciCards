import { AsyncStorage } from 'react-native'

export const CARD_STORAGE_KEY = 'dsm:MobileFlashCards'


export function submitEntry({ entry, key }) {
    return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
        [key]: entry,
    }))
}

export function removeEntry(key) {
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data))
        })
}