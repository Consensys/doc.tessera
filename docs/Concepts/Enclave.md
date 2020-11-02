---
description: Overview of Tessera enclave
---

# Tessera enclave

The Tessera enclave handles all:

* Encryption and decryption operations required by the private transaction manager
* Key management.

Separating the enclave from the transaction manager enables sensitive operations to be handled in a
single place, without any leakage into areas of program memory that don't need access. 
The enclave is a smaller application can be run in a secure environment, where memory constraints are
often more stringent, such as hardware enclaves.

The transaction manager handles peer management, database access, and GoQuorum communication but does
not perform any encryption or decryption. Separating the transaction manager and the enclave greatly
reduces the potential impact of an attack.

An enclave is a secure processing environment that acts as a black box for processing commands and data.
Enclaves come in various forms, some on hardware and others in software. The purpose of an enclave
is to protect information that exists inside the enclave from malicious attack.

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
