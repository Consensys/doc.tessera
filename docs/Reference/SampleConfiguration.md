---
description: Sample configuration file
---

# Configuration file

The [configuration file](../HowTo/Configure/Tessera.md) is a JSON file that must be specified when [starting Tessera].

Configuration items can be [overridden from the command line].

## Example configuration file

```json
{
  "useWhiteList": "boolean",
  "jdbc": {
    "url": "String",
    "username": "String",
    "password": "String",
    "autoCreateTables": "boolean"
  },
  "serverConfigs": [
    {
      "app": "ENCLAVE",
      // Defines us using a remote enclave, leave out if using built-in enclave
      "serverAddress": "http://localhost:9081",
      //Where to find the remote enclave
      "communicationType": "REST"
    },
    {
      "app": "ThirdParty",
      "serverAddress": "http://localhost:9081",
      "bindingAddress": "String - url with port e.g. http://127.0.0.1:9081",
      "communicationType": "REST",
      "cors" : {
          "allowedMethods" : ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
          "allowedOrigins" : ["http://localhost:63342"],
          "allowedHeaders" : ["content-type"],
          "allowCredentials" : true
      }
    },
    {
      "app": "Q2T",
      "serverAddress": "unix:/tmp/tm.ipc",
      "communicationType": "REST"
    },
    {
      "app": "P2P",
      "serverAddress": "http://localhost:9001",
      "bindingAddress": "String - url with port e.g. http://127.0.0.1:9001",
      "sslConfig": {
        "tls": "enum STRICT,OFF",
        "generateKeyStoreIfNotExisted": "boolean",
        "sslConfigType": "Enumeration: SERVER_ONLY, CLIENT_ONLY, SERVER_AND_CLIENT",
        "serverKeyStore": "Path",
        "serverTlsKeyPath": "Path",
        "serverTlsCertificatePath": "Path",
        "serverKeyStorePassword": "String",
        "serverTrustStore": "Path",
        "serverTrustCertificates": [
          "Path..."
        ],
        "serverTrustStorePassword": "String",
        "serverTrustMode": "Enumeration: CA, TOFU, WHITELIST, CA_OR_TOFU, NONE",
        "clientKeyStore": "Path",
        "clientTlsKeyPath": "Path",
        "clientTlsCertificatePath": "Path",
        "clientKeyStorePassword": "String",
        "clientTrustStore": "Path",
        "clientTrustCertificates": [
          "Path..."
        ],
        "clientTrustStorePassword": "String",
        "clientTrustMode": "Enumeration: CA, TOFU, WHITELIST, CA_OR_TOFU, NONE",
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
  ],
  "peer": [
    {
      "url": "url e.g. http://127.0.0.1:9000/"
    }
  ],
  "keys": {
    "passwordFile": "Path",
    "keyVaultConfigs": [
      {
        "keyVaultType": "Enumeration: AZURE, HASHICORP, AWS",
        "properties": "Map[string]string"
      }
    ],
    "keyData": [
      {
        "config": {
          "data": {
            "aopts": {
              "variant": "Enum : id,d or i",
              "memory": "int",
              "iterations": "int",
              "parallelism": "int"
            },
            "bytes": "String",
            "snonce": "String",
            "asalt": "String",
            "sbox": "String",
            "password": "String"
          },
          "type": "Enum: argon2sbox or unlocked. If unlocked is defined then config data is required. "
        },
        "privateKey": "String",
        "privateKeyPath": "Path",
        "azureVaultPrivateKeyId": "String",
        "azureVaultPrivateKeyVersion": "String",
        "publicKey": "String",
        "publicKeyPath": "Path",
        "azureVaultPublicKeyId": "String",
        "azureVaultPublicKeyVersion": "String",
        "hashicorpVaultSecretEngineName": "String",
        "hashicorpVaultSecretName": "String",
        "hashicorpVaultSecretVersion": "Integer (defaults to 0 (latest) if not set)",
        "hashicorpVaultPrivateKeyId": "String",
        "hashicorpVaultPublicKeyId": "String"
      }
    ]
  },
  "alwaysSendTo": [
    "String..."
  ],
  "bootstrapNode": false,
  "unixSocketFile": "Path",
  "features": {
    "enableRemoteKeyValidation": false,
    "enablePrivacyEnhancements": false
  },
  "encryptor": {
    "type": "Enumeration: NACL, EC",
    "properties":{
      "symmetricCipher":"String (defaults to AES/GCM/NoPadding if type = EC)",
      "ellipticCurve": "String (defaults to secp256r1 if type = EC)",
      "nonceLength": "String (defaults to 24 if type = EC)",
      "sharedKeyLength": "String (defaults to 32 if type = EC)"
    }
  }
}
```

## Configuration items

### `mode`

Set the `mode` to `orion` to use Tessera as the privacy manager when using
[Hyperledger Besu versions prior to 25.1.0 in non-GoQuorum mode](https://besu.hyperledger.org/en/stable/HowTo/Use-Privacy/Use-GoQuorum-compatible-privacy/).
[Enabling this mode](../HowTo/Configure/Orion-Mode.md) changes Tessera's behavior.
This property is optional.

### `useWhiteList`

Use the `useWhiteList` field to restrict connections to Tessera to specified peers. If set to `true`,
then only nodes listed in the [`peer`](#peer) list are allowed to connect.

### `jdbc`

Use the `jdbc` property to connect to the database. You can also specify an external database.
Any valid JDBC URL can be specified.

| Field                    | Required | Description                                                                 |
|--------------------------|--:- :----|-----------------------------------------------------------------------------|
|`url`                     | Required | JDBC URL of the database.                                                   |
|`username`                | Required | Database username.                                                          |
|`password`                | Required | Database password. You can also [encrypt the password using Jasypt].        |
|`autoCreateTables`        | Optional | Automatically generates the required database tables. If `false`, then users must manually create the required tables using the [supplied DDLs]. Defaults to `false`.|

### `serverConfigs`

Use the `serverConfigs` property to configure the following servers:

* [`ENCLAVE`](#enclave)
* [`P2P`](#p2p)
* [`Q2T`](#q2t)
* [`ThirdParty`](#thirdparty)

Each server can also be configured to:

* Secure communication using [TLS].
* Store API metrics in an [InfluxDB].

#### `ENCLAVE`

Defines an optional [remote enclave](../Concepts/Privacy-Manager/Enclave-types.md#remote-http-enclave).
Leave out if using a [local enclave](../Concepts/Privacy-Manager/Enclave-types.md#local-enclave).

| Field               | Required | Description                                                                              |
|---------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`               | Required | Type of server being configured. Set to `ENCLAVE`.                                       |
| `serverAddress`     | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`    | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType` | Required | Type of server communication. Only `REST` is currently supported.                        |
| `influxConfig`      | Optional | [Configure the server to use InfluxDB](#influxconfig).                                   |
| `sslConfig   `      | Optional | [Secure communication with TLS](#sslconfig).                                             |

#### `P2P`

The peer-to-peer (P2P) [server](../HowTo/Configure/TesseraAPI.md) is used to perform discovery and send and receive
encrypted payloads.

| Field               | Required | Description                                                                              |
|---------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`               | Required | Type of server being configured. Set to `P2P`.                                           |
| `serverAddress`     | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`    | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType` | Required | Type of server communication. Only `REST` is currently supported.                        |
| `influxConfig`      | Optional | [Configure the server to use InfluxDB](#influxconfig).                                   |
| `sslConfig   `      | Optional | [Secure communication with TLS](#sslconfig).                                             |

#### `Q2T`

The Quorum-to-Tessera (Q2T) [server](../HowTo/Configure/TesseraAPI.md) is used to check if the Tessera node is running,
and to send and receive private transactions.

| Field               | Required | Description                                                                              |
|---------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`               | Required | Type of server being configured. Set to `Q2T`.                                           |
| `serverAddress`     | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`    | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType` | Required | Type of server communication. Only `REST` is currently supported.                        |
| `influxConfig`      | Optional | [Configure the server to use InfluxDB](#influxconfig).                                   |
| `sslConfig   `      | Optional | [Secure communication with TLS](#sslconfig).                                             |

#### `ThirdParty`

Tessera uses the `ThirdParty` [server](../HowTo/Configure/TesseraAPI.md) to store encrypted payloads for external applications.

| Field               | Required | Description                                                                              |
|---------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`               | Required | Type of server being configured. Set to `ThirdParty`.                                    |
| `serverAddress`     | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`    | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType` | Required | Type of server communication. Only `REST` is currently supported.                        |
| `cors`              | Optional | [Configure CORS](#cors) to control access to resources outside the domain.               |
| `influxConfig`      | Optional | [Configure the server to use InfluxDB](#influxconfig).                                   |
| `sslConfig   `      | Optional | [Secure communication with TLS](#sslconfig).                                             |

#### `influxConfig`

Configure an InfuxDB [server](../HowTo/Configure/TesseraAPI.md) to record metrics.

| Field                | Required | Description                                                                                           |
|----------------------|--:- :----|-------------------------------------------------------------------------------------------------------|
| `serverAddress`      | Required | InfluxDB server address.                                                                              |
| `dbName`             | Required | InfluxDB database name.                                                                               |
| `pushIntervalInSecs` | Required | How often, in seconds, Tessera pushes metrics to the database.                                        |
| `sslConfig`          | Optional | [Configure one-way TLS]. If TLS is enabled, clients can validate the identity of the InfluxDB server. |

#### `sslConfig`

| Field                          | Required | Description                                                                                   |
|--------------------------------|--:- :----|-----------------------------------------------------------------------------------------------|
| `tls`                          | Required | Setting to `STRICT` [enables TLS](../HowTo/Configure/TLS.md). Setting to `OFF` disables TLS.  |
| `generateKeyStoreIfNotExisted` | Optional | Tessera checks whether files exist in the `serverKeyStore` and `clientKeyStore` paths. If the files don't exist, new key stores are generated in the `serverKeyStore` and `clientKeyStore` paths. |
| `sslConfigType`                | Optional | [TLS configuration type] based on server configuration, options are `SERVER_ONLY`, `CLIENT_ONLY`, `SERVER_AND_CLIENT` |
| `serverKeyStore`               | Optional | Path to server key store.                                                                     |
| `serverKeyStorePassword`       | Optional | [Password] required for `serverKeyStore`.                                                     |
| `serverTlsKeyPath`             | Optional | File containing the private key for the server TLS certificate.                               |
| `serverTlsCertificatePath`     | Optional | File containing the server TLS certificate.                                                   |
| `serverTrustStore`             | Optional | Path to the server truststore.                                                                |
| `serverTrustStorePassword`     | Optional | [Password] for the server trust store.                                                        |
| `serverTrustCertificates`      | Optional | Array of trust store certificates if `serverTrustStore` is undefined.                         |
| `serverTrustMode`              | Required | [Trust mode] for the server, options are `TOFU`, `WHITELIST`, `CA`, `CA_OR_TOFU`, and `NONE`. |
| `clientKeyStore`               | Optional | Path to client [key store].                                                                   |
| `clientKeyStorePassword`       | Optional | [Password] for the client key store.                                                          |
| `clientTlsKeyPath`             | Optional | Path to client TLS key.                                                                       |
| `clientTlsCertificatePath`     | Optional | Path to client TLS certificate.                                                               |
| `clientTrustStore`             | Optional | Path to client trust store.                                                                   |
| `clientTrustStorePassword`     | Optional | [Password] for the client trust store.                                                        |
| `clientTrustCertificates`      | Optional | Array of trust store certificates if `clientTrustStore` is undefined.                         |
| `clientTrustMode`              | Required | [Trust mode] for the client, options are `TOFU`, `WHITELIST`, `CA`, `CA_OR_TOFU`, and `NONE`. |
| `knownClientsFile`             | Optional | Known clients file for the server. This contains the fingerprints of public keys of other nodes that are allowed to connect to this node. |
| `knownServersFile`             | Optional | Known servers file for the client. This contains the fingerprints of public keys of other nodes that this node has encountered. |
| `environmentVariablePrefix`    | Optional | Prefix to uniquely identify environment variables for this server SSL configuration.          |

#### `cors`

Configure [cross-origin resource sharing (CORS)](../HowTo/Configure/TesseraAPI.md#configure-cors) to control access to
resources outside the domain.

!!! important

    CORS is only supported with the [`ThirdParty`](#thirdparty) server type.

| Field              | Required | Description                                                        |
|--------------------|--:- :----|--------------------------------------------------------------------|
| `allowedMethods`   | Optional | List of methods to allow. Options are `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`, and `HEAD`. If not included, all methods are allowed. |
| `allowedOrigins`   | Optional | List of comma-separated origin domain URLs for CORS validation. Each entry in the list can contain the “*” (wildcard) character to match any sequence of characters. For example, `*localhost` matches `http://localhost` or `https://localhost`. |
| `allowedHeaders`   | Optional | List of allowed headers. If not included, the request `Access-Control-Request-Headers` are copied into the response as `Access-Control-Allow-Headers`. |
| `allowCredentials` | Optional | The value for the Access-Control-Allow-Credentials response header. The default is `true`. |

### `peer`

[List of Tessera node URLs] used to discover other nodes.

### `keys`

Configure access to your [keys](../HowTo/Configure/Keys/Overview.md).

| Field             | Required | Description                                                        |
|-------------------|--:- :----|--------------------------------------------------------------------|
| `passwordFile`    | Optional | [Path to the password file].                                       |
| `keyVaultConfigs` | Optional | [Configuration details of the vault being used](#keyvaultvonfigs). |
| `keyData`         | Required | [Details to access the private and public key pair](#keydata).     |

#### `keyVaultConfigs`

Configuration details for the vault used.

| Field          | Required | Description                                                                          |
|----------------|--:- :----|--------------------------------------------------------------------------------------|
| `keyVaultType` | Optional | Type of vault. Options are `HASHICORP`, `AWS`, and `AZURE`.                          |
| `properties`   | Optional | Properties to access [AWS Secrets Manager], [Azure Key Vault], or [HashiCorp Vault]. |

#### `keyData`

Configuration details to [access the private key and public key](../HowTo/Configure/Keys/Overview.md).

| Field                            | Required | Description                                                                  |
|----------------------------------|--:- :----|------------------------------------------------------------------------------|
| `config`                         | Optional | Configuration details for the [protected] or [unprotected] inline key pairs. |
| `privateKey`                     | Optional | Private key in plain text.                                                   |
| `privateKeyPath`                 | Optional | [Path to the private key file].                                              |
| `publicKey`                      | Optional | Public key in plain text.                                                    |
| `publicKeyPath`                  | Optional | [Path to the public key file].                                               |
| `awsSecretsManagerPublicKeyId`   | Optional | ID of the public key secret in [AWS Secrets Manager].                        |
| `awsSecretsManagerPrivateKeyId`  | Optional | ID of the private key secret in [AWS Secrets Manager].                       |
| `azureVaultPrivateKeyId`         | Optional | ID of the private key secret in [Azure Key Vault].                           |
| `azureVaultPrivateKeyVersion`    | Optional | Version of the private key to access in [Azure Key Vault].                   |
| `azureVaultPublicKeyId`          | Optional | ID of the public key secret in [Azure Key Vault].                            |
| `azureVaultPublicKeyVersion`     | Optional | Version of the private key to access in [Azure Key Vault].                   |
| `hashicorpVaultSecretEngineName` | Optional | Name of the [HashiCorp Vault] secrets engine.                                |
| `hashicorpVaultSecretName`       | Optional | Name of the secret in the [HashiCorp Vault] secrets engine.                  |
| `hashicorpVaultSecretVersion`    | Optional | Version of the secret in the [HashiCorp Vault] secrets engine.               |
| `hashicorpVaultPrivateKeyId`     | Optional | ID of the private key secret in [HashiCorp Vault].                           |
| `hashicorpVaultPublicKeyId`      | Optional | ID of the public key secret in [HashiCorp Vault].                            |

### `alwaysSendTo`

Comma-separated list of public keys to include as recipients for every transaction sent through the node.
This allows you to configure a node that is sent a copy of every transaction, even if it isn't specified as a party to
the transaction.

This can be used, for example, to send a copy of every transaction to a node for audit purposes.

### `bootstrapNode`

If set to `true`, the node functions as a [bootstrap](BootstrapSampleConfiguration.md) for other nodes.

### `unixSocketFile`

Path to the Unix socket file.

### `features`

Enables additional security and privacy features.

| Field                         | Required | Description                                                                                |
|-------------------------------|--:- :----|--------------------------------------------------------------------------------------------|
| `enableRemoteKeyValidation`   | Optional | [Checks that a remote node owns the public keys being advertised]. The default is `false`. |
| `enablePrivacyEnhancements`   | Optional | Enable [privacy enhancements](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivacyEnhancements/). The default is `false`. |
| `enableMultiplePrivateStates` | Optional | Enable [multiple private states](../HowTo/Configure/Multiple-private-state.md). The default is `false`. |

### `encryptor`

[Configure Tessera to use alternative curves and symmetric ciphers].
If an encryptor configuration is not specified, the default `NaCl` encryptor is used.

| Field  | Description                                                                                |
|:-------|:-------------------------------------------------------------------------------------------|
| `type` | The encryptor type. Possible values are `EC`, `NACL`, and `CUSTOM`. The default is `NACL`. |

If `type` is set to `EC`, the following `properties` fields can also be configured:

| Field             | Default             | Description                                                                                                                                            |
|:------------------|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ellipticCurve`   | `secp256r1`         | The elliptic curve to use. See [SunEC provider] for other options. Depending on the JCE provider you use, there may be additional curves available.    |
| `symmetricCipher` | `AES/GCM/NoPadding` | The symmetric cipher to use for encrypting data (GCM is mandatory as an initialization vector is supplied during encryption).                          |
| `nonceLength`     | `24`                | The nonce length (used as the initialization vector (IV) for symmetric encryption).                                                                    |
| `sharedKeyLength` | `32`                | The key length used for symmetric encryption (the key derivation operation always produces 32-byte keys and the encryption algorithm must support it). |

<!--links-->
[starting Tessera]: ../HowTo/Get-started/Start-Tessera.md
[overridden from the command line]: ../HowTo/Configure/Override-config.md
[encrypt the password using Jasypt]: ../HowTo/Configure/Database.md#encrypt-the-database-password
[supplied DDLs]: https://github.com/ConsenSys/tessera/tree/master/ddls/create-table
[InfluxDB]: ../HowTo/Use/Monitoring.md
[TLS]: ../HowTo/Configure/TLS.md
[Configure one-way TLS]: ../HowTo/Use/Monitoring.md#influxdb-tls-configuration
[Password]: ../HowTo/Configure/TLS.md#passwords
[Trust mode]: ../HowTo/Configure/TLS.md#trust-modes
[key store]: ../HowTo/Configure/TLS.md#key-stores
[List of Tessera node URLs]: ../HowTo/Configure/Peer-discovery.md#specify-peers
[Path to the password file]: ../HowTo/Configure/Keys/Secure-Keys.md
[AWS Secrets Manager]: ../HowTo/Configure/Keys/AWS-Secrets-Pairs.md
[Azure Key Vault]: ../HowTo/Configure/Keys/Azure-Key-Vault-Pairs.md
[HashiCorp Vault]: ../HowTo/Configure/Keys/Hashicorp-Vault-Pairs.md
[protected]: ../HowTo/Configure/Keys/Inline-Key-Pairs.md#protected
[unprotected]: ../HowTo/Configure/Keys/Inline-Key-Pairs.md#unprotected
[Path to the private key file]: ../HowTo/Configure/Keys/File-Based-Key-Pairs.md
[Path to the public key file]: ../HowTo/Configure/Keys/File-Based-Key-Pairs.md
[Checks that a remote node owns the public keys being advertised]: ../HowTo/Configure/Peer-discovery.md#enable-remote-key-validation
[Enables privacy enhancement features]: ../HowTo/Configure/Tessera.md#privacy-enhancements-flag
[SunEC provider]: https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC
[Configure Tessera to use alternative curves and symmetric ciphers]: ../HowTo/Configure/Cryptographic-elliptic-curves.md
[TLS configuration type]: ../HowTo/Configure/TLS.md#configuration-type
