---
description: Get started with Tessera and send a payload
---

# Start Tessera

## Prerequisites

[Tessera installed](Install/Distribution.md)

## Start Tessera and send a payload

The following example starts the [transaction manager and local enclave].

### 1. Generate keys

Generate a key pair in files called `myKey.pub` and `myKey.key`:

```bash
tessera -keygen -filename myKey
```

When prompted to enter a password, press Enter to generate an unlocked key.

!!! warning

    This example uses unlocked keys for educational purposes only.
    Secure private keys appropriately in production environments.

### 2. Create a configuration file

Create a file called `config.json` and add the following properties:

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
               "serverAddress": "http://localhost:9081"
           },
           {
               "app":"Q2T",
               "enabled": true,
               "serverAddress": "unix:/tmp/test.ipc"
           },
           {
               "app":"P2P",
               "enabled": true,
               "serverAddress":"http://localhost:9001",
               "sslConfig": {
                   "tls": "OFF"
               }
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
tessera -configfile config.json
```

!!! tip

    If the command line help is displayed, enable debugging and try again.

    ```bash
    tessera --debug -configfile config.json
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

[transaction manager and local enclave]: ../../Concepts/Privacy-Manager/Privacy-manager.md
