import { useEffect, useState } from "react";
import { socket } from '../../socket/socket';

const PlayerName = () => {
    const [oppName, setOppName] = useState('');

    useEffect(() => {
        socket.on('OPP_NAME', (name: string) => {
            if (name !== '') {
                setOppName(name)
            }
        })

        const storedName = sessionStorage.getItem('oppName')!;
        setOppName(storedName)
        sessionStorage.removeItem('oppName');
    }, []);

    return (
        <h3 className="app__players">You vs {
            oppName ? oppName:
            <span style={{ color: '#888'}}>waiting...</span>
        }</h3>
    );
};

export default PlayerName;