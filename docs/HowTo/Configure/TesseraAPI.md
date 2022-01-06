---
description: Configure servers for Tessera API
---

# Configure servers for Tessera API

You can configure the [servers for the Tessera API](../../Reference/TesseraAPI.md) in the Tessera [configuration file](Tessera.md).

Specify the servers to be started as a list in [`serverConfigs`](../../Reference/SampleConfiguration.md#serverconfigs).

!!! example "Server configuration"

    ```json
    "serverConfigs": [
       <server settings>
    ]
    ```

## Server addresses

The server configuration has two address entries:

- `serverAddress` - Address of the server.
  This can be specified as an IP address or a DNS name.
- `bindingAddress` - (optional) Endpoint to use for the binding.
  Specify to bind to an internal IP while advertising an external IP using `serverAddress`.

Each server is individually configured and can advertise over [HTTP](#http-server-configuration),
[HTTPS](#https-server-configuration), or a [Unix Socket](#unix-socket-server-configuration).

You can also [configure CORS](#configure-cors) for the `ThirdParty` server type.

### HTTP server configuration

=== "Syntax"

    ```json
    {
        "app": "<app type>",
        "enabled": <boolean>,
        "serverAddress":"http://[host]:[port]/[path]",
        "communicationType" : "REST"
    }
    ```

=== "`ThirdParty` example"

    ```json
    {
        "app": "ThirdParty",
        "enabled": true,
        "serverAddress": "http://localhost:9081",
        "communicationType": "REST"
    }
    ```

### HTTPS server configuration

=== "Syntax"

    ```json
    {
        "app": "<app type>",
        "enabled": <boolean>,
        "serverAddress": "https://[host]:[port]/[path]",
        "communicationType" : "REST",
        "sslConfig": {
            <SSL settings>
        }
    }
    ```

=== "P2P example"

    ```json
    {
        "app": "P2P",
          "enabled": true,
          "serverAddress": "http://localhost:9001",
          "sslConfig": {
            "tls": "enum STRICT,OFF",
            "generateKeyStoreIfNotExisted": "boolean",
            "serverKeyStore": "Path",
            "serverTlsKeyPath": "Path",
            "serverTlsCertificatePath": "Path",
            "serverKeyStorePassword": "String",
            "serverTrustStore": "Path",
            "serverTrustCertificates": [
              "Path"
            ],
            "serverTrustStorePassword": "String",
            "serverTrustMode": "TOFU",
            "clientKeyStore": "Path",
            "clientTlsKeyPath": "Path",
            "clientTlsCertificatePath": "Path",
            "clientKeyStorePassword": "String",
            "clientTrustStore": "Path",
            "clientTrustCertificates": [
              "Path"
            ],
            "clientTrustStorePassword": "String",
            "clientTrustMode": "TOFU",
            "knownClientsFile": "Path",
            "knownServersFile": "Path"
          },
          "communicationType": "REST",
          "properties": {
             "partyInfoInterval": "Long",
             "enclaveKeySyncInterval": "Long",
             "syncInterval": "Long",
             "resendWaitTime": "Long"
          }
        }
    ```

### Unix socket server configuration

=== "Syntax"

    ```json
    {
        "app": "<app type>",
        "enabled": <boolean>,
        "serverAddress": "unix://[path]",
        "communicationType": "REST"
    }
    ```

=== "Q2T Example"

    ```json
    {
        "app": "Q2T",
        "enabled": true,
        "serverAddress": "unix:/tmp/tm.ipc",
        "communicationType": "REST"
    }
    ```

### Configure CORS

The `ThirdParty` server type supports [configuring CORS] to control access to resources.

!!! example "`ThirdParty` CORS configuration"

    ```json
    {
        "app":"ThirdParty",
        "enabled": true,
        "serverAddress": "http://localhost:9081",
        "communicationType" : "REST",
        "cors" : {
            "allowedMethods" : ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
            "allowedOrigins" : ["http://localhost:63342"],
            "allowedHeaders" : ["content-type"],
            "allowCredentials" : true
        }
    }
    ```

[configuring CORS]: ../../Reference/SampleConfiguration.md#cors
