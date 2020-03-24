# Choreo getting started guide
This is a simple getting started guide for any novice user to tryout Choreo for the first time

*`[based on Choreo M1 - March 21st 2020]`*

## Introduction
You can get started with Choreo in two ways,

1. Signup with Choreo at [development.choreo.dev](https://development.choreo.dev) and starting creating an app
2. Start with a Ballerina app on ur machine (with VSCode) and connecting to Choreo, once the app is running

This document is only focusing on #2 as #1 is straightforward and intuitive enough for self servicing.

## How to connect a Ballerina app with Choreo

1. You first need to compile your Ballerina project using the Ballerina distribution with Choreo features. You can do it using the following command. After this a JAR or multiple JARs will be generated in the target/bin directory

```bash
$ cd path/to/ballrina/project/root
$ curl -sL https://git.io/JvPqw | sh -
```

2. Create the ballerina.conf with Choreo tracing configurations

```bash
[b7a.observability]
enabled=true
provider="choreo"
```

3. Run the relevant generated JAR file using java -jar command (*if ur app is hello-world*)

```bash
$ java -jar target/bin/hello-world.jar
```

4. Once the app is running, if will print a unique URL to Choreo, where you can observe the app

```logs
ballerina: visit https://development.choreo.dev/observe/app/obs92db367e-8312-4f42-8a63-51526510824c to access observability data
ballerina: started publishing metrics to Choreo
ballerina: started publishing traces to Choreo
[ballerina/http] started HTTP/WS listener 0.0.0.0:9190
```

You can refer to [Samples](/samples) directory for Ballerina projects with Choreo observability preconfigured.

## Reporting Issues
We encourage you to report issues, documentation faults, and feature requests regarding Choreo through the Choreo [issue tracker](https://github.com/wso2/choreo-docs/issues)