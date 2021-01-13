# Performance Analyzer : How it works

This tool performs intelligent estimations of the performance of service based applications based on historical data. 



## How are the estimations done?

- **Step 1** : Identify the different execution paths by analyzing the abstract syntax tree (AST) of the service or webhook applications
- **Step 2** : Consider each execution path individually and identify the I/O calls.
- **Step 3** : Use machine learning models (trained based on the historical data of I/O calls) and little’s law to estimate the performance (latency, and throughput) of each execution path. 
- **Step 4** : The performance of the complete app is obtained by averaging the performance for different execution paths. 

## Assumptions 

- For service based applications the overhead of non-I/O operations are negligible.
- The application being evaluated is given sufficient resources. Thus it does not become the bottleneck.
- Sufficient historical data is available for each I/O call considered during the analysis
