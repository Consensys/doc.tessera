---
title: Servers
description: Configure servers for Tessera API
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure servers for Tessera API

You can configure the [servers for the Tessera API](../../Reference/TesseraAPI.md) in the Tessera [configuration file](Tessera.md).

Specify the servers to be started as a list in [`serverConfigs`](../../Reference/SampleConfiguration.md#serverconfigs).

```json title="Server configuration"
"serverConfigs": [
    <server settings>
]
```

## Server addresses

The server configuration has two address entries:

- `serverAddress` - Address of the server. This can be specified as an IP address or a DNS name.
- `bindingAddress` - (optional) Endpoint to use for the binding. Specify to bind to an internal IP while advertising an external IP using `serverAddress`.

Each server is individually configured and can advertise over [HTTP](#http-server-configuration), [HTTPS](#https-server-configuration), or a [Unix Socket](#unix-socket-server-configuration).

You can also [configure CORS](#configure-cors) for the `ThirdParty` server type.

### HTTP server configuration

<Tabs>

  <TabItem value="Syntax" label="Syntax" default>

    ```json
    {
      "app": "<app type>",
      "serverAddress": "http://[host]:[port]/[path]",
      "communicationType": "REST"
    }
    ```
  </TabItem>
  <TabItem value="ThirdParty example" label="ThirdParty example">

    ```json
    {
      "app": "ThirdParty",
      "serverAddress": "http://localhost:9081",
      "communicationType": "REST"
    }
    ```

  </TabItem>
</Tabs>

### HTTPS server configuration

<Tabs>

  <TabItem value="Syntax" label="Syntax" default>

    ```json
    {
        "app": "<app type>",
        "serverAddress": "https://[host]:[port]/[path]",
        "communicationType" : "REST",
        "sslConfig": {
            <SSL settings>
        }
    }
    ```
  </TabItem>
  <TabItem value="P2P example" label="P2P example">

    ```json
    {
      "app": "P2P",
      "serverAddress": "http://localhost:9001",
      "sslConfig": {
        "tls": "enum STRICT,OFF",
        "generateKeyStoreIfNotExisted": "boolean",
        "serverKeyStore": "Path",
        "serverTlsKeyPath": "Path",
        "serverTlsCertificatePath": "Path",
        "serverKeyStorePassword": "String",
        "serverTrustStore": "Path",
        "serverTrustCertificates": ["Path"],
        "serverTrustStorePassword": "String",
        "serverTrustMode": "TOFU",
        "clientKeyStore": "Path",
        "clientTlsKeyPath": "Path",
        "clientTlsCertificatePath": "Path",
        "clientKeyStorePassword": "String",
        "clientTrustStore": "Path",
        "clientTrustCertificates": ["Path"],
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

  </TabItem>
</Tabs>

### Unix socket server configuration

<Tabs>

  <TabItem value="Syntax" label="Syntax" default>

    ```json
    {
      "app": "<app type>",
      "serverAddress": "unix://[path]",
      "communicationType": "REST"
    }
    ```
  </TabItem>
  <TabItem value="Q2T example" label="Q2T example">

    ```json
    {
      "app": "Q2T",
      "serverAddress": "unix:/tmp/tm.ipc",
      "communicationType": "REST"
    }
    ```

  </TabItem>
</Tabs>

### Configure CORS

The `ThirdParty` server type supports [configuring CORS] to control access to resources.

```json title="ThirdParty CORS configuration"
{
  "app": "ThirdParty",
  "serverAddress": "http://localhost:9081",
  "communicationType": "REST",
  "cors": {
    "allowedMethods": ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
    "allowedOrigins": ["http://localhost:63342"],
    "allowedHeaders": ["content-type"],
    "allowCredentials": true
  }
}
```

[configuring CORS]: ../../Reference/SampleConfiguration.md#cors
