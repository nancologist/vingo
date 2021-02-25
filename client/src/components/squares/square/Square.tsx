import { FC, useEffect, useState } from 'react';
import './Square.css';
import { Props } from './types';

const Square: FC<Props> = (props) => {
    const { text, x, y } = props;
    const [classes, setClasses] = useState(['square'])

    useEffect(() => {
        const isCenter = x === 2 && y ===2;
        if (isCenter) {
            setClasses(prev => ([ ...prev, 'square--selected' ]));
        }
    }, [x, y])

    const handleClick = (x: number, y: number) => {
        setClasses(prev => ([ ...prev, 'square--selected' ]));
        props.clicked(x, y)
    };

    return (
        <div 
            className={classes.join(' ')}
            onClick={() => handleClick(x, y)}
        >
            {text}
        </div>
    )
};

export default Square;