import { Axis } from "./types";

export function isWinner(state: Axis, x: number, y: number): boolean {
    state.xAxis[x]++;
    state.yAxis[y]++;
    if ( x === y ) {
        state.diag1++;
    } else if ( x + y === 4 ) {
        state.diag2++;
    }
    
    if (
        state.xAxis[x] === 5 || state.yAxis[y] === 5
        || state.diag1 === 5 || state.diag2 === 5
    ) {
        console.log('YOU WIN!!!');
        return true;
    } else {
        return false;
    }
}