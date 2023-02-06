---
title: Data recovery
description: How to recover data
sidebar_position: 4
---

# Data recovery

Due to the interdependence between [counter-party protection (PP)](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivacyEnhancements/#counter-party-protection) and [private state validation (PSV)](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivacyEnhancements/#private-state-validation) transactions, transactions can't just be accepted, but must be recovered in the appropriate manner to not be wrongly rejected.

Tessera introduces a separate persistence unit called `tessera-recover` which consists of tables, so that incoming transactions can be sorted before synchronizing to the main database.

The recovery process includes the following steps:

1. **Request** - The transaction manager running in recovery mode sends resend requests to other nodes in the network and waits for requests to be completed. The requested nodes attempt to resend the transactions they have for the recovery node in batches (rather than in single transactions, as in the legacy resend process). Transactions received are persisted to a separate staging database unit, and the batch request is considered successful once the requested node finishes sending the transactions.
1. **Stage** - All transactions in the staging area are sorted by dependency. This is done by executing a special staging query multiple times, until all transactions in the staging area are sorted and validated.
1. **Sync** - Once the staging process is done, the transactions are copied to the main database by using `/push`. During the sync, [enhanced-privacy transactions](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivacyEnhancements/) are checked and validated the same way they were before.

The Tessera recovery process stops and shuts down once these steps are executed. Each stage result is reported as `SUCCESS(0)`, `PARTIAL_SUCCESS(1)`, or `FAILURE(2)`. The result code is useful for scripting purposes (for example, automatically start Tessera in normal mode if recovery successfully completes).

To trigger the recovery process, Tessera must be started in recovery mode on the command line:

```bash
tessera --recover
```

During the recovery process, Tessera doesn't accept any new [enhanced-privacy transactions](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivacyEnhancements/), but continues to accept [standard private transactions](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivateAndPublic/#private-transactions).
