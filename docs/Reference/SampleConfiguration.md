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
      "enabled": true,
      "serverAddress": "http://localhost:9081",
      //Where to find the remote enclave
      "communicationType": "REST"
    },
    {
      "app": "ThirdParty",
      "enabled": true,
      "serverAddress": "http://localhost:9081",
      "bindingAddress": "String - url with port e.g. http://127.0.0.1:9081",
      "communicationType": "REST"
    },
    {
      "app": "Q2T",
      "enabled": true,
      "serverAddress": "unix:/tmp/tm.ipc",
      "communicationType": "REST"
    },
    {
      "app": "P2P",
      "enabled": true,
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

## `useWhiteList`

Use the `useWhiteList` field to restrict connections to Tessera to specified peers. If set to `true`,
then only nodes listed in the [`peer`](#peer) list are allowed to connect.

## `jdbc`

Use the `jdbc` property to connect to the database. You can also specify an external database.
Any valid JDBC URL can be specified.


| Field                    | Required | Description                                                | Default                 |
|--------------------------|--:- :----|------------------------------------------------------------|-------------------------|
|`url`                     | Required | JDBC URL of the database.                                  | None                    |
|`username`                | Required | Database username.                                         | None                    |
|`password`                | Required | Database password. You can also [encrypt the password using Jasypt].                                         | None                    |
|`autoCreateTables`        | Optional | Automatically generates the required database tables.      | `false`                 |

<!--links-->
[starting Tessera]: ../HowTo/Get-Started/Start-Tessera.md
[overridden from the command line]: ../HowTo/Configure/Override-config.md
[encrypt the password using Jasypt]: ../HowTo/Configure/Tessera.md
