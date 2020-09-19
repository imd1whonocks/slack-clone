import React, { } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Sidebar, Chat, Login } from 'Components';
import { useStateValue } from 'Context/State';
import styles from './Home.module.scss';

export const Home = () => {
    const [{user}] = useStateValue();
    if (!user) return <Login/>
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
