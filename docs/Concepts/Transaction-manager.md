---
description: Overview of Tessera transaction manager
---

# Tessera

Tessera is the private transaction manager for [GoQuorum]. Tessera:

- Forms the peer to peer network of private transaction managers
- Interfaces with the [enclave](Enclave.md) for encrypting and decrypting of private payloads
- Stores and retrieves saved data from the database
- Distributes private transaction payloads for [GoQuorum].

Tessera does not have access to any private keys and does not perform encryption/decryption. Separating
the private transaction manager from the [enclave](Enclave.md) greatly reduces the potential impact
of an attack.

## Transaction flow

Tessera distributes the private payloads received from [GoQuorum].
Tessera connects to [GoQuorum], and interfaces with the attached enclave and other Tessera nodes.

![Quorum Tessera Privacy Flow](https://docs.goquorum.consensys.net/images/TesseraPrivacyFlow.jpeg)

[GoQuorum]: https://docs.goquorum.consensys.net/
