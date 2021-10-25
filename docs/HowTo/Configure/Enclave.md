---
description: Configuring Tessera enclave
---

# Configure Tessera enclave

You must configure an [enclave](../../Concepts/Privacy-Manager/Enclave.md) in the Tessera [configuration file](Tessera.md).
Enclave configuration depends on the [enclave type](../../Concepts/Privacy-Manager/Enclave-types.md) used.

## Local enclave

To configure a [local enclave](../../Concepts/Privacy-Manager/Enclave-types.md#local-enclave), in the
[configuration file](Tessera.md):

* Do not configure an [`ENCLAVE` server](../../Reference/SampleConfiguration.md#enclave).
* Configure the [enclave's keys](Keys/Overview.md).

!!! example "Transaction manager configuration file with a local enclave"

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

Starting the transaction manager starts the local enclave as part of the same process:

```bash
# start the transaction manager and enclave
tessera --configfile /path/to/tm-config.json
```

## Remote HTTP enclave

To configure a [remote HTTP enclave](../../Concepts/Privacy-Manager/Enclave-types.md#remote-http-enclave), you must
configure the enclave and [transaction manager](../../Concepts/Privacy-Manager/Transaction-manager.md) in separate
[configuration files](Tessera.md).

In the remote HTTP enclave configuration file:

* Configure an [`ENCLAVE` server](../../Reference/SampleConfiguration.md#enclave).
  Include TLS configuration as appropriate, with the transaction manager as a client of the enclave.
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

In the transaction manager configuration file:

* Configure an [`ENCLAVE` server](../../Reference/SampleConfiguration.md#enclave).
  Include TLS configuration as appropriate.
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

The remote HTTP enclave must be started before the transaction manager:

```bash
# start the enclave
enclave-jaxrs/bin/enclave-jaxrs --configfile /path/to/enclave-config.json

# start the transaction manager
tessera --configfile /path/to/tm-config.json
```

If using vault-stored keys, the corresponding key vault JAR must be included on the classpath:

```bash
# start the enclave
cp hashicorp-key-vault/lib/* path/to/enclave-jaxrs-[version]/lib
path/to/enclave-jaxrs-[version]/bin/enclave-jaxrs -configfile /path/to/enclave-config.json
```
