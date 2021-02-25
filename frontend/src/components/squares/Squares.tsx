import { FC, useEffect, useState } from 'react';

import './Squares.css';
import { texts } from '../../data/data';
import { Axis } from './types';
import Square from './square/Square';
// import axiosInstance from '../../axios/axios';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080/');

const Squares: FC = () => {
    const [ , setAxisCount] = useState<Axis>({
        xAxis: [0, 0, 1, 0, 0], yAxis: [0, 0, 1, 0, 0], diag1: 1, diag2: 1
    });

    useEffect(() => {
        socket.on('OPP_SQUARE', (m: number, n: number) => { console.log(m, n) })
    }, [])

    const handleSquareClick = (x: number, y: number) => {

        // axiosInstance.post('/square/coords', { x, y });
        socket.emit('TAKE_SQUARE', x, y);
        
        setAxisCount(prev => {
            prev.xAxis[x]++;
            prev.yAxis[y]++;

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
