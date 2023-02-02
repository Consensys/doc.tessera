---
title: Azure Key Vault keys
description: How to generate keys and store them in Azure Key Vault
sidebar_position: 4
---

# Store keys in Azure Key Vault

You can use Tessera to generate a private and public key pair in Azure Key Vault. You must have [Azure Key Vault configured and running](../Configure/KeyVault/Azure-Key-Vault.md).

The following example generates a key pair as secrets with IDs `Pub` and `Key`, and saves them Azure Key Vault with the DNS name `<url>`:

```bash
tessera -keygen -keygenvaulttype AZURE -keygenvaulturl <url>
```

The [`-filename`](../../Reference/CLI/CLI-Subcommands.md#keyout-filename) option can be used to specify alternate IDs. Multiple key pairs can be generated at the same time by providing a comma-separated list of values:

```bash
tessera -keygen -keygenvaulttype AZURE -keygenvaulturl <url> -filename id1,id2
```

You can [configure Tessera to use Azure Key Vault keys](../Configure/Keys/Azure-Key-Vault-Pairs.md).

:::caution Warning

If saving new keys with the same ID as keys that already exist in the vault, then existing keys are replaced by the newer version. Ensure you [specify the correct secret version in your Tessera configuration](../Configure/Keys/Azure-Key-Vault-Pairs.md).

:::
