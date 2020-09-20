import React, { useRef, useEffect } from 'react';

import MessageItem from '../MessageItem';
import styles from './message-list.module.scss';

function MessageList({
    messages=[]
}) {
    const container = useRef(null);
    useEffect(() => {
        if (container.current) {
            container.current.scrollTop = container.current.scrollHeight;
        }
    }, [messages])
    return (
        <div className={styles.root} ref={container}>
            {messages.map(message => <MessageItem messageObj={message} key={message.id}/>)}
        </div>
    )
}

export default MessageList
