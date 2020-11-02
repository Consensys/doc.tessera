---
description: Configuring Tessera enclave
---

# Configure Tessera enclave

[Enclave](../../Concepts/Enclave.md) configuration depends on the [type of enclave](../../Concepts/Enclave-types.md) being used.

## Local enclave

In the transaction manager's configuration file:

* Do not configure an `ENCLAVE` server.
* Configure the [enclave's keys](Keys.md).

!!! example "Transaction manager configuration file"
    ```json
    {
      "keys": {
        "keyData": [{
          "privateKey": "yAWAJjwPqUtNVlqGjSrBmr1/iIkghuOh1803Yzx9jLM=",
          "publicKey": "/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="
        }]
      },
      "alwaysSendTo": [],
      ...
    }
    ```

## Remote HTTP enclave

In the remote HTTP enclave's configuration file:

* Configure an [`ENCLAVE` server](Tessera.md#server).  Include TLS configuration as appropriate, with the transaction manager as a client of the enclave.
* Configure the [enclave's keys](Keys.md).

!!! example "Remote HTTP enclave configuration file"
    ```json
    {
     "serverConfigs": [{
       "app": "ENCLAVE",
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

In the transaction manager's configuration file:

* Configure an additional `serverConfig` for the `ENCLAVE` client.  Include TLS configuration as appropriate.
* Do not configure any keys.

!!! example "Transaction manager configuration file"

    ```json
    {
      "serverConfigs": [
        {
          "app": "ENCLAVE",
          "serverAddress": "http://localhost:8080",
          "communicationType": "REST"
        },
        {
          "app": "Q2T",
          ...
        },
        ...
      ],
      ...
    }
    ```

Specify the same keys as the transaction manager configuration. The remote HTTP enclaves can use all key types, including
vaults. When using a vault with the enclave, include the corresponding JAR on the classpath. For example:

* `/path/to/azure-key-vault-0.9-SNAPSHOT-all.jar`
* `/path/to/hashicorp-key-vault-0.9-SNAPSHOT-all.jar`

If using the all-in-one Transaction Manager jar, all the relevant files are included, and just the
configuration needs to be updated for the TM.

If using the individual "make-your-own" JARs, you will need the "core Transaction Manager" JAR along
with the "Enclave clients" JAR, and add them both to the classpath as such: `java -cp /path/to/transactionmanager.jar:/path/to/enclave-client.jar com.quorum.tessera.Launcher -configfile /path/to/config.json`
