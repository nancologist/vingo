import { Axis } from "./types";

const DIAG_SUM = 4;
const WIN_NUM = 5

export function isWinner(state: Axis, x: number, y: number): boolean {
    state.xAxis[x]++;
    state.yAxis[y]++;
    if ( x === y ) {
        state.diag1++;
    } else if ( x + y === DIAG_SUM ) {
        state.diag2++;
    }
    
    return state.xAxis[x] === WIN_NUM || state.yAxis[y] === WIN_NUM || state.diag1 === WIN_NUM || state.diag2 === WIN_NUM;
}

export const initialState = {
    xAxis: [0, 0, 1, 0, 0],
    yAxis: [0, 0, 1, 0, 0],
    diag1: 1, diag2: 1
}