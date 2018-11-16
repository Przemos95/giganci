import React from 'react';
import { Colors } from './colors';

const containerStyle = {
        margin: '10px 5% 0 3%',
        backgroundColor: 'white',
        boxShadow: '10px 10px 20px #222',
        color: Colors.red,
        fontSize: '120%',
        textAlign: 'center',
        padding: '10px'
};

const AccessFailed = () => {
    return(
        <div style={containerStyle}>
            Niestety nie masz uprawnień do tej części strony. Jeżeli uważasz, że powinieneś mieć uprawnienia, daj mi znać.
        </div>
    );
};

export default AccessFailed;