import { FC } from 'react';
import './Square.css';
import { Props } from './types';

const Square: FC<Props> = (props) => {
    const { text } = props;
    return (
        <div className="square">{text}</div>
    )
};

export default Square;