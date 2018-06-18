import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.

export default function Contact(props) {
  return (
    <div id={props.index} className='contact'>
      <img src={props.photo} className='contact-photo' alt='user-photo' />
      <h3 className='contact-name'>{props.name}</h3>
      <p className='contact-address'>{props.address}</p>
    </div>
  );

}