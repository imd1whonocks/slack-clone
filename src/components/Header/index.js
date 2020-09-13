import React from 'react';
import Avatar from '@material-ui/core/Avatar';


import styles from './Header.module.scss';

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.search}>
                {/* Time Icon */}
                {/* Search Icon */}
                {/* Help Icon */}
            </div>
            <div className={styles.rhs}>
                {/* User Avatar */}
                <Avatar
                    classname={styles.avatar}
                    alt={'Shashank'}
                    src=''
                />
            </div>            
        </div>
    )
}

export default Header
