# APIs / Connectors 

## Introduction 

Choreo lets you connect to external services through your Choreo application. This allows you to perform integrations using Choreo.

Once you create an application and select a trigger, you will be presented with the Choreo application develop view. In this view, you may select an external API to connect to.

![Step 1](/assets/img/connector/image2.png)

There are two basic types of APIs.    

-  Generic protocol based  APIs   

- Application specific APIs

## Generic Protocol based APIs

These are APIs based on generic protocols that you can configure to connect to an external service. These include  
 * HTTP  
 * SMTP  
 * POP3  
 * IMAP 

### HTTP
The HTTP API lets you communicate with an external endpoint using the HTTP protocol. The HTTP connection wizard will guide you through the process of connecting to an external endpoint by giving the URL, selecting the operation, setting header(s) to the request which is sent to the external endpoint, and handling the response received from the external call.

![HTTP1](/assets/img/connector/image1.png) 

### SMTP
The SMTP API lets you send emails using the SMTP protocol. The wizard will guide you through defining the SMTP server details, such as the host, username, and password, and finally the details of the email, such as the sender, receiver(s), subject, and body. 

![SMTP1](/assets/img/connector/smtp1.png) 

### POP3
The POP3 API allows you to receive emails. The wizard is similar to the SMTP use case, where you can create a client with the host, username, password. This API will return the first unseen email from the inbox specified with the connection parameters. 

![POP31](/assets/img/connector/pop31.png) 

### IMAP
Similar to the POP3, IMAP API allows you to receive emails. The wizard is similar to the POP3 case where you can create a client to receive an email from the specified inbox.

![IMAP1](/assets/img/connector/imap1.png) 

## Application Specific APIs

These APIs can be used to connect to a given external application. Hence they contain only application based configurations.
  * GitHub
  * Gmail
  * Google Calendar
  * Google Sheets
  * Twilio
  
### GitHub  
GitHub API allows you to do integrate your Choreo application with workflows involving GitHub organizations and repositories. The GitHub API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the information required. 

![GITHUB2](/assets/img/connector/github2.png) 

### Gmail
Gmail API allows you to do integrate your Choreo application with workflows involving creating, modifying, and sending emails. Similar to GitHub, the Gmail API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the additional information required. 

![GMAIL2](/assets/img/connector/gmail2.png) 

### Google Calendar
Google Calendar API allows you to do integrate your Choreo application with workflows involving listing, creating, and deleting calendar events. Similar to GitHub, the Google Calendar API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the additional information required. 

![GCALENDAR2](/assets/img/connector/gcalendar2.png) 

### Google Sheets
Google Sheets API allows you to do integrate your Choreo application with workflows involving listing and creating spreadsheets. Similar to GitHub, the Google Sheets API wizard has two options for connecting with your account, either manually or using the standard Oauth2 flow. Then, you are able to select the required operation and provide the additional information required. 

![GSHEET2](/assets/img/connector/gsheets2.png) 

### Twilio
Twilio API allows you to integrate your Choreo application with Twilio (https://www.twilio.com/). Twilio allows you to perform operations like sending messages, voice calls, WhatsApp messages, etc. through the Twilio REST API. To use the Twilio API, you need to provide configuration parameters Account SId, Auth Token, and XAuthy Key, which should be obtained from your Twilio account. The wizard will take you through this, as well as selecting the operation.

![TWILIO1](/assets/img/connector/image3.png)
