---
description: Overview of Tessera enclave
---

# Enclave

!!! info
    An enclave is a secure processing environment that acts as a black box for processing commands and data.

    Enclaves come in various forms, both in hardware and software.

    An enclave protects the information that exists inside it from malicious attack.

Tessera's enclave handles all:

* Encryption and decryption operations required by the private transaction manager
* Key management.

By separating the enclave from the transaction manager, sensitive data is prevented from leaking into areas of program memory that do not require access, thus reducing the potential impact of a malicious attack.

## Enclave data

The Tessera enclave handles:

- Public and private key access
- Public keys of extra recipients
- Default identity (that is, public key) of attached nodes.

## Enclave actions

The Tessera enclave performs the following actions on request:

- Fetching the default identity (that is, public key) for attached nodes
- Providing forwarding keys for all transactions
- Returning all public keys managed by the enclave
- Encrypting a payload for given sender and recipients
- Encrypting raw payloads for given sender
- Decrypting transactions for a given recipient or sender
- Adding new recipients for existing payloads.

## Private transaction flow

Refer to [lifecycle of a private transaction](https://docs.goquorum.consensys.net/Concepts/Privacy/PrivateTransactionLifecycle/).
