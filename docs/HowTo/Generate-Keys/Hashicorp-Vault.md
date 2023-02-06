---
title: Hashicorp Vault keys
description: How to generate keys and store them in HashiCorp Vault
sidebar_position: 3
---

# Store keys in HashiCorp Vault

You can use Tessera to generate a private and public key pair in HashiCorp Vault. You must have [HashiCorp Vault configured and running](../Configure/KeyVault/Hashicorp-Vault.md).

The following example creates secrets with IDs `publicKey` and `privateKey` at the secret path `secretEngine/secretName`:

```bash
tessera -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine secretEngine -filename secretName
```

You can use the [`-filename`](../../Reference/CLI/CLI-Subcommands.md#keyout-filename) option to generate and store multiple key pairs at the same time:

```bash
tessera -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine secretEngine -filename myNode/keypairA,myNode/keypairB
```

Options exist for configuring TLS and AppRole authentication. By default, the AppRole path is set to `approle`.

```bash
tessera -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine <secretEngineName> -filename <secretName> \
   -keygenvaultkeystore <JKS file> -keygenvaulttruststore <JKS file> \
   -keygenvaultapprole <authpath>
```

You can [configure Tessera to use HashiCorp Vault keys](../Configure/Keys/Hashicorp-Vault-Pairs.md).

:::caution Warning

Saving a new key pair to an existing secret overwrites the values stored at that secret. Previous versions of secrets can be retained and retrieved by Tessera depending on how the K/V secrets engine is configured. When doing this, ensure you [specify the correct secret version in your Tessera configuration](../Configure/Keys/Hashicorp-Vault-Pairs.md).

:::
