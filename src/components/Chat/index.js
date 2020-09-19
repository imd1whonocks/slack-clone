import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import MessageList from './MessageList';
import db from 'App/firebase';
import styles from './chat.module.scss';

let unsubscribe = null;
function Chat() {
    const { channelId } = useParams();
    const [ channelDetails, setChannelDetails ] = useState({});
    const [ messages, setMessages ] = useState([]);
    useEffect(() => {
        return () => {
            console.log('cleanup')
        }
    }, [])
    useEffect(() => {
        unsubscribe && unsubscribe();
        setMessages([]);
        // eslint-disable-next-line
        getChannelDetails(channelId);
    }, [channelId])
    const handleInfoClick = () => {
        console.log('fetch channel details: ', channelId);
    }
    const getChannelDetails = (channelId) => {
        db.collection('channels').doc(channelId).get().then(doc => {
            if (doc.exists) {
                setChannelDetails(doc.data());
                getMessages(channelId);
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!');
            }
        })
    }
    const getMessages = (channelId) => {
        unsubscribe = db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp')
            .onSnapshot(snapshot => {
                const data = [];
                snapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setMessages(data);
            })
    }
    console.log(messages)
    return (
        <div className={styles.root}>
            <Header 
                channelName={channelDetails?.name} 
                isStared={false} 
                desc={'Desc will be added later'} 
                onInfoClick={handleInfoClick}
            />
            <MessageList messages={messages} />
        </div>
    )
}

export default Chat
