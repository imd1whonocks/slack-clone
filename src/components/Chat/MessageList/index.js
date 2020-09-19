import React from 'react';

import MessageItem from '../MessageItem';
import styles from './message-list.module.scss';

function MessageList({
    messages=[]
}) {
    return (
        <div className={styles.root}>
            {messages.map(message => <MessageItem messageObj={message} key={message.id}/>)}
        </div>
    )
}

export default MessageList
