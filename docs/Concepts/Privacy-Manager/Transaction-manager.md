---
description: Overview of Tessera transaction manager
---

# Transaction manager

Tessera's transaction manager:

- Creates a peer-to-peer network with other transaction managers.
- Delegates key management and payload encryption/decryption to the [enclave](Enclave.md).
- Stores and retrieves saved data from the database.
- Distributes private transaction payloads for privacy-enabled Ethereum clients.

## Private transaction flow

The transaction manager distributes private payloads received from the privacy-enabled
Ethereum clients.

Refer to the [GoQuorum private transaction documentation](https://consensys.net/docs/goquorum/en/latest/concepts/privacy/private-transaction-lifecycle/)
to see the transaction manager's role in the private transaction lifecycle.
