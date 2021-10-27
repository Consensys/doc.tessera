---
description: Configure HashiCorp Vault key pairs.
---

### HashiCorp Vault key pairs

You can configure [key pairs](Overview.md) by storing them as secrets in a HashiCorp Vault.
You can provide additional configuration items if the Vault is configured to use [TLS], and if the AppRole
authentication method is used at a non-default path.

!!! example "HashiCorp Vault key pair configuration"

    ```json
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

This example configuration retrieves version `1` of the secret `engine/secret` from its corresponding values for
`privateKey` and `publicKey`.

If no `hashicorpVaultSecretVersion` is provided, the latest version of the secret is retrieved.

Tessera requires TLS certificates and keys to be stored in the `.jks` Java keystore format.
If the `.jks` files are password protected, the following environment variables must be set:

- `HASHICORP_CLIENT_KEYSTORE_PWD`
- `HASHICORP_CLIENT_TRUSTSTORE_PWD`

!!! info

    [Additional environment variables must be set](../KeyVault/Hashicorp-Vault.md) and a version 2 Key/Value
    secrets engine must be enabled.

<!-- links -->
[TLS]: ../KeyVault/Hashicorp-Vault.md#tls
