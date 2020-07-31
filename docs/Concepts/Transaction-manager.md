---
description: Overview of Tessera transaction manager 
---

# Tessara transaction Manager 

A transaction manager is the central piece in the lifecycle of a private transaction. It interfaces with
most other parts of the network/infrastructure and manages the lifecycle of private data.

### What does a transaction manager do?

The transaction manager's duties include:

- forming a P2P network of transaction managers & broadcasting peer/key information
- interfacing with the enclave for encrypting/decrypting private payloads
- storing and retrieving saved data from the database
- providing the gateway for Quorum to distribute private information

The Transaction Manager, which handles peer management and database access, as well as GoQuorum communication,
does not contain access to any private keys and does not perform and encryption/decryption, greatly reducing the impact an attack can have.

### Where does the transaction manager sit in the private transaction flow?

The transaction manager is the touch point for Quorum to distribute it's private payloads. It connects directly to Quorum and interfaces with the attached enclave, as well as with other transaction managers.

![Quorum Tessera Privacy Flow](https://docs.goquorum.consensys.net/Concepts/Privacy/PrivateTransactionLifecycle/)
