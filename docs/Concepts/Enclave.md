---
description: Overview of Tessera enclave
---

# Enclave

!!! info
    An enclave is a secure processing environment that acts as a black box for processing commands and data.

    Enclaves come in various forms, both in hardware and software.

    An enclave protects the information that exists inside it from malicious attack.

Tessera's enclave handles all:

* Encryption and decryption operations required by the transaction manager
* Key management.

By separating the enclave from the transaction manager, sensitive data is prevented from leaking into areas of program memory that do not require access, thus reducing the potential impact of a malicious attack.

## Enclave responsibilities
### Data

The Tessera enclave handles:

- Public and private key access
- Identities (public keys) of forwarding recipients (`alwaysSendTo`)
- Default identity (public key) of attached nodes.

### Actions

The Tessera enclave performs the following actions on request:

- Fetching the default identity (public key) for attached nodes
- Providing identities of forwarding recipients (public keys)
- Returning all identities (public keys) managed by the enclave
- Encrypting a payload for given sender and recipients
- Encrypting raw payloads for given sender
- Decrypting payloads for a given recipient or sender
- Adding new recipients for existing payloads.

### Private transaction flow

Refer to [lifecycle of a private transaction](https://docs.goquorum.consensys.net/Concepts/Privacy/PrivateTransactionLifecycle/) to see where the enclave is used in the private transaction flow.
