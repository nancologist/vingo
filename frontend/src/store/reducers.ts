import { DiceState, DiceActionTypes, SET_DICE } from './types';
import emojis from '../data/index.json';

const initialState: DiceState = {
    dice: []
};

export default function reducer (
    state = initialState,
    action: DiceActionTypes
): DiceState {
    switch (action.type) {
        case SET_DICE:
            return {
                ...state,
                dice: getEmojis([])
            };
            break;
    }

    return state;
}

const getEmojis = (usedEmojis: string[]): string[] => {
    // Todo: Filter the used emojis...
    const result: string[] = [];
    for (let i = 0; i < 9; i++) {
        const emoji = getRandomEmoji();
        result.push(emoji);
    }
    console.log(result);
    return result
}

const getRandomEmoji = (): string => {
    const keys = Object.keys(emojis);
    let keyIndex = Math.floor(Math.random() * keys.length);
    const groupedEmojis = (emojis as any)[keys[keyIndex]];
    const emojiIndex = Math.floor(Math.random() * groupedEmojis.length);
    return groupedEmojis[emojiIndex]
}