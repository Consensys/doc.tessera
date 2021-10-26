---
description: Configuring TLS
---

# Configure TLS

You can enable using TLS/SSL communications by setting [`tls`](../../Reference/SampleConfiguration.md#sslconfig) in the
Tessera [configuration file](Tessera.md) to `STRICT`.

If the value is set to `OFF`, the rest of the `sslConfig` items aren't considered.

!!! important

    When using TLS, update the hostname of the node to use `https` instead of `http`.

## Configuration items

!!! example "TLS/SSL configuration"

    ```json
    {
      "sslConfig": {
        "tls": "[Authentication mode : OFF,STRICT]",

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
        "clientAuth" : "[Configure if SSL needs client authentication - boolean - default is true]"
      }
    }
    ```

When TLS/SSL is enabled, each node must have certificates and keys defined for both client-side and server-side.
These can be defined in multiple ways:

- Secured and unsecured `.jks` (Java keystore) format files.
  Set the following configuration items to the corresponding file paths:
    - `serverKeyStore`, `serverKeyStorePassword`, `serverTrustStore`, `serverTrustStorePassword`
    - `clientKeyStore`, `clientKeyStorePassword`, `clientTrustStore`, `clientTrustStorePassword`
- `.pem` format certificate and key files.
  Set the following configuration items to the corresponding file paths:
    - `serverTlsKeyPath`, `serverTlsCertificatePath`, `serverTrustCertificates`
    - `clientTlsKeyPath`, `clientTlsCertificatePath`, `clientTrustCertificates`

    !!! example "TLS/SSL configuration using `.pem` format files"

        ```json
        "sslConfig" : {
        "tls" : "STRICT",
        "generateKeyStoreIfNotExisted" : "false",
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

!!! important

    `.jks` files take precedence over `.pem` files if both are provided for client-side or server-side.

To enable one-way SSL, set `clientAuth` to `false`.

## Key stores

### Passwords

You can provide passwords for secured `.jks` key stores in multiple ways, and in the following order of precedence:

#### 1. Prefixed environment variables

* `<PREFIX>_TESSERA_SERVER_KEYSTORE_PWD`, `<PREFIX>_TESSERA_SERVER_TRUSTSTORE_PWD`
* `<PREFIX>_TESSERA_CLIENT_KEYSTORE_PWD`, `<PREFIX>_TESSERA_CLIENT_TRUSTSTORE_PWD`

The prefixed environment variables are only applied to the servers with that `environmentVariablePrefix` value defined
in their configuration.
This allows, for example, a P2P and ADMIN server to be configured with different prefixes, `P2P` and `ADMIN`.
Different key stores can then be used for each server and the individual passwords provided with `P2P_<...>` and `ADMIN_<...>`.

#### 2. Configuration file

* `serverKeyStorePassword`, `serverTrustStorePassword`
* `clientKeyStorePassword`, `clientTrustStorePassword`

#### 3. Global environment variables

* `TESSERA_SERVER_KEYSTORE_PWD`, `TESSERA_SERVER_TRUSTSTORE_PWD`
* `TESSERA_CLIENT_KEYSTORE_PWD`, `TESSERA_CLIENT_TRUSTSTORE_PWD`

The global environment variables, if set, are applied to all server configurations defined in the configuration file.

!!! note

    If a P2P and ADMIN server are both configured with TLS, the values set for the global environment variables are used
    for both.
    These values are ignored if the passwords are also provided in the configuration file or as prefixed environment variables.

### Generating key stores

If key stores don't already exist, Tessera can generate `.jks` (Java key store) files for use with non-CA [trust modes](#trust-modes).

If you set `generateKeyStoreIfNotExisted` to `true`, Tessera checks whether files already exist at the paths provided in
the `serverKeyStore` and `clientKeyStore` configuration values.
If the files do not exist:

1. New key stores are generated and saved at the `serverKeyStore` and `clientKeyStore` paths.
1. The key stores are secured using the corresponding [passwords](#passwords) if they are provided.

### Trust modes

The trust mode for both client and server must also be specified.
Multiple trust modes are supported: `TOFU`, `WHITELIST`, `CA`, `CA_OR_TOFU`, and `NONE`.

!!! note

    If you use TLS on multiple endpoints (for example, P2P and Q2T) and run everything on localhost (or a single
    machine), you must use different `knownClients` and `knownServers` files for the different endpoints.

#### `TOFU` (Trust-on-first-use)

In trust-on-first-use (`TOFU`) trust mode, only the first node that connects identifying as a certain host is allowed to
connect as the same host in the future.
When connecting for the first time, the host and its certificate are added to `knownClientsFile` (for server), or
`knownServersFile` (for client).
These files are generated if they don't already exist, using the values specified in `knownClientsFile` and `knownServersFile`.

!!! example "`TOFU` trust mode configuration"

    ```json
    "sslConfig" : {
        "tls" : "STRICT",
        "generateKeyStoreIfNotExisted" : "true",
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

#### WHITELIST

In `WHITELIST` trust mode, only nodes that have previously connected to this node and have been added to the
`knownClients` file are allowed to connect.
Similarly, this node is only allowed to make connections to nodes that have been added to the `knownServers` file.
This trust mode doesn't add new entries to the `knownClients` or `knownServers` files.

With this trust mode, the whitelist files (`knownClientsFile` and `knownServersFile`) must be provided.

!!! example "`WHITELIST` trust mode configuration"

    ```json
    "sslConfig" : {
        "tls" : "STRICT",
        "generateKeyStoreIfNotExisted" : "true",
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

#### CA

In `CA` trust mode, only nodes with a valid certificate and chain of trust are allowed to connect.
For this trust mode, trust stores must be provided and must contain a list of trust certificates.

!!! example "`CA` trust mode configuration"

    ```json
    "sslConfig" : {
        "tls" : "STRICT",
        "generateKeyStoreIfNotExisted" : "false", // You can't generate trust stores when using CA
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
