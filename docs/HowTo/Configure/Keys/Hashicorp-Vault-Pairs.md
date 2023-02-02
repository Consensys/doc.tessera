---
title: HashiCorp Vault keys
description: Configure HashiCorp Vault key pairs.
sidebar_position: 7
---

# HashiCorp Vault key pairs

To configure Tessera to use HashiCorp Vault [key pairs](Overview.md), provide the vault information in the [configuration file](../../../Reference/SampleConfiguration.md#keys). You can use Tessera to [generate HashiCorp Vault keys](../../Generate-Keys/Hashicorp-Vault.md).

You can provide additional configuration items if the vault is configured to use [TLS], and if the AppRole authentication method is used at a non-default path.

```json title="HashiCorp Vault key pair configuration"
"keys": {
    "keyVaultConfigs": [
        {
            "keyVaultType": "HASHICORP",
            "properties": {
                "url": "https://localhost:8200",
                "tlsKeyStorePath": "/path/to/keystore.jks",
                "tlsTrustStorePath": "/path/to/truststore.jks",
                "approlePath": "not-default"
            }
        }
    ],
    "keyData": [
        {
            "hashicorpVaultSecretEngineName": "engine",
            "hashicorpVaultSecretName": "secret",
            "hashicorpVaultSecretVersion": 1,
            "hashicorpVaultPrivateKeyId": "privateKey",
            "hashicorpVaultPublicKeyId": "publicKey",
        }
    ]
}
```

This example configuration retrieves version `1` of the secret `engine/secret` from its corresponding values for `privateKey` and `publicKey`.

If no `hashicorpVaultSecretVersion` is provided, the latest version of the secret is retrieved.

Tessera requires TLS certificates and keys to be stored in the `.jks` Java keystore format. If the `.jks` files are password protected, the following environment variables must be set:

- `HASHICORP_CLIENT_KEYSTORE_PWD`
- `HASHICORP_CLIENT_TRUSTSTORE_PWD`

:::info

[Additional environment variables must be set](../KeyVault/Hashicorp-Vault.md) and a version 2 Key/Value secrets engine must be enabled.

:::

<!-- links -->

[TLS]: ../KeyVault/Hashicorp-Vault.md#tls
