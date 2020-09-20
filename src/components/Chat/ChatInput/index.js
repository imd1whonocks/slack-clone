import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import styles from './chat-input.module.scss';

function ChatInput({
    sendMessage,
    channelName
}) {
    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage && sendMessage(input);
        setInput('')
    }
    return (
        <div className={styles.root}>
            <form>
                <input 
                    placeholder={`Message #${channelName?.toLowerCase()}`} 
                    value={input}
                    onChange={handleInputChange}
                    className={styles.input}
                    />
                <Button type="submit" onClick={handleSendMessage}>
                    <SendIcon/>
                </Button>
            </form>
        </div>
    )
}

export default ChatInput
