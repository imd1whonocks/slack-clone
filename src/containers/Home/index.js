import React, { Component } from 'react';

import Header from '../../components';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.layout}>
            <Header/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Home
