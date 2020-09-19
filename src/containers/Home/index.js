import React, { } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Sidebar, Chat } from 'Components';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.body}>
                <div className={styles.lhs}>
                    <Sidebar/>
                </div>
                <div className={styles.rhs}>
                    <Switch>
                        <Route path="/channel/:channelId" component={Chat} />
                        <Route path="/">
                            <h1>Welcome</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Home
