---
description: Configuring Azure Key Vault for storing private keys
---

# Configure Azure Key Vault

You can configure an Azure Key Vault to use with Tessera.

The private/public key pairs used by Tessera can be [stored] in and [retrieved] from the key vault, without the need to
store the keys locally.

The [Microsoft Azure documentation](https://docs.microsoft.com/en-us/azure/key-vault) provides the information you need
to get started.

## Creating the vault

You can create the Key Vault using either the
[Azure Portal](https://docs.microsoft.com/en-us/azure/key-vault/general/quick-create-portal) or the
[Azure CLI](https://docs.microsoft.com/en-us/azure/key-vault/general/quick-create-cli).

## Configuring the vault to work with Tessera

Azure uses an Active Directory system to grant access to services.
It creates an application that you must authorize to use the vault.
It provides the credentials to authenticate your Tessera instance to use the key vault.

1. Log in to the Azure Portal.
1. Select **Azure Active Directory** from the sidebar.
1. Select **App registrations**, select **New application registration**, and complete the registration process.
   Make note of the **Application ID**.
1. Once registered, select **Settings**, select **Keys**, and create a new key with a name and expiration rule.
   Once you save the key, make note of the key value - this is the only opportunity to see this value!

To authorize the newly registered app to use the Key Vault:

1. Select **All services** from the sidebar and select **Key vaults**.
1. Select the vault.
1. Select **Access policies** and **Add new**.
1. Search for and select the newly registered application as the **Principal**.
1. Enable the **Get** and **Set** secret permissions.

## Enabling Tessera to use the vault

### Environment variables

Tessera requires three environment variables to be set when using an Azure Key Vault:

1. `AZURE_CLIENT_ID` - the `Application ID`
1. `AZURE_CLIENT_SECRET` - the application registration `key`
1. `AZURE_TENANT_ID` - the Azure Active Directory `Tenant ID`

Each of these values can be retrieved during the [application registration process](#configuring-the-vault-to-work-with-tessera).

### Dependencies

Unpack `azure-key-vault-<version>.zip|tar` and `cp azure-key-vault-<version>/lib/* tessera-dist/lib/`.

<!--links -->
[stored]: ../../Generate-Keys/Azure-Key-Vault.md
[retrieved]: ../Keys/Azure-Key-Vault-Pairs.md
