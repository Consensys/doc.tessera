---
description: Overview of Tessera transaction manager
---

# Private transaction Manager

Tessera is the private transaction manager for GoQuorum. Tessera:

- Forms the peer to peer network of private transaction managers
- Interfaces with the enclave for encrypting and decrypting of private payloads
- Stores and retrieves saved data from the database
- Distributes private transaction payloads for GoQuorum. 

Tessera does not have access to any private keys and does not perform encryption/decryption. Separating 
the private transaction , greatly reducing the impact an attack can have.

## Where does the transaction manager sit in the private transaction flow?

The transaction manager is the touch point for Quorum to distribute its private payloads. It connects directly to Quorum and interfaces with the attached enclave, and with other transaction managers.

![Quorum Tessera Privacy Flow](https://docs.goquorum.consensys.net/images/TesseraPrivacyFlow.jpeg)
_Diagram from [Quorum Tessera Privacy Flow](https://docs.goquorum.consensys.net/en/latest/Concepts/Privacy/PrivateTransactionLifecycle/) documentation page._
