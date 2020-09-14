import React from 'react'
import cx from 'classnames';
import styles from './sidebar-item.module.scss';

function SidebarItem({
    Icon,
    title,
    isChannel,
    className,
    onClick,
}) {
    const handleOnClick = () => {
        onClick && onClick();
    }
    return (
        <div className={cx(className, styles.item)} onClick={handleOnClick}>
            {Icon ? <Icon classes={{root: styles.icon}} /> : null}
            {
                isChannel ? 
                <div className={styles.title}># {title}</div> : 
                <div className={styles.title}>{title}</div>
            }
        </div>
    )
}

export default SidebarItem
