---
description: Configuring Azure Key Vault for storing private keys
---

# Configuring use of Azure Key Vault

The private/public key pairs used by Tessera can be [stored] in and [retrieved] from a key vault, preventing the need to store the keys locally.

This page details how to set up and configure an Azure Key Vault for use with Tessera.

The Microsoft Azure documentation provides much of the information needed to get started.
The information in this section has been taken from the [Azure documentation](https://docs.microsoft.com/en-us/azure/key-vault).

## Creating the vault

The Key Vault can be created using either the [Azure Web Portal](https://azure.microsoft.com/en-gb/features/azure-portal/) or the [Azure CLI](https://docs.microsoft.com/en-gb/cli/azure/install-azure-cli?view=azure-cli-latest).

### Using the portal

1. Login to the Azure Portal
1. Select `Create a resource` from the sidebar
1. Search for, and select, `Key Vault`
1. Fill out the necessary fields, including choosing a suitable name and location (the list of possible locations can be found using the Azure CLI, see below), and click `Create`

### Using the CLI

1. Login to Azure using the [Azure CLI](https://docs.microsoft.com/en-gb/cli/azure/install-azure-cli?view=azure-cli-latest)

    ```bash
    az login
    ```

1. Create a resource group, choosing a suitable name and location

    ```bash
    az group create --name <rg-name> --location <location>
    ```

    To view a list of possible locations use the command

    ```bash
    az account list-locations
    ```

1. Create the Key Vault, choosing a suitable name and location and referencing the resource group created in the previous step

    ```bash
    az keyvault create --name <kv-name> --resource-group <rg-name> --location <location>
    ```

A Key Vault has now been created that can be used to store secrets.

## Configuring the vault to work with Tessera

Azure uses an Active Directory system to grant access to services.
It will create an 'application' that we will authorise to use the vault.
It will provide the credentials created as a result of this to authenticate our Tessera instance to use the key vault.

In order for the vault to be accessible by Tessera, the following steps must be carried out:

1. Log in to the Azure Portal
1. Select `Azure Active Directory` from the sidebar
1. Select `App registrations`, `New application registration` and complete the registration process. **Make note of the `Application ID`**.
1. Once registered, click `Settings`, `Keys`, and create a new key with a suitable name and expiration rule. **Once the key has been saved make note of the key value - this is the only opportunity to see this value!**

To authorise the newly registered app to use the Key Vault complete the following steps:

1. Select `All services` from the sidebar and select `Key vaults`
1. Select the vault
1. Select `Access policies` and `Add new`
1. Search for and select the newly registered application as the `Principal`
1. Enable the `Get` and `Set` secret permissions

## Enabling Tessera to use the vault

### Environment Variables

If using an Azure Key Vault, Tessera requires three environment variables to be set:

1. `AZURE_CLIENT_ID`: The `Application ID`
1. `AZURE_CLIENT_SECRET`: The application registration `key`
1. `AZURE_TENANT_ID`: The Azure Active Directory `Tenant ID`

Each of these values can be retrieved during the application registration process as outlined above.

### Dependencies

Unpack `azure-key-vault-<version>.zip|tar` and `cp azure-key-vault-<version>/lib/* tessera-dist/lib/`

<!--links -->
[stored]: ../../Generate-Keys/Azure-Key-Vault.md
[retrieved]: ../Keys/Azure-Key-Vault-Pairs.md
