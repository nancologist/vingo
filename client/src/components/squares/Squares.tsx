import { FC, useState } from 'react';

import './Squares.css';
import { texts } from '../../data/data';
import { Axis } from './types';
import Square from './square/Square';
import { isWinner, initialState } from './utils';
import { socket } from '../../socket/socket';

const Squares: FC = () => {
    const [ , setCount] = useState<Axis>(initialState);

    const handleSquareClick = (x: number, y: number) => {
        socket.emit('TAKE_SQUARE', x, y);
        setCount(prev => {
            isWinner(prev, x, y);
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
