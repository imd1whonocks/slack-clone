import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import SidebarItem from '../SidebarItem';
import styles from './channel-list.module.scss';

function ChannelList({
    channelList = [],
    className='',
}) {
    const history = useHistory();
    const { channelId } = useParams();
    const handleChannelClick = (channelId) => {
        history.replace(`/channel/${channelId}`);
    }
    return (
        <div className={className}>
            {channelList.map(channel => (
                <SidebarItem 
                    isChannel={true} 
                    title={channel.name} 
                    key={channel.id} 
                    className={styles.channel}
                    onClick={() => handleChannelClick(channel.id)}
                    isSelected={channelId === channel.id}
                />
            ))}
        </div>
    )
}

export default ChannelList
