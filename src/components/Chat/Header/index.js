import React from 'react';
import cx from 'classnames';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import styles from './header.module.scss';

function Header({
    channelName,
    isStared,
    desc,
    onInfoClick,
}) {
    return (
        <div className={styles.root}>
            <div className={styles.lhs}>
                <div className={styles.nameBox}>
                    <h4 className={styles.name}>{channelName}</h4>
                    {isStared ? 
                        <StarIcon classes={{root: cx(styles.star, styles.selected)}}/> : 
                        <StarBorderOutlinedIcon classes={{root: styles.star}}/> }
                </div>
                <span className={styles.desc}>{desc}</span>
            </div>
            <div className={styles.rhs} onClick={onInfoClick}>
                <InfoOutlinedIcon classes={{root: styles.info}}/>
            </div>
        </div>
    )
}

export default Header
