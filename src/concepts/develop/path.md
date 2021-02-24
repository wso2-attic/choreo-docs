# Relative Path From Host

When you create a Choreo application with an API trigger, you can specify a path to trigger the application. The path you specify will be the relative path from the host. You can also specify a path when you want to read path parameters from within your Choreo application.

The possible values you can specify as the **PATH** are as follows:
 * Empty path  
 * Single path string   
 * Multiple path strings
 * Path parameters

The URL that you need to invoke to trigger an application can vary depending on the value you specify as the **PATH**.

For example, let's assume you create a Choreo application named `sample` with an API trigger. Once you deploy the application, you will receive `https://sample-username.choreoapps.dev` as the hostname. Now let's take a look at how the trigger URL will vary depending on the value you specify as the **PATH**.

 * If you do not specify any value as the **PATH** (i.e., empty path ), you can simply use the hostname to invoke the application. In this case the trigger URL will be `https://sample-username.choreoapps.dev`.

 * If you specify a single path string as the **PATH** (e.g., `/path1`), you need to append the single string value to the hostname to invoke the application. In this case the trigger URL will be `https://sample-username.choreoapps.dev/path1`.

 * If you specify multiple path strings as the **PATH** (e.g., `/path1/path2/path3`), you need to append the multiple string values to the hostname to invoke the application. In this case the trigger URL will be `https://sample-username.choreoapps.dev/path1/path2/path3`.

 * If you specify path parameters as the **PATH** (e.g., `/[int date]/[string day]`), the specified path parameters can be read from within your Choreo application. In this case the trigger URL can be `https://sample-username.choreoapps.dev/8/monday`, which will allow you to read the value of date; “8” and day; “Monday” from within your Choreo application.

 
