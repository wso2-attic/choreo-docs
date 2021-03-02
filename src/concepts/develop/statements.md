# Choreo Statements 

## Introduction 

A statement is a syntactic unit that specifies the action to be carried out in a Choreo application. 

Choreo supports the following statements in the graphical editor:

 * Log  
 * If conditional statements  
 * Variable  
 * For-each iterations
 * Respond
 * Return


### Log statement

You can use the log statement to add an entry to the application log at runtime. When you add a log statement, you can select either **Info** or **Error** as the **Type** depending on your requirement.

![](/assets/img//statements/log.png)
 

### If conditional statement

You can use the if conditional statement when you want to execute a collection of statements if a specified condition is met and execute another set of statements if the condition is not met.

![](/assets/img//statements/if.png)

### Variable statement

You can use the variable statement to declare a variable. There are two approaches you can follow to declare a variable:
 * Define a variable as **var** type (corresponds to the `var` keyword in Ballerina) followed by the name and an initializer expression. 
 * Select an appropriate variable type from the drop down list.

![](/assets/img//statements/variable.png)

### For-each iteration statement

You can use the for-each iteration statement when you want to traverses through items of a collection of data. For example, to traverse through arrays, maps, JSON, XML, and tables. 

![](/assets/img//statements/for-each.png)

### Respond statement

You can use the respond statement when you want the Choreo application to send a response back to its client. For example, to get an API to respond with a `HTTP_OK` indicating that the request was processed successfully.

![](/assets/img//statements/respond.png)

### Return statement

You can use the return statement to end the ongoing execution of a Choreo application.

![](/assets/img//statements/return.png)

