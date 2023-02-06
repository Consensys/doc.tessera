---
title: TLS
description: Configuring TLS
sidebar_position: 7
---

# Configure TLS

You can enable communications via TLS/SSL by setting `"tls": "STRICT"`.

If the value is set to `"OFF"`, the rest of the SSL configuration is ignored.

:::caution Important

If using TLS, update the hostname of the node to use `https` instead of `http`.

:::

```json title="TLS configuration"
{
  "sslConfig": {
    "tls": "[Authentication mode : OFF,STRICT]",
    "sslConfigType": "[Possible values: SERVER_ONLY, CLIENT_ONLY, SERVER_AND_CLIENT]",

    // server options
    "serverTrustMode": "[Possible values: CA, TOFU, WHITELIST, CA_OR_TOFU, NONE]",
    "serverKeyStore": "[Path to server keystore]",
    "serverKeyStorePassword": "[Password required for server KeyStore]",
    "serverTrustStore": "[Server trust store path]",
    "serverTrustStorePassword": "[Password required for server trust store]",
    "serverTlsKeyPath": "[Path to server TLS key path]",
    "serverTlsCertificatePath": "[Path to server TLS cert path]",
    "serverTrustCertificates": [
      "[Array of truststore certificates if no truststore is defined.]"
    ],

    // client options
    "clientTrustMode": "[Possible values: CA, TOFU, WHITELIST, CA_OR_TOFU, NONE]",
    "clientKeyStore": "[Path to client keystore. The keystore that is used when communicating to other nodes.]",
    "clientKeyStorePassword": "[Password required for client KeyStore]",
    "clientTrustStore": "[Path to client TrustStore]",
    "clientTrustStorePassword": "[Password required for client trust store]",
    "clientTlsKeyPath": "[Path to client TLS Key]",
    "clientTlsCertificatePath": "[Path to client TLS cert]",
    "clientTrustCertificates": [
      "[Array of truststore certificates if no truststore is defined.]"
    ],

    "knownClientsFile": "[TLS known clients file for the server. This contains the fingerprints of public keys of other nodes that are allowed to connect to this one.]",
    "knownServersFile": "[TLS known servers file for the client. This contains the fingerprints of public keys of other nodes that this node has encountered.]",
    "generateKeyStoreIfNotExisted": "[boolean]",
    "environmentVariablePrefix": "[Prefix to uniquely identify environment variables for this particular server ssl configuration]",
    "clientAuth": "[Configure if SSL needs client authentication - boolean - default is true]"
  }
}
```

:::info Tip

To enable one-way SSL, set `clientAuth` to `false`.

:::

When TLS/SSL is enabled, each node must have [certificates](../Generate-certificates.md) and [keys](../Generate-Keys/Generate-Keys.md) defined for both client-side and server-side. You can define these in multiple ways, and in the following order of precedence:

1. Secured and unsecured `.jks` (Java keystore) format files.

   - `serverKeyStore`, `serverKeyStorePassword`, `serverTrustStore`, `serverTrustStorePassword`
   - `clientKeyStore`, `clientKeyStorePassword`, `clientTrustStore`, `clientTrustStorePassword`

2. `.pem` format certificate and key files.

   - `serverTlsKeyPath`, `serverTlsCertificatePath`, `serverTrustCertificates`
   - `clientTlsKeyPath`, `clientTlsCertificatePath`, `clientTrustCertificates`

   ```json title=".pem format configuration"
   "sslConfig" : {
       "tls" : "STRICT",
       "generateKeyStoreIfNotExisted" : "false",
       "sslConfigType" : "SERVER_AND_CLIENT",
       "serverTlsKeyPath" : "server-key.pem",
       "serverTlsCertificatePath" : "server-cert.pem",
       "serverTrustCertificates" : ["server-trust.pem"]
       "serverTrustMode" : "CA",
       "clientTlsKeyPath" : "client-key.pem",
       "clientTlsCertificatePath" : "client-cert.pem",
       "clientTrustCertificates" : ["client-trust.pem"]
       "clientTrustMode" : "TOFU",
       "knownClientsFile" : "knownClients",
       "knownServersFile" : "knownServers"
   }
   ```

## Configuration type

When configuring TLS, use either the client configuration options or server configuration options depending on your [server configuration](../../Reference/SampleConfiguration.md#serverconfigs). You can also define [`sslConfigType`](../../Reference/SampleConfiguration.md#sslconfig) to limit TLS to only the appropriate options.

| Server configuration | TLS Configuration | `sslConfigType` value |
| --- | --- | --- |
| [`P2P`](../../Reference/SampleConfiguration.md#p2p) | Server and client | `SERVER_AND_CLIENT` |
| [`ThirdParty`](../../Reference/SampleConfiguration.md#thirdparty) | Server options only | `SERVER_ONLY` |
| [`Q2T`](../../Reference/SampleConfiguration.md#q2t) | Server options only | `SERVER_ONLY` |
| [`ENCLAVE`](../../Reference/SampleConfiguration.md#enclave) | Server and client | `SERVER_AND_CLIENT` |

## Keystores

### Passwords

You can provide passwords for secured `.jks` keystores in multiple ways, and in the following order of precedence:

1. Prefixed environment variables.

   - `<PREFIX>_TESSERA_SERVER_KEYSTORE_PWD`, `<PREFIX>_TESSERA_SERVER_TRUSTSTORE_PWD`
   - `<PREFIX>_TESSERA_CLIENT_KEYSTORE_PWD`, `<PREFIX>_TESSERA_CLIENT_TRUSTSTORE_PWD`

   These are only applied to the servers with the corresponding `environmentVariablePrefix` value defined in their configuration. This allows, for example, a P2P and ADMIN server to be configured with different prefixes, `P2P` and `ADMIN`. Different keystores can then be used for each server and the individual passwords provided with `P2P_<...>` and `ADMIN_<...>`.

1. Configuration file.

   - `serverKeyStorePassword`, `serverTrustStorePassword`
   - `clientKeyStorePassword`, `clientTrustStorePassword`

1. Global environment variables.

   - `TESSERA_SERVER_KEYSTORE_PWD`, `TESSERA_SERVER_TRUSTSTORE_PWD`
   - `TESSERA_CLIENT_KEYSTORE_PWD`, `TESSERA_CLIENT_TRUSTSTORE_PWD`

   These are applied to all server configurations defined in the configuration file.

::: info

If a P2P and ADMIN server are both configured with TLS then the values set for the global environment variables are used for both. These values are ignored if the passwords are also provided in the configuration file or as prefixed environment variables.

:::

### Generate keystores

If keystores don't already exist, Tessera can generate `.jks` files for use with non-`CA` [trust modes](#trust-modes).

If you set `generateKeyStoreIfNotExisted` to `true`, Tessera checks whether files already exist at the paths provided in the `serverKeyStore` and `clientKeyStore` configuration values. If the files don't exist:

1. Tessera generates new keystores and saves them at the `serverKeyStore` and `clientKeyStore` paths.
1. Tessera secures the keystores using the corresponding [passwords](#passwords) if they're provided.

### Trust modes

You must specify the trust mode for both client and server. Multiple trust modes are supported: [`TOFU`](#tofu-trust-on-first-use), [`WHITELIST`](#whitelist), [`CA`](#ca), `CA_OR_TOFU`, and `NONE`.

:::note

If you use TLS on multiple endpoints (for example, P2P and Q2T) and run everything on localhost (or a single machine), then you must use different `knownClients` and `knownServers` files for the different endpoints.

:::

#### TOFU (Trust-on-first-use)

Only the first node that connects identifying as a certain host is allowed to connect as the same host in the future. When connecting for the first time, the host and its certificate are added to `knownClientsFile` (for server), or `knownServersFile` (for client). These files are generated if they don't already exist, using the values specified in `knownClientsFile` and `knownServersFile`.

```json title="TOFU trust mode configuration"
"sslConfig" : {
    "tls" : "STRICT",
    "generateKeyStoreIfNotExisted" : "true",
    "sslConfigType" : "SERVER_AND_CLIENT",
    "serverKeyStore" : "server-keystore",
    "serverKeyStorePassword" : "tessera",
    "serverTrustMode" : "TOFU",
    "clientKeyStore" : "client-keystore",
    "clientKeyStorePassword" : "tessera",
    "clientTrustMode" : "TOFU",
    "knownClientsFile" : "knownClients",
    "knownServersFile" : "knownServers"
}
```

#### `WHITELIST`

Only nodes that have previously connected to this node and have been added to the `knownClients` file are allowed to connect. Similarly, this node can only make connections to nodes that have been added to the `knownServers` file. This trust mode doesn't add new entries to the `knownClients` or `knownServers` files.

With this trust mode, you must provide the allowlist (whitelist) files (`knownClientsFile` and `knownServersFile`).

```json title="WHITELIST trust mode configuration"
"sslConfig" : {
    "tls" : "STRICT",
    "generateKeyStoreIfNotExisted" : "true",
    "sslConfigType" : "SERVER_AND_CLIENT",
    "serverKeyStore" : "server-keystore",
    "serverKeyStorePassword" : "tessera",
    "serverTrustMode" : "WHITELIST",
    "clientKeyStore" : "client-keystore",
    "clientKeyStorePassword" : "tessera",
    "clientTrustMode" : "WHITELIST",
    "knownClientsFile" : "knownClients",
    "knownServersFile" : "knownServers"
}
```

#### `CA`

Only nodes with a valid certificate and chain of trust are allowed to connect. For this trust mode, you must provide trust stores that contain a list of trust certificates.

```json title="CA trust mode configuration"
"sslConfig" : {
    "tls" : "STRICT",
    "generateKeyStoreIfNotExisted" : "false", //You can't generate trust stores when using CA
    "sslConfigType" : "SERVER_AND_CLIENT",
    "serverKeyStore" : "server-keystore",
    "serverKeyStorePassword" : "tessera",
    "serverTrustStore" : "server-truststore",
    "serverTrustStorePassword" : "tessera",
    "serverTrustMode" : "CA",
    "clientKeyStore" : "client-keystore",
    "clientKeyStorePassword" : "tessera",
    "clientTrustStore" : "client-truststore",
    "clientTrustStorePassword" : "tessera",
    "clientTrustMode" : "CA",
    "knownClientsFile" : "knownClients",
    "knownServersFile" : "knownServers"
}
```
