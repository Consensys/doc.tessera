---
description: Configuring Tessera enclave
---

# Configure Tessera enclave

[Enclave](../../Concepts/Enclave.md) configuration depends on the [type of enclave](../../Concepts/Enclave-types.md) being used.

## Local enclave

In the transaction manager's configuration file:

* Do not configure an `ENCLAVE` server.
* Configure the [enclave's keys](Keys/Overview.md).

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

Starting the transaction manager will start the local enclave as part of the same process; for example:

```shell
# start the transaction manager and enclave
tessera --configfile /path/to/tm-config.json
```

## Remote HTTP enclave

In the remote HTTP enclave's configuration file:

* Configure an [`ENCLAVE` server](../../Reference/SampleConfiguration.md#enclave).  Include TLS configuration as appropriate, with the transaction manager as a client of the enclave.
* Configure the [enclave's keys](Keys/Overview.md).

!!! example "Remote HTTP enclave configuration file"
    ```json
    {
     "serverConfigs": [{
       "app": "ENCLAVE",
       "serverAddress": "http://localhost:8080",
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

* Configure an additional [`serverConfig`](Tessera.md#server) for the `ENCLAVE` client. Include TLS configuration as appropriate.
* Do not configure any keys.

!!! example "Transaction manager configuration file"

    ```json
    {
      "serverConfigs": [
        {
          "app": "ENCLAVE",
          "serverAddress": "http://localhost:8080",
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

The remote HTTP enclave must be started before the transaction manager; for example:

```shell
# start the enclave
enclave-jaxrs/bin/enclave-jaxrs --configfile /path/to/enclave-config.json

# start the transaction manager
tessera --configfile /path/to/tm-config.json
```

If using key vault-stored keys, the corresponding key vault JAR must be included on the classpath; for example:

    ```shell
    # start the enclave
    cp hashicorp-key-vault/lib/* path/to/enclave-jaxrs-[version]/lib
    path/to/enclave-jaxrs-[version]/bin/enclave-jaxrs -configfile /path/to/enclave-config.json
    ```
