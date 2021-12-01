
import React from 'react'
import Email from './Email'
import '../styles/emails.css'
const Emails = (props) => {
    return (
        <main className="emails">
            <ul>
                {props.filteredEmails.map((email, index) => (
                    <Email email={email} index={index} toggleStar={props.toggleStar} toggleRead={props.toggleRead} />
                ))}
            </ul>
        </main>
    )
}

export default Emails