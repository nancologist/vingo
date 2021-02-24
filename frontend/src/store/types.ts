export const SET_DICE = 'SET_DICE';
export const GET_DICE = 'GET_DICE';

export interface DiceState {
    dice: string[];
}

interface SetDice {
    type: typeof SET_DICE;
}

interface GetDice {
    type: typeof GET_DICE;
}

export type DiceActionTypes = SetDice | GetDice;
