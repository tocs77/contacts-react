import React from 'react';

import classes from './contactCard.module.css';

const contactCard = (props) => {
  return (
    <li className={classes.contactCard}>
      <p className={classes.contactName}>
        {props.contact.firstName} {props.contact.secondName}
      </p>
      <a href={'tel:' + props.contact.phone} className={classes.link}>
        {props.contact.phone}
      </a>
      <a href={'mailto:' + props.contact.email} className={classes.link}>
        {props.contact.email}
      </a>
      <div className={classes.buttonBox}>
        <button className={classes.button} onClick={props.editHandler}>
          Edit
        </button>
        <button className={classes.button} onClick={props.deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default contactCard;
