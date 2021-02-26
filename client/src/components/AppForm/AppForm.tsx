import { FC, useState, FormEvent } from 'react';
import { socket } from '../../socket/socket';
import { Props } from './types';

const AppForm: FC<Props> = (props) => {
    const [name, setName] = useState('');
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        socket.emit('SET_NAME', name);
        props.submitted()
    };

    return (
        <form className="app-form" onSubmit={submitForm}>
            <input 
                type="text" value={name} onChange={handleInput}
                placeholder="Choose a name..."
            /> 
            <button type="submit">GO!</button>
        </form>
    )
};

export default AppForm;