import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Input from '@material-ui/core/Input';

import { useStateValue } from 'Context/State';
import styles from './Header.module.scss';

export function Header() {
    const [{user}] = useStateValue();
    return (
        <div className={styles.header}>
            <div className={styles.lhs}>
                <ScheduleIcon classes={{root: styles.timeIcon}}/>
                <div className={styles.search}>
                    <SearchIcon classes={{root: styles.searchIcon}}/>
                    <Input 
                        classes={{
                            root: styles.inputRoot,
                            input: styles.input,
                            focused: styles.focus
                        }}
                        disableUnderline={true}
                        placeholder={'Search imd1whonocks'}
                        margin={'none'}
                    />
                </div>
                <HelpOutlineIcon />
            </div>
            <div className={styles.rhs}>
                <Avatar
                    className={styles.avatar}
                    alt={user?.name}
                    src={user?.photoURL}
                />
            </div>            
        </div>
    )
}

export default Header
