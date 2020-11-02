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

Starting the transaction manager will start the local enclave as part of the same process; for example:

```shell
# start the transaction manager and enclave
java -jar /path/to/tessera-app-[version]-app.jar --configfile /path/to/tm-config.json
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

The remote HTTP enclave must be started before the transaction manager; for example:

```shell
# start the enclave
java -jar /path/to/tessera-app-[version]-app.jar --configfile /path/to/enclave-config.json

# start the transaction manager
java -jar /path/to/tessera-app-[version]-app.jar --configfile /path/to/tm-config.json
```

!!! info "Considerations when not using the tessera-app JAR"
    The `tessera-app-[version]-app.jar` contains everything needed to run a transaction manager or remote HTTP enclave.

    For a more tailored remote HTTP enclave deployment, the `enclave-jaxrs-[version]-server.jar` can be used.  This contains only the core resources necessary to start a remote HTTP enclave.

    If using key vault-stored keys, the corresponding JAR must be included on the classpath; for example:

    ```shell
    # start the enclave
    java -cp /path/to/enclave-jaxrs-[version]-server.jar:/path/to/hashicorp-key-vault-[version]-all.jar com.quorum.tessera.enclave.rest.Main -configfile /path/to/enclave-config.json
    ```

    For a more tailored transaction manager deployment, the `tessera-simple-[version]-app.jar` can be used.  This contains only the core resources necessary to start a transaction manager.

    The enclave client JAR must be included on the classpath if using a remote HTTP enclave; for example:

    ```shell
    # start the transaction manager
    java -cp /path/to/tessera-simple-[version]-app.jar:/path/to/enclave-jaxrs-[version].jar com.quorum.tessera.launcher.Main -configfile /path/to/tm-config.json
    ```
