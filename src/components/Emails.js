
import React from 'react'
import Email from './Email'
import { useState } from 'react'

import '../styles/emails.css'
import DisplayEmail from './DisplayEmail';

const Emails = (props) => {

    console.log(props.selectedEmailId);
    return (
        <main className="emails">
            <ul>
                {
                    props.selectedEmailId < 1 &&
                    props.filteredEmails.map((email, index) => (
                        <Email setSelectedEmail={props.setSelectedEmail} email={email} index={index} toggleStar={props.toggleStar} toggleRead={props.toggleRead} />
                    ))
                }
                {
                    props.selectedEmailId > 0 &&
                    < DisplayEmail setSelectedEmail={props.setSelectedEmail} emailId={props.selectedEmailId} filteredEmails={props.filteredEmails} />
                }


            </ul>
        </main>
    )
}

export default Emails