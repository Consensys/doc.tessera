---
description: Overview of Tessera transaction manager
---

# Transaction Manager

Tessera's transaction manager:

- Creates a peer to peer network with other transaction managers
- Delegates key management and payload encryption/decryption to the [enclave](Enclave.md)
- Stores and retrieves saved data from the database
- Distributes private transaction payloads for [GoQuorum].

## Private transaction flow

The transaction manager distributes private payloads received from [GoQuorum].

Refer to [lifecycle of a private transaction](https://docs.goquorum.consensys.net/Concepts/Privacy/PrivateTransactionLifecycle/) to see the transaction manager's use in the private transaction flow.

[GoQuorum]: https://docs.goquorum.consensys.net/
