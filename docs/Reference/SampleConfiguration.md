---
description: Sample configuration file
---

# Configuration File

The Configuration file is a JSON file that must be specified when [starting Tessera].

Configuration entries can be [overridden from the command line].

!!! important
    The `keys.azureKeyVaultConfig` and `keys.hashicorpKeyVaultConfig` fields are now deprecated. Instead,
    the generic `keys.keyVaultConfigs` should be used. See [Keys configuration](../HowTo/Configure/Keys.md) for more info.

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
      "communicationType": "REST"
      "cors" : {
          "allowedMethods" : ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
          "allowedOrigins" : ["http://localhost:63342"],
          "allowedHeaders" : ["content-type"],
          "allowCredentials" : true
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

## `mode`

Set the `mode` to `orion` to use Tessera as the privacy manager when using [Hyperledger Besu] in
non-GoQuorum mode.

Enabling this mode [changes Tessera’s behaviour].

This property is optional.

## `useWhiteList`

Use the `useWhiteList` field to restrict connections to Tessera to specified peers. If set to `true`,
then only nodes listed in the [`peer`](#peer) list are allowed to connect.

## `jdbc`

Use the `jdbc` property to connect to the database. You can also specify an external database.
Any valid JDBC URL can be specified.

| Field                    | Required | Description                                                                 |
|--------------------------|--:- :----|-----------------------------------------------------------------------------|
|`url`                     | Required | JDBC URL of the database.                                                   |
|`username`                | Required | Database username.                                                          |
|`password`                | Required | Database password. You can also [encrypt the password using Jasypt].        |
|`autoCreateTables`        | Optional | Automatically generates the required database tables. If `false`, then users must manually create the required tables using the [supplied DDLs]. Defaults to `false`.|

## `serverConfigs`

Use the `serverConfigs` property to configure the following servers:

* [`ENCLAVE`](#enclave)
* [`P2P`](#p2p)
* [`Q2T`](#q2t)
* [`ThirdParty`](#thirdparty)

Each server can also be configured to:

* Secure communication using [TLS]
* Store API metrics in an [InfluxDB]

### `ENCLAVE`

Defines an optional remote enclave. Leave out if using a [local enclave](../Concepts/Enclave-types.md).

| Field                    | Required | Description                                                                              |
|--------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`                    | Required | Type of server being configured. Set to `ENCLAVE`.                                       |
| `serverAddress`          | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`         | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType`      | Required | Type of server communication. Only `REST` is currently supported.                        |
| `influxConfig`           | Optional | [Configure the server to use InfluxDB](#influxconfig).                                |
| `sslConfig   `           | Optional | [Secure communication with TLS](#sslconfig).                                             |

### `P2P`

The P2P (peer-to-peer) server is used to perform discovery and send and receive encrypted payloads.

| Field                    | Required | Description                                                                              |
|--------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`                    | Required | Type of server being configured. Set to `P2P`.                                           |
| `serverAddress`          | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`         | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType`      | Required | Type of server communication. Only `REST` is currently supported.                        |
| `influxConfig`           | Optional | [Configure the server to use InfluxDB](#influxconfig).                                |
| `sslConfig   `           | Optional | [Secure communication with TLS](#sslconfig).                                             |

### `Q2T`

The Q2T (Quorum-to-Tessera) server is used to check if the Tessera node is running, and send and
receive private transactions.

| Field                    | Required | Description                                                                              |
|--------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`                    | Required | Type of server being configured. Set to `Q2T`.                                           |
| `serverAddress`          | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`         | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType`      | Required | Type of server communication. Only `REST` is currently supported.                        |
| `influxConfig`           | Optional | [Configure the server to use InfluxDB](#influxconfig).                                   |
| `sslConfig   `           | Optional | [Secure communication with TLS](#sslconfig).                                             |

### `ThirdParty`

Tessera uses the server to store encrypted payloads for external applications.

| Field                    | Required | Description                                                                              |
|--------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `app`                    | Required | Type of server being configured. Set to `ThirdParty`.                                    |
| `serverAddress`          | Required | [Server address](../HowTo/Configure/TesseraAPI.md).                                      |
| `bindingAddress`         | Optional | Specify a bind to an internal IP while advertising an external IP using `serverAddress`. |
| `communicationType`      | Required | Type of server communication. Only `REST` is currently supported.                        |
| `cors`                   | Optional | [Configure CORS](#cors) to control access to resources outside the domain.               |
| `influxConfig`           | Optional | [Configure the server to use InfluxDB](#influxconfig).                                   |
| `sslConfig   `           | Optional | [Secure communication with TLS](#sslconfig).                                             |

### `influxConfig`

Configure InfuxDB settings to record metrics.

| Field                    | Required | Description                                                                                |
|--------------------------|--:- :----|--------------------------------------------------------------------------------------------|
| `serverAddress`          | Required | InfluxDB server address.                                                                   |
| `dbName`                 | Required | InfluxDB database name.                                                                    |
| `pushIntervalInSecs`     | Required | How frequently Tessera pushes metrics to the database.                                     |
| `sslConfig   `           | Optional | [Configure one-way TLS]; meaning clients can validate the identity of the InfluxDB server. |

### `sslConfig`

| Field                    | Required | Description                                                                                  |
|--------------------------|--:- :----|----------------------------------------------------------------------------------------------|
| `tls`                    | Required | Authentication mode. Options are `STRICT` or `OFF`. If set to `OFF`, then TLS is disabled.   |
| `generateKeyStoreIfNotExisted` | Optional | Tessera checks whether files exist in the `serverKeyStore` and `clientKeyStore` paths. If the files do not exist, new keystores are generated in the `serverKeyStore` and `clientKeyStore` paths.                                           |
| `serverKeyStore`         | Optional | Path to server keystore.                                                                     |
| `serverKeyStorePassword` | Optional | [Password] required for `serverKeyStore`.                                                    |
| `serverTlsKeyPath`       | Optional | File containing the private key for the server TLS certificate.                              |
| `serverTlsCertificatePath` | Optional | File containing the server TLS certificate.                                                |
| `serverTrustStore`         | Optional | Path to the server truststore.                                                             |
| `serverTrustStorePassword` | Optional | [Password] for the server truststore.                                                      |
| `serverTrustCertificates`  | Optional | Array of truststore certificates if `serverTrustStore` is undefined.                       |
| `serverTrustMode`        | Required | [Trust Mode] for the server, options are `TOFU`, `WHITELIST`, `CA`, `CA_OR_TOFU`, and `NONE`. |
| `clientKeyStore`         | Optional | Path to client [keystore].                                                                   |
| `clientKeyStorePassword` | Optional | [Password] for the client keystore.                                                          |
| `clientTlsKeyPath`       | Optional | Path to client TLS key.                                                                      |
| `clientTlsCertificatePath` | Optional | Path to client TLS certificate.                                                            |
| `clientTrustStore`         | Optional | Path to client truststore.                                                                 |
| `clientTrustStorePassword` | Optional | [Password] for the client truststore.                                                      |
| `clientTrustCertificates`  | Optional | Array of truststore certificates if `clientTrustStore` is undefined.                       |
| `clientTrustMode`        | Required | [Trust Mode] for the client, options are `TOFU`, `WHITELIST`, `CA`, `CA_OR_TOFU`, and `NONE`. |
| `knownClientsFile`         | Optional | Known clients file for the server. This contains the fingerprints of public keys of other nodes that are allowed to connect to this node.  |
| `knownServersFile`         | Optional | Known servers file for the client. This contains the fingerprints of public keys of other nodes that this node has encountered. |
| `environmentVariablePrefix`| Optional | Prefix to uniquely identify environment variables for this server SSL configuration.       |

### `cors`

Configure cross-origin resource sharing (CORS) to control access to resources outside the domain.

!!! important

    Only supported with the [`ThirdParty`](#thirdparty) server type.

| Field                    | Required | Description                                                        |
|--------------------------|--:- :----|--------------------------------------------------------------------|
| `allowedMethods`         | Optional | List of methods to allow. Options are `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`, and `HEAD`. If omitted, then all methods are allowed.  |
| `allowedOrigins`         | Optional | List of comma-separated origin domain URLs for CORS validation. Each entry in the list can contain the “*” (wildcard) character to match any sequence of characters. Example: `*localhost` would match `http://localhost` or `https://localhost`. |
| `allowedHeaders`         | Optional | List of allowed headers. If omitted, the request `Access-Control-Request-Headers` are copied into the response as `Access-Control-Allow-Headers`.     |
| `allowCredentials`       | Optional | The value for the Access-Control-Allow-Credentials response header. Defaults to `true`.     |

## `peer`

[List of Tessera node URLs] used to discover other nodes.

## `keys`

Configure access to your keys.

| Field                    | Required | Description                                                        |
|--------------------------|--:- :----|--------------------------------------------------------------------|
| `passwordFile`           | Optional | [Path to the password file].                                       |
| `keyVaultConfigs`        | Optional | [Configuration details of the vault being used](#keyvaultvonfigs). |
| `keyData`                | Required | [Details to access the private and public key pair](#keydata).     |

### `keyVaultConfigs`

Configuration details for the vault being used.

| Field                    | Required | Description                                                                              |
|--------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `keyVaultType`           | Optional | Type of vault. Options are `HASHICORP`, `AWS`, and `AZURE`.                              |
| `properties`             | Optional | Properties to access the [AWS Secrets Manager], [Azure Key Vault], or [HashiCorp Vault] vaults. |

### `keyData`

Details to access the private key and public key.

| Field                         | Required | Description                                                                              |
|-------------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `config`                      | Optional | Configuration details for the [protected] or [unprotected] inline key pairs.             |
| `privateKey`                  | Optional | Private key in plain text.                                                               |
| `privateKeyPath`              | Optional | [Path to the private key file].                                                          |
| `publicKey`                   | Optional | Public key in plain text.                                                                |
| `publicKeyPath`               | Optional | [Path to the public key file].                                                           |
| `awsSecretsManagerPublicKeyId` | Optional | ID of the public key secret in [AWS Secrets Manager].                                   |
| `awsSecretsManagerPrivateKeyId` | Optional | ID of the private key secret in [AWS Secrets Manager].                                 |
| `azureVaultPrivateKeyId`      | Optional | ID of the private key secret in [Azure Key Vault].                                       |
| `azureVaultPrivateKeyVersion` | Optional | Version of the private key to access in [Azure Key Vault].                               |
| `azureVaultPublicKeyId`       | Optional | ID of the public key secret in [Azure Key Vault].                                        |
| `azureVaultPublicKeyVersion`  | Optional | Version of the private key to access in [Azure Key Vault].                               |
| `hashicorpVaultSecretEngineName` | Optional | Name of the [HashiCorp Vault] secrets engine.                                         |
| `hashicorpVaultSecretName`    | Optional | Name of the secret in the [HashiCorp Vault] secrets engine.                              |
| `hashicorpVaultSecretVersion` | Optional | Version of the secret in the [HashiCorp Vault] secrets engine.                           |
| `hashicorpVaultPrivateKeyId`  | Optional | ID of the private key secret in [HashiCorp Vault].                                       |
| `hashicorpVaultPublicKeyId`   | Optional | ID of the public key secret in [HashiCorp Vault].                                        |

## `alwaysSendTo`

Comma-separated list of public keys to include as recipients for every transaction sent through the
node. This allows you to configure a node that is sent a copy of every transaction, even if it is
not specified as a party to the transaction.

This could be used, for example, to send a copy of every transaction to a
node for audit purposes. Specify the public keys to forward transactions to, and these will be
included as if you had specified them on the `privateFor` field.

## `bootstrapNode`

If set to `true`, then the node functions as a bootstrap for other nodes.

## `unixSocketFile`

Path to the Unix socket file.

## `features`

Enables additional security and privacy features.

| Field                       | Required | Description                                                                              |
|-----------------------------|--:- :----|------------------------------------------------------------------------------------------|
| `enableRemoteKeyValidation` | Optional | [Checks that a remote node owns the public keys being advertised]. Defaults to `false`   |
| `enablePrivacyEnhancements` | Optional | Enable Party Protection (PP) and Private State Validation (PSV). Defaults to `false`.    |

## `encryptor`

[Configure Tessera to use alternative curves and symmetric ciphers].

If an encryptor configuration is not specified, the default NaCl encryptor is used.

| Field  | Description                                                           | Default Value |
|:-------|:----------------------------------------------------------------------|:--------------|
| `type` | [The encryptor type]. Possible values are `EC`, `NACL`, and `CUSTOM`. | `NACL`        |

If `type` is set to `EC`, the following `properties` fields can also be configured:

| Field             | Default             | Description                                                                                                                                                              |
|:------------------|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ellipticCurve`   | `secp256r1`         | The elliptic curve to use. See [SunEC provider] for other options. Depending on the JCE provider you are using there may be additional curves available.                 |
| `symmetricCipher` | `AES/GCM/NoPadding` | The symmetric cipher to use for encrypting data (GCM IS MANDATORY as an initialisation vector is supplied during encryption).                                            |
| `nonceLength`     | `24`                | The nonce length (used as the initialization vector - IV - for symmetric encryption).                                                                                    |
| `sharedKeyLength` | `32`                | The key length used for symmetric encryption (keep in mind the key derivation operation always produces 32 byte keys and that the encryption algorithm must support it). |

<!--links-->
[starting Tessera]: ../HowTo/Get-started/Start-Tessera.md
[overridden from the command line]: ../HowTo/Configure/Override-config.md
[encrypt the password using Jasypt]: ../HowTo/Configure/Database.md#encrypt-the-database-password
[supplied DDLs]: https://github.com/ConsenSys/tessera/tree/master/ddls/create-table
[InfluxDB]: ../HowTo/Use/Monitoring.md
[TLS]: ../HowTo/Configure/TLS.md
[Configure one-way TLS]: ../HowTo/Use/Monitoring.md#influxdb-tls-configuration
[Password]: ../HowTo/Configure/TLS.md#passwords
[Trust Mode]: ../HowTo/Configure/TLS.md#trust-modes
[keystore]: ../HowTo/Configure/TLS.md#keystores
[List of Tessera node URLs]: ../HowTo/Configure/Peer-discovery.md#specify-peers
[Path to the password file]: ../HowTo/Generate-keys.md#securing-private-keys
[AWS Secrets Manager]: ../HowTo/Configure/Keys.md#aws-secrets-manager-key-pairs
[Azure Key Vault]: ../HowTo/Configure/Keys.md#azure-key-vault-key-pairs
[HashiCorp Vault]: ../HowTo/Configure/Keys.md#hashicorp-vault-key-pairs
[protected]: ../HowTo/Configure/Keys.md#protected
[unprotected]: ../HowTo/Configure/Keys.md#unprotected
[Path to the private key file]: ../HowTo/Configure/Keys.md#filesystem-key-pairs
[Path to the public key file]: ../HowTo/Configure/Keys.md#filesystem-key-pairs
[Checks that a remote node owns the public keys being advertised]: ../HowTo/Configure/Peer-discovery.md#enable-remote-key-validation
[Enables privacy enhancement features]: ../HowTo/Configure/Tessera.md#privacy-enhancements-flag
[SunEC provider]: https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC
[The encryptor type]: ../HowTo/Configure/Cryptographic-elliptic-curves.md
[Hyperledger Besu-extended privacy]: ../HowTo/Configure/Orion-Mode.md
[Configure Tessera to use alternative curves and symmetric ciphers]: ../HowTo/Configure/Cryptographic-elliptic-curves.md
[Hyperledger Besu]: https://besu.hyperledger.org/
[changes Tessera’s behaviour]: ../HowTo/Configure/Orion-Mode

