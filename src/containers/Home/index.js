import React, { } from 'react';

import { Header, Sidebar } from 'Components';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.body}>
                <Sidebar/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default Home
