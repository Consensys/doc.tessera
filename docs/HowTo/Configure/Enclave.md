---
description: Configuring Tessera enclave
---

# Configure Tessera enclave

Configure the [Tessera enclave](../../Concepts/Enclave.md) in the same way as the transaction manager.

## Local enclave

To configure a [local enclave](../../Concepts/Enclave-types.md#local), in the transaction manager
configuration file:
 
* Do not specify an enclave server type.
* Specify the enclave keys.

!!! example "Local enclave configuration"

    ```json
    {
     "keys": {
         "keyData": [{
             "privateKey": "yAWAJjwPqUtNVlqGjSrBmr1/iIkghuOh1803Yzx9jLM=",
             "publicKey": "/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="
         }]
     },

     "alwaysSendTo": []
    }
    ```

## Remote enclave

To configure a [remote HTTP enclave](../../Concepts/Enclave-types.md#http-enclave), in the remote enclave
configuration file:

* Specify an `ENCLAVE` server app type with REST as the communication type.
* Specify TLS settings as appropriate, with the transaction manager as a client of the enclave.

In the transaction manager configuration file, specify the same enclave configuration so the transaction
manager can find the remote enclave.

!!! example "Remote enclave configuration file"
    
    ```json
    {
     "serverConfigs": [{
       "app": "ENCLAVE",
       "enabled": true,
       "serverAddress": "http://localhost:8080",
       "communicationType": "REST",
       "bindingAddress": "http://0.0.0.0:8080"
     }],

     "keys": {
       "keyData": [{
           "privateKey": "yAWAJjwPqUtNVlqGjSrBmr1/iIkghuOh1803Yzx9jLM=",
           "publicKey": "/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="
       }]
     },

     "alwaysSendTo": []
    }
    ```

!!! example "Transaction manager configuration file"

    ```json
    "serverConfigs": [{
      "app": "ENCLAVE",
      "enabled": true,
      "serverAddress": "http://localhost:8080",
      "communicationType": "REST"
    }],
    ```

Specify the same keys as the transaction manager configuration. The remote enclaves can use all key types, including
vaults.

## Including jar files

When using individual jars (that is, not `tessera-app--app.jar`), the core transaction manager
jar and enclave clients jars are both needed and must be included in the classpath.

!!! example
    ```
    java -cp /path/to/transactionmanager.jar:/path/to/enclave-client.jar com.quorum.tessera.Launcher -configfile /path/to/config.json
    ```

When using the complete transaction manager jar (that is, `tessera-app--app.jar`), all relevant files
are included and only the configuration file must be updated.

When using a vault with a remote enclave, include the corresponding JAR on the classpath. For example:

* `/path/to/azure-key-vault-0.9-SNAPSHOT-all.jar`
* `/path/to/hashicorp-key-vault-0.9-SNAPSHOT-all.jar`
