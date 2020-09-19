import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import styles from './message-item.module.scss';

function MessageItem({
    messageObj 
}) {
    const {
        timestamp,
        userImage,
        message,
        userName,
    } = messageObj;
    const getTimestamp = (timestamp) => {
        const date = new Date(timestamp?.toDate());
        return date.toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        });
    }
    return (
        <div className={styles.root}>
            <Avatar
                className={styles.avatar}
                alt={userName}
                src={userImage}
            />
            <div className={styles.usernameBox}>
                <h4 className={styles.username}>{userName}</h4>
                <span className={styles.timestamp}>{getTimestamp(timestamp)}</span>
            </div>
            <div className={styles.message}>{message}</div>
        </div>
    )
}

export default MessageItem