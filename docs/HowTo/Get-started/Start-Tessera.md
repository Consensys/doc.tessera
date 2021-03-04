---
description: Get started with Tessera and send a payload
---

# Getting started

## Prerequisites

1. Install necessary [dependencies](Dependencies.md)

1. Install [Tessera](DistributionJar.md)

## Starting Tessera and sending a payload

The following example starts the [transaction manager and local enclave].

### 1. Generate keys

Generate a key pair in files called `myKey.pub` and `myKey.key`.

!!! bash
    ```
    tessera -keygen -filename myKey
    ```

When prompted to enter a password, press enter to generate an unlocked key.

!!! caution
    We are using unlocked keys for educational purposes only. Ensure private keys are secured appropriately
    in production environments.

### 2. Create a configuration file

Create a file called `tessera.conf` and add the following properties.

!!! example "Tessera configuration file"
    ```json
    {
       "useWhiteList": false,
       "jdbc": {
           "username": "sa",
           "password": "",
           "url": "jdbc:h2:./target/h2/tessera1",
           "autoCreateTables": true
       },
       "serverConfigs":[
           {
               "app":"ThirdParty",
               "enabled": true,
               "serverAddress": "http://localhost:9081",
               "communicationType" : "REST"
           },
           {
               "app":"Q2T",
               "enabled": true,
               "serverAddress": "unix:/tmp/test.ipc",
               "communicationType" : "REST"
           },
           {
               "app":"P2P",
               "enabled": true,
               "serverAddress":"http://localhost:9001",
               "sslConfig": {
                   "tls": "OFF"
               },
               "communicationType" : "REST"
           }
       ],
       "peer": [
           {
               "url": "http://localhost:9001"
           },
           {
               "url": "http://localhost:9003"
           }
       ],
        "keys": {
            "passwords": [],
            "keyData": [
                {
                    "privateKeyPath": "myKey.key",
                    "publicKeyPath": "myKey.pub"
                }
            ]
       },
       "alwaysSendTo": []
    }
    ```

### 3. Start Tessera node

```bash
tessera -configfile tessera.conf
```

!!! tip
    If the command line help is displayed, enable debugging and try again.

    ```bash
    tessera --debug -configfile tessera.conf
    ```

### 4. Confirm Tessera is running

Use the `upcheck` method to confirm Tessera is up and running.

=== "Request"

    ```bash
    curl http://localhost:9081/upcheck
    ```

=== "Result"

    ```bash
    I'm up!
    ```

[transaction manager and local enclave]: ../../Concepts/Privacy-manager.md
