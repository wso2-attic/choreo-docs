# Choreo Concepts

There are several important basic constructs and terminology that you need to understand before you start working with the Choreo console. This section walks you through all the Choreo concepts you need to understand. 
 
## Basic constructs

### Trigger

A trigger in Choreo is an event or an action that can cause a Choreo application to start executing.

Choreo supports the following trigger types:

 * API: Allows you to expose an application as an API endpoint. 
 * Manual: Allows you to trigger an application manually.
 * Schedule: Allows to trigger an application based on a schedule that you set. You can specify the schedule in the form of a cron expression.
   ::: tip
   A cron expression is a string containing subfields separated by white spaces. Each special character (*) represents seconds, minutes, hours, date, month, day, and year respectively.
   :::  
 * Calendar: Allows you to trigger an application based on events in a Google Calendar.
 * GitHub  Allows you to trigger an application based on GitHub events and actions. The supported GitHub events and associated actions that can trigger a Choreo application are as follows:

| Event                       | Action                 | Application Trigger      |
|-----------------------------|------------------------|------------------------------------------|
| issue_comment               | created                | Add a comment to an issue                |
|                             | edited                 | Edit a comment on an issue               |
|                             | deleted                | Delete a comment on an issue.            |
| issues                      | assigned               | Assign an issue to a user                |
|                             | unassigned             | Unassign an issue from a user            |
|                             | labeled                | Add a label to an issue                  |
|                             | unlabeled              | Remove a label from an issue             |
|                             | opened                 | Open an issue                            |
|                             | edited                 | edit an issue                            |
|                             | milestoned             | Add a milestone to an issue              |
|                             | demilestoned           | Remove a milestone from an issue         |
|                             | closed                 | Close an issue                           |
|                             | reopened               | Reopen an issue                          |
| label                       | created                | Create a label                           |
|                             | edited                 | Edit a label                             |
|                             | deleted                | Delete a label                           |
| milestone                   | created                | Create a milestone                       |
|                             | closed                 | Close a milestone                        |
|                             | opened                 | Open a milestone                         |
|                             | edited                 | Edit a milestone                         |
|                             | deleted                | Delete a milestone                       |
| pull_request                | assigned               | Assign a pull request to a user          |
|                             | unassigned             | Unassign a pull request from a user      |
|                             | review_requested       | Request a user to review a pull request  |
|                             | review_request_removed |                                          |
|                             | labeled                | Add a label to a pull request            |
|                             | unlabeled              | Remove a label from a pull request       |
|                             | opened                 | Open a pull request                      |
|                             | edited                 | Edit a pull request                      |
|                             | closed                 | Close a pull request                     |
|                             | reopened               | Reopen a pull request                    |
| pull_request_review         | submitted              | Submit a pull request                    |
|                             | edited                 | Edit a pull request review               |
|                             | dismissed              | Dismiss a pull request review            |
| pull_request_review_comment | created                | Create a pull request review comment     |
|                             | edited                 | Edit a pull request review comment       |
|                             | deleted                | Delete a pull request review comment     | 


### Statement

A statement is a syntactic unit that specifies the action to be carried out in a Choreo application. 

Choreo supports the following statements:

 * Log: Allows you to add an entry to the application log at runtime. You can either add an **Info** log or an **Error** log depending on your requirement   
 * If: Allows you to execute a collection of statements if a specified condition is met.    
 * Variable: Allows you to declare a variable of a preffered type depending on your requirement.   
 * For-each: Allows you to traverses through items of a collection of data. For example, traverse through arrays, maps, JSON, XML, and tables.  
 * Respond: Allows you to send a response back to its client. For example, to get an API to respond with an `HTTP_OK` indicating that the request was processed successfully.
 * Return: Allows you to end the ongoing execution of a Choreo application.


### Connector

A Choreo connector allows you to connect to and interact with an external services through your application. You can use connectors to interact with generic protocol-based APIs and application specific APIs.

Following are the connectors you can use to interact with generic protocol-based APIs:
  
 * HTTP: Allows your application to interact with the HTTP API and communicate with an external endpoint via the HTTP protocol.   
 * SMTP: Allows your application to to send emails via the SMTP protocol.   
 * POP3: Allows your application to receive emails from a POP3 email server.  
 * IMAP: Allows your application to receive emails from any email server that supports the IMAP protocol. 

Following are the connectors you can use to interact with application specific APIs:

 * GitHub: Allows your application to interact with the GitHub API and  perform required operations. 
 * Gmail: Allows your application to interact with the Gmail API and perform operations such as creating, modifying, and sending emails.
 * Google Calendar: Allows your application to interact with the Google Calendar API and perform required operations. 
 * Google Sheets: Allows your application to interact with the Google Sheets API and perform operations such as creating and listing spreadsheets.
 * Twilio: Allows your application to interact with the Twilio API and perform operations such as sending messages, WhatsApp messages, and making voice calls. 

