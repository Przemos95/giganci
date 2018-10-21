import React from 'react';

import TextField from '@material-ui/core/TextField';

import {PL} from '../../common/translations';
import EmailStyles from '../Styles/EmailStyles';
import Typography from '@material-ui/core/Typography';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const EmailDialog = (props) => {
    return (
        <div style={EmailStyles.container}>
            <Typography 
                style={EmailStyles.text}>
                Witaj, dobrze Cię tu widzieć. Jeżeli masz jakieś pytania, bądź uwagi, napisz do mnie!! Z chęcią się temu przyjrzę. Jeżeli oczekujesz odpowiedzi, podaj także swojego maila.
            </Typography>
            <TextField
                label={PL.email.emailAddress}
                style={EmailStyles.textField}
                onChange={props.onEmailChange}
                inputProps={{maxLength: "100"}}
            />
            <TextField
                label={PL.email.message}
                multiline
                fullWidth
                rows={PL.email.rows}
                margin="normal"
                variant="outlined"
                inputProps={{maxLength: "500"}}
                onChange={props.onMessageChange}
            />
            <div style={{color: '#888'}}>{props.messageLength}</div>
            <div style={EmailStyles.sendButton}>
                <Button variant="contained" color="primary">
                    {PL.email.send}
                    <Send style={{ marginLeft: '5px'}} />
                </Button>
            </div>
        </div>
    );
};

export default EmailDialog;
