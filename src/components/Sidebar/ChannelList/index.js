import React from 'react';

import SidebarItem from '../SidebarItem';
import styles from './channel-list.module.scss';

function ChannelList({
    channelList = [],
    className=''
}) {
    return (
        <div className={className}>
            {channelList.map(channel => (
                <SidebarItem isChannel={true} title={channel.name} key={channel.id} className={styles.channel}/>
            ))}
        </div>
    )
}

export default ChannelList
