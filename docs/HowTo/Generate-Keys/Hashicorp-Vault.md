---
description: How to generate keys and store them in HashiCorp Vault
---

# Store keys in HashiCorp Vault

**Prerequisites:**

* [Hashicorp Vault configured and running](../Configure/KeyVault/Hashicorp-Vault.md).

You can use Tessera to generate a private and public key pair in HashiCorp Vault. The following
example creates secrets with IDs `publicKey` and `privateKey` at the secret path
`secretEngine/secretName`:

```bash
tessera -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine secretEngine -filename secretName
```

The `-filename` option can be used to generate and store multiple key pairs at the same time:

```bash
tessera -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine secretEngine -filename myNode/keypairA,myNode/keypairB
```

Options exist for configuring TLS and AppRole authentication. By default, the AppRole path is set
to `approle`.

```bash
tessera -keygen -keygenvaulttype HASHICORP -keygenvaulturl <url> \
   -keygenvaultsecretengine <secretEngineName> -filename <secretName> \
   -keygenvaultkeystore <JKS file> -keygenvaulttruststore <JKS file> \
   -keygenvaultapprole <authpath>
```

!!! warning
    Saving a new key pair to an existing secret overwrites the values stored at that secret.
    Previous versions of secrets can be retained and retrieved by Tessera depending on how the K/V
    secrets engine is configured. When doing this, ensure to
    [specify the correct secret version in your Tessera configuration](../Configure/Keys/Hashicorp-Vault-Pairs.md).
