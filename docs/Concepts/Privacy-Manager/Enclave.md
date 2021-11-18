---
description: Overview of Tessera enclave
---

# Enclave

An enclave is a secure processing environment that acts as a black box for processing commands and data.
An enclave protects the information that exists inside it from malicious attacks.

Tessera's enclave handles:

* Encryption and decryption operations required by the [transaction manager](Transaction-manager.md).
* Key management.

Tessera supports two [enclave types](Enclave-types.md).

Separating enclave responsibilities from the transaction manager prevents sensitive data from leaking into areas of
the codebase that don't require access.
This reduces the exposed areas for malicious attacks.

## Enclave responsibilities

### Data

The enclave handles the following data responsibilities:

* Public and private key access
* Identities (public keys) of forwarding recipients (`alwaysSendTo`)
* Default identity (public key) of attached nodes

### Actions

The enclave performs the following actions on request:

* Fetching the default identity (public key) for attached nodes
* Providing identities of forwarding recipients (public keys)
* Returning all identities (public keys) managed by the enclave
* Encrypting a payload for given sender and recipients
* Encrypting raw payloads for given sender
* Decrypting payloads for a given recipient or sender
* Adding new recipients for existing payloads
