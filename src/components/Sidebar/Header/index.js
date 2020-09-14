import React from 'react'

import styles from './header.module.scss';
import CreateOutlinedIcon from '@material-ui/icons/Create';

function Header() {
    return (
        <div className={styles.sidebarHeader}>
            <h2>Imd1whonocks</h2>
            <div className={styles.iconBox}>
                <CreateOutlinedIcon
                    classes={{
                        root: styles.editIcon
                    }}
                />
            </div>
        </div>
    )
}

export default Header
