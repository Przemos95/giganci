import React from 'react';

import EmailDialog from '../Presentational/EmailDialog';

const maxLength = 500;

class Email extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            message: '',
            messageLength: maxLength
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});  
        this.setState({messageLength: maxLength - event.target.value.length});
    };

    handleSubmit = () => {
        
    };

    render() {
        return(
            <EmailDialog 
                messageLength={this.state.messageLength}
                onEmailChange={this.handleEmailChange}
                onMessageChange={this.handleMessageChange}/>
        );
    }
}

export default Email;