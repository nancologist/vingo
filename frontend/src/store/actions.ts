import { SET_DICE, GET_DICE, DiceActionTypes } from './types';

export function dispatchSetDice(): DiceActionTypes {
    return {
        type: SET_DICE
    };
}

// export function getDice() {
//     return {
//         type: GET_DICE
//     };
// }
