import { FC } from "react";
import { Props } from './types';
import './Modal.css';

const Modal: FC<Props> = (props) => {
    const { text } = props;
    return (
        <div className="modal-bg">
            <div className="modal">
                {text}
            </div>
        </div>
    );
};

export default Modal;