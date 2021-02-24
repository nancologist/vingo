import { FC, useState } from 'react';
import { texts } from '../../data/data';

import { Axis } from './types';
import Square from './square/Square';
import './Squares.css';

const Squares: FC = () => {
    const [ , setAxisCount] = useState<Axis>({
        xAxis: [], yAxis: [], diag1: 1, diag2: 1
    });

    const handleSquareClick = (x: number, y: number) => {
        setAxisCount(prev => {
            if (!prev.xAxis[x]) {
                prev.xAxis[x] = 1;
            } else {
                prev.xAxis[x]++;
            }

            if (!prev.yAxis[y]) {
                prev.yAxis[y] = 1;
            } else {
                prev.yAxis[y]++;
            }

            if ( x === y ) {
                prev.diag1++;
            } else if ( x + y === 4 ) {
                prev.diag2++;
            }

            if (
                prev.xAxis[x] === 5 || prev.yAxis[y] === 5
                || prev.diag1 === 5 || prev.diag2 === 5
            ) {
                console.log('YOU WIN!!!');
            }

            return prev;
        })
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
