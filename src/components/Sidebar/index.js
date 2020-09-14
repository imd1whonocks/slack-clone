import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import db from 'App/firebase';
import Header from './Header';
import SidebarItem from './SidebarItem';
import ChannelList from './ChannelList';
import styles from './sidebar.module.scss';

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [showChannels, setShowChannels] = useState(true);
    useEffect(() => {
        db.collection('channels').get({source: 'cache'}).then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach(doc =>  {
                // doc.data() is never undefined for query doc snapshots
                data.push({
                    id: doc.id,
                    name: doc.data().name
                });
            });
            setChannels(data);
        });
    }, []);
    const handleChannelListToggle = () => {
        setShowChannels(!showChannels);
    }
    return (
        <div className={styles.sidebar}>
            <Header/>
            <SidebarItem title={'Threads'} Icon={CommentOutlinedIcon} isChannel={false}/>
            <SidebarItem title={'All unreads'} Icon={ViewHeadlineOutlinedIcon} isChannel={false}/>
            <SidebarItem title={'Mentions & reactions'} Icon={AlternateEmailIcon} isChannel={false}/>
            <SidebarItem title={'Saved items'} Icon={BookmarkBorderOutlinedIcon} isChannel={false}/>
            <hr className={styles.divider}></hr>
            <SidebarItem title={'Channel Browser'} Icon={SearchOutlinedIcon} isChannel={false}/>
            <SidebarItem title={'Apps'} Icon={AppsOutlinedIcon} isChannel={false}/>
            <SidebarItem title={'File browser'} Icon={LibraryBooksOutlinedIcon} isChannel={false}/>
            <SidebarItem title={'People & user groups'} Icon={PeopleOutlineOutlinedIcon} isChannel={false}/>
            <hr className={styles.divider}></hr>
            <SidebarItem title={'Channels'} Icon={showChannels ? ArrowDropDownOutlinedIcon : ArrowRightOutlinedIcon} isChannel={false} onClick={handleChannelListToggle}/>
            <ChannelList channelList={channels} className={cx(styles.channelList, {[styles.hidden]: !showChannels})}/>
            <SidebarItem title={'Add a channel'} Icon={AddOutlinedIcon} isChannel={false}/>
        </div>
    )
}

export default Sidebar
