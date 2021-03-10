---
description: Configure Azure Key Vault key pairs.
---

# Azure Key Vault key pairs

The keys in the pair are stored as secrets in an Azure Key Vault.
This requires providing the vault URL and the secret IDs for both keys:

```json
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

This example configuration retrieves the the secrets `Key` and `Pub` from the key vault with DNS
name `https://my-vault.vault.azure.net`. If no version is specified then the latest version of the
secret is retrieved.

!!! info
    [Environment variables must be set if using Azure Key Vault](../KeyVault/Azure-Key-Vault.md).
