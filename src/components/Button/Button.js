import React from 'react';
import classes from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const button = props => (
    <div className={classes.Button} onClick={props.click}><FontAwesomeIcon icon={props.icon}/></div>
)

export default button;