import React from 'react';

import {onSaveEmail} from '../../../store/Email';
import EmailDialog from '../Presentational/EmailDialog';
import Message from '../../common/message';

const maxLength = 500;

class Email extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            message: '',
            messageLength: maxLength,
            dialogOpen: false,
            dialogTitle: '',
            dialogMessage: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});  
        this.setState({messageLength: maxLength - event.target.value.length});
    };

    handleSubmit = () => {
        //todo: loader - spinner
        onSaveEmail({OutEmail: this.state.email, message: this.state.message})
            // .then((response) => {});  
        this.setState({
            dialogOpen: true,
            dialogTitle: "Dzięki!",
            dialogMessage: 'Dziękuję Ci za wiadomość, w najbliższym wolnym czasie z pewnością do niej zajrzę.'
        });    
    };

    handleDialogClose = () => {
        this.setState({dialogOpen: false});
    };

    render() {
        return(
            <div>
                <Message 
                    isOpen={this.state.dialogOpen}
                    title={this.state.dialogTitle}
                    message={this.state.dialogMessage}
                    handleClose={this.handleDialogClose}
                />
                <EmailDialog 
                    messageLength={this.state.messageLength}
                    onEmailChange={this.handleEmailChange}
                    onMessageChange={this.handleMessageChange}
                    onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default Email;