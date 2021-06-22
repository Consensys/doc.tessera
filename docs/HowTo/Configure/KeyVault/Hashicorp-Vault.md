---
description: Configuring HashiCorp Vault for storing private keys
---

# Configuring use of HashiCorp Vault

The private/public key pairs used by Tessera can be [stored] in and [retrieved] from a key vault, preventing the need to store the keys locally.

This page details how to set up and configure a HashiCorp Vault for use with Tessera.

The [HashiCorp Vault Getting Started documentation](https://learn.hashicorp.com/vault/) provides much of the information needed to get started. The following section goes over some additional considerations when running Tessera with Vault.

## Configuring the vault

### TLS

When running in production situations it is advised to configure the Vault server for 2-way (mutual) TLS communication. Tessera also supports 1-way TLS and unsecured (no TLS) communications with a Vault server.

An example configuration for the Vault listener to use 2-way TLS is shown below. This can be included as part of the `.hcl` used when starting the Vault server:

```json
listener "tcp" {
        tls_min_version = "tls12"
        tls_cert_file = "/path/to/server.crt"
        tls_key_file = "/path/to/server.key"
        tls_require_and_verify_client_cert = "true"
        tls_client_ca_file = "/path/to/client-ca.crt"
}
```

### Auth methods

Tessera directly supports the [AppRole](https://www.vaultproject.io/docs/auth/approle.html) auth method. If required, other auth methods can be used by logging in outside of Tessera (for instance using the HTTP API) and providing the resulting vault token to Tessera. See the *Enabling Tessera to use the vault* section below for more information.

When using AppRole, Tessera assumes the default auth path to be `approle`, however this value can be [configured].

### Policies

To be able to carry out all possible interactions with a Vault, Tessera requires the following policy capabilities: `["create", "update", "read"]`. A subset of these capabilities can be configured if not all functionality is required.

### Secret engines

Tessera can read and write keys to the following secret engine type:

- [K/V Version 2](https://www.vaultproject.io/docs/secrets/kv/kv-v2.html)

The K/V Version 2 secret engine supports multiple versions of secrets, however only a limited number of versions are retained. This number can be changed as part of the Vault configuration process.

## Enabling Tessera to use the vault

### Environment Variables

If using a HashiCorp Vault, Tessera requires certain environment variables to be set depending on the auth method being used.

- If using the AppRole auth method, set:
    - `HASHICORP_ROLE_ID`
    - `HASHICORP_SECRET_ID`

    These credentials are obtained as outlined in the [AppRole documentation](https://www.vaultproject.io/docs/auth/approle.html) Tessera will use these credentials to authenticate with Vault.

- If using the root token or you already have a token due to authorising with an alternative method, set:
    - `HASHICORP_TOKEN`

!!! note
    [If using TLS, then additional environment variables must be set](../Keys/Hashicorp-Vault-Pairs.md#tls).

### Dependencies

Unpack `hashicorp-key-vault-<version>.zip|tar` and `cp hashicorp-key-vault-<version>/lib/* tessera-dist/lib/`

<!--links -->
[stored]: ../../Generate-Keys/Hashicorp-Vault.md
[retrieved]: ../Keys/Hashicorp-Vault-Pairs.md
[configured]: ../Keys/Hashicorp-Vault-Pairs.md
