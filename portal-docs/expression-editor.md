# Using the Expression Editor

## Table of Contents
<!--ts-->
* [Choreo Expression Syntax](#choreo-expression-syntax)
* [Supported Literals](#supported-literals)
    * [Strings](#strings)
    * [Signed Integers](#signed-integers)
    * [Decimal Floating-Point Numbers](#decimal-floating-point-numbers)
    * [Boolean Values](#boolean-values)
* [Accessing Variables](#accessing-variables)
    * [Using the variable value](#using-the-variable-value)
* [Supported Operators](#supported-operators)
    * [String Concatenation](#string-concatenation)
    * [Number Addition](#number-addition)
    * [Number Subtraction](#number-subtraction)
    * [Number Division](#number-division)
    * [Number Multiplication](#number-multiplication)
    * [Modulo Operation](#modulo-operation)
    * [Checking The Equality of Basic Types](#checking-the-equality-of-basic-types)
    * [Checking the Type of Variable](#checking-the-type-of-variable)
    * [Numerical Value Comparisons](#numerical-value-comparisons)
* [HTTP request related operations](#http-request-related-operations)
    * [Reading a header value in the request](#reading-a-header-value-in-the-request)
    * [Checking whether a header is present in the request](#checking-whether-a-header-is-present-in-the-request)
    * [Reading the JSON Payload of the request](#reading-the-json-payload-of-the-request)
    * [Reading the Text Payload of the request](#reading-the-text-payload-of-the-request)
    * [Reading the query parameter value](#reading-the-query-parameter-value)
    * [Reading the cookies available in the request](#reading-the-cookies-available-in-the-request)

<!--te-->

## Choreo Expression Syntax

A powerful expression syntax based on Ballerina language is used in the Choreo portal to efficiently provide inputs to different fields in a contextual manner. This document presents you the common expressions that can be used while developing Choreo applications.

## Supported Literals

### Strings

A string is simply a sequence of characters. Double quotes (") character is used to mark the boundary between starting and ending characters.

#### Examples

- ```
  "Colombo"
  ```
- ```
  "12345"
  ```
- ```
  "Ballerina is a programming language intended for network distributed applications"
  ```

### Signed Integers

This type can be used to give numbers as an input to an expression supported field. Only numerical characters without any delimiters used to define an integer. You have the option to use `+` or `-` characters in the front to indicate the sign.

#### Examples

- ```
  1234
  ```
- ```
  -10
  ```
- ```
  +2020
  ```

#### Decimal Floating-Point Numbers

A number with a decimal point falls under this data type. You have the option to use `+` or `-` characters in the front to indicate the sign.

#### Examples

- ```
  0.3353
  ```
- ```
  2044.24
  ```
- ```
  -8593.992
  ```
- ```
  +950.930
  ```
- ```
  10.0
  ```

### Boolean Values

This data type has one of two possible values, denoted true and false.

#### Examples

- ```
  true
  ```
- ```
  false
  ```

## Accessing Variables

### Using the variable value

Variables are used to keep values in memory to be used at a later time. In an expression syntax supported input field, you can refer to these variables directly by using the name of the variable.

#### Examples

- ```
  VariableName
  ```

## Supported Operators

### String Concatenation

The `+` operator can be used to do string concatenations. The string value can come from a string literal or a variable.

#### Examples

- Concatenating two string literals
  ```
  "Hello " + "world!" 
  ```
- Concatenating a string literal and a variable
  ```
  "Hi " + nameVar
  ```
- Concatenating two string variables
  ```
  firstNameString + lastNameString
  ```

### Number Addition

The `+` operator can be used for number addition. The number values can come from a literal or a variable.

#### Examples
- Concatenating two integer literals
  ```
  10 + 20
  ```
- Concatenating two decimal literals
  ```
  0.56 + 1.84
  ```
- Concatenating a literal and a variable
  ```
  100 + nameVariable
  ```
- Concatenating two variables
  ```
  firstNumber + secondNumber
  ```

### Number Subtraction

The `-` operator can be used for number subtraction. The number values can come from a literal or a variable.

#### Examples
- Subtracting two integer literals
  ```
  10 - 20
  ```
- Subtracting two decimal literals
  ```
  0.56 - 1.84
  ```
- Subtracting a literal and a variable
  ```
  100 - nameVariable
  ```
- Subtracting two variables
  ```
  firstNumber - secondNumber
  ```

### Number Division

The `/` operator can be used for number division. The number values can come from a literal or a variable.

#### Examples

- Division between two integer literals
  ```
  10 / 20
  ```
- Division between two decimal literals
  ```
  0.56 / 1.84
  ```
- Division between a literal and a variable
  ```
  100 / nameVariable
  ```
- Division between two variables
  ```
  firstNumber - secondNumber
  ```

### Number Multiplication

The `*` operator can be used for number multiplication. The number values can come from a literal or a variable.

#### Examples

- Multiplying two integer literals
  ```
  10 * 20
  ```
- Multiplying two decimal literals
  ```
  0.56 * 1.84
  ```
- Multiplying a literal and a variable
  ```
  100 * nameVariable
  ```
- Multiplying two variables
  ```
  firstNumber * secondNumber
  ```

### Modulo Operation

The `%` operator can be used to get the remainder of a division. The number values can come from a literal or a variable.

#### Examples
- Modulus of two integer literals
  ```
  10 % 4
  ```
- Modulus of a literal and a variable
  ```
  100 % nameVariable
  ```
- Modulus of two variables
  ```
  firstNumber % secondNumber
  ```

### Checking The Equality of Basic Types

Basic types in the Ballerina language are strings, integers, decimal numbers, and booleans. Values of these types can be compared using the `==` binary operator. The values can come from a literal or a variable. Similarly `!=` operator is used to check the inequality. Please note that the resulting value is always of type boolean from these operators.

#### Examples
- Equality of two integer literals
  ```
  10 == 4
  ```
- Equality of two string literals
  ```
  "hi" == "hi"
  ```
- Equality of a literal and a variable
  ```
  100 == expectedValueVariable
  ```
- Equality of two variables
  ```
  firstNumber == secondNumber
  ```
- Inequality of two variables. Following will return true when the value of two variables are different.
  ```
  firstNumber != secondNumber
  ```

### Checking the Type of Variable

The `is` operator can be used to assert the type of a variable.

#### Examples
- Checking whether the variable is of type JSON
  ```ballerina
  payload is json
  ```

### Numerical Value Comparisons

Following comparison operators are available in the expression editor for numeric value comparisons
- `<` (less than)
- `>` (greater than)
- `<=` (less than or equal to)
- `>=` (greater than or equal to)

#### Examples
- Check a variable’s value is greater than 10
  ```
  myVar > 10
  ```
- Comparing two variables
  ```
  myProperty <= limit
  ```

## HTTP request related operations

All the HTTP related service applications created in Choreo has a variable called `req` (of type `http:Request`) which the developers can use to query information related to the HTTP request. Following is a list of common use cases that an integration application developer would need to develop Choreo applications.

### Reading a header value in the request
A typical HTTP request contains many headers. Some of the headers are standard and some are custom. In an expression enabled input field the `req` variables `getHeader` function can be used to read a specific header value.

#### Examples
- Reading the value of Access-Control-Allow-Origin HTTP header
  ```
  req.getHeader("Access-Control-Allow-Origin")
  ```
- Using a value stored in a variable as the header name. Please note the omission of the double-quotes.
  ```
  req.getHeader(headerName)
  ```

### Checking whether a header is present in the request

Applications sometimes need to check the availability of a header before proceeding to something like reading the header value. The `hasHeader`  function in the req object can be used for this purpose.

#### Examples
- Checking whether the "content-length" property is available as a header
  ```
  req.hasHeader("content-length")
  ```
- Using a value stored in a variable as the query parameter name. Please note the omission of the double-quotes.
  ```
  req.hasHeader(myCustomeHeader)
  ```

### Reading the JSON Payload of the request

JSON is a common content type used for HTTP communication. The req variable’s `getJsonPayload` function can be used to read the JSON payload sent with the HTTP request. Please note that the `getJsonPayload` function’s return type is `json|ClientError`.

#### Examples
- Reading the JSON Payload of the HTTP request
  ```
  req.getJsonPayload()
  ```

### Reading the Text Payload of the request

Sometimes, content is sent as a string (plain text) with the HTTP request. The req variable’s `getTextPayload` function can be used to read the Text payload sent with the HTTP request. Please note that the `getTextPayload` function’s return type is `string|ClientError`.

#### Examples
- Reading the Text Payload of the HTTP request
  ```
  req.getTextPayload()
  ```

### Reading the query parameter value

Query parameters are used in an HTTP request to send additional inputs to consider when processing the request. The req variable’s `getQueryParamValue` function can be used to read the passed query parameter.

#### Examples
- Reading the query parameter named "category"
  ```
  req.getQueryParamValue("category")
  ```
- Using a value stored in a variable as the query parameter name. Please note the omission of the double-quotes.
  ```
  req.getQueryParamValue(queryParamName)
  ```

### Reading the cookies available in the request

HTTP Cookies are used to keep stateful information against a client. The req variable’s `getCookies` function can be used to read cookies present in the request as an array.

#### Examples
- Reading all the cookies available in the request
  ```
  req.getCookies()
  ```