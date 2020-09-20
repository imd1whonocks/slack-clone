import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';

import Header from './Header';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import db from 'App/firebase';
import { useStateValue } from 'Context/State';
import styles from './chat.module.scss';

let unsubscribe = null;
function Chat() {
    const { channelId } = useParams();
    const [ channelDetails, setChannelDetails ] = useState({});
    const [ messages, setMessages ] = useState([]);
    const [ { user } ] = useStateValue();
    useEffect(() => {
        unsubscribe && unsubscribe();
        setMessages([]);
        // eslint-disable-next-line
        getChannelDetails(channelId);
    }, [channelId])
    const handleInfoClick = () => {
        console.log('fetch channel details: ', channelId);
    }
    const handleSendMessage = (message) => {
        if (channelId && message != '') {
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                userImage: user.photoURL,
                message: message,
                userName: user.name,
            })
        }
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
    return (
        <div className={styles.root}>
            <Header 
                channelName={channelDetails?.name} 
                isStared={false} 
                desc={'Channel description will be added later'} 
                onInfoClick={handleInfoClick}
            />
            <MessageList messages={messages} />
            <ChatInput sendMessage={handleSendMessage} channelName={channelDetails?.name}/>
        </div>
    )
}

export default Chat
