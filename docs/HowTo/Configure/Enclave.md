---
description: Configuring Tessera enclave
---

# Configure Tessera enclave

[Enclave](../../Concepts/Enclave.md) configuration depends on the [type of enclave](../../Concepts/Enclave-types.md) being used.

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

## Remote HTTP enclave

To configure a [remote HTTP enclave](../../Concepts/Enclave-types.md#remote-http-enclave), in the remote HTTP enclave
configuration file:

* Specify an `ENCLAVE` server app type with REST as the communication type.
* Specify TLS settings as appropriate, with the transaction manager as a client of the enclave.

In the transaction manager configuration file, specify the same enclave configuration so the transaction
manager can find the remote HTTP enclave.

!!! example "Remote HTTP enclave configuration file"
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

Specify the same keys as the transaction manager configuration. The remote HTTP enclaves can use all key types, including
vaults. When using a vault with the enclave, include the corresponding JAR on the classpath. For example:

* `/path/to/azure-key-vault-0.9-SNAPSHOT-all.jar`
* `/path/to/hashicorp-key-vault-0.9-SNAPSHOT-all.jar`

If using the all-in-one Transaction Manager jar, all the relevant files are included, and just the
configuration needs to be updated for the TM.

If using the individual "make-your-own" JARs, you will need the "core Transaction Manager" JAR along
with the "Enclave clients" JAR, and add them both to the classpath as such: `java -cp /path/to/transactionmanager.jar:/path/to/enclave-client.jar com.quorum.tessera.Launcher -configfile /path/to/config.json`
