import React from 'react';
import Button from '@material-ui/core/Button';

import { auth, provider } from 'App/firebase';
import { useStateValue } from 'Context/State';
import { actions } from 'State';
import slackLogo from 'Assets/images/slack-logo.jpg'
import styles from './login.module.scss';

function Login() {
    const [{}, dispatch] = useStateValue();
    const handleLoginClick = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                console.log(res)
                dispatch(actions.setUser(res))
            })
            .catch(err => {
                alert(err.message);
            })
    }
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img src={slackLogo} className={styles.logo}/>
                <h1>Sign in to imd1whonocks</h1>
                <p>imd1whonocks.slack.com</p>
                <Button classes={{root: styles.button}} onClick={handleLoginClick}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
