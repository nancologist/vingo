import { FC, useState, FormEvent } from 'react';
import { socket } from '../../socket/socket';
import { Props } from './types';
import './AppForm.css';

const AppForm: FC<Props> = (props) => {
    const [name, setName] = useState('');
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        if (!name) {
            alert('Choose a player name first!')
            return;
        }
        event.preventDefault();
        socket.emit('SET_NAME', name);
        props.submitted()
    };

    return (
        <form className="app__form" onSubmit={submitForm}>
            <input
                className="app__form__input"
                type="text" value={name} onChange={handleInput}
                placeholder="Player Name"
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Player Name"}
            />
            <button type="submit" className="app__form__btn">Enter</button>
        </form>
    )
};

export default AppForm;