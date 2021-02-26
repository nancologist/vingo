import { FC, useState } from 'react';

import './Squares.css';
import { texts } from '../../data/data';
import { Axis, Props } from './types';
import Square from './square/Square';
import { isWinner, initialState } from './utils';
import { socket } from '../../socket/socket';

const Squares: FC<Props> = (props) => {
    const [ , setCount] = useState<Axis>(initialState);

    const handleSquareClick = (x: number, y: number) => {
        socket.emit('TAKE_SQUARE', x, y);
        setCount(prev => {
            const shouldCelebrate = isWinner(prev, x, y);
            if (shouldCelebrate) props.haveWinner();
            return prev;
        });
    };

    return (
        <div className="squares">
            {texts.map((text, index) => {
                const x = index % 5;
                const y = Math.floor(index / 5);
                return (
                    <Square
                        text={text} x={x} y={y} key={index}
                        clicked={handleSquareClick}
                    />
                );
            })}
        </div>
    )
};

export default Squares;
