---
title: Azure Key Vault keys
description: Configure Azure Key Vault key pairs.
sidebar_position: 5
---

# Azure Key Vault key pairs

To configure Tessera to use Azure Key Vault [key pairs](Overview.md), provide the vault information in the [configuration file](../../../Reference/SampleConfiguration.md#keys). You can use Tessera to [generate Azure Key Vault keys](../../Generate-Keys/Azure-Key-Vault.md).

Provide the vault URL and the secret IDs for both keys.

```json title="Azure Key Vault key pair configuration"

"keys": {
    "keyVaultConfigs": [
        {
            "keyVaultType": "AZURE",
            "properties": {
                "url": "https://my-vault.vault.azure.net"
            }
        }
    ],
    "keyData": [
        {
            "azureVaultPrivateKeyId": "Key",
            "azureVaultPublicKeyId": "Pub",
            "azureVaultPublicKeyVersion": "bvfw05z4cbu11ra2g94e43v9xxewqdq7",
            "azureVaultPrivateKeyVersion": "0my1ora2dciijx5jq9gv07sauzs5wjo2"
        }
    ]
}
```

This example configuration retrieves the secrets `Key` and `Pub` from the key vault with DNS name `https://my-vault.vault.azure.net`. If no version is specified, the latest version of the secret is retrieved.

:::info

[Environment variables must be set if using Azure Key Vault](../KeyVault/Azure-Key-Vault.md).

:::
