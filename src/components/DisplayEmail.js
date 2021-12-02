import React from "react";

const DisplayEmail = (props) => {
  console.log("bob");
  return (
    <div>
      <button onClick={(e) => props.setSelectedEmail(0)}>Back</button>
      <h1>
        {props.filteredEmails.find((email) => email.id === props.emailId).title}
      </h1>
      <h2>
        {
          props.filteredEmails.find((email) => email.id === props.emailId)
            .sender
        }
      </h2>
    </div>
  );
};

export default DisplayEmail;
