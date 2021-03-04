---
description: How to recover data
---

# Data recovery

Due to the interdependence between Party Protection and PSV transactions
(the existence and validation of ACOTHs), transactions cannot just be accepted but need to be
recovered in the appropriate manner so that they don’t get wrongly rejected.

To do this we introduce a separate persistence unit called `tessera-recover` which consists a number
of tables so that incoming history transactions received can be sorted before synchronising to the
main database

The recovery process will include these steps:

- **Request** - the transaction manager that runs in recovery mode will send resend requests to
    other nodes in the network and wait for requests to be completed. The requested nodes will
    attempt to resend the transactions they have for the recovery node in batches
    (rather than singles compared to the legacy resend process).
    Transactions received are persisted to a separate staging database unit, and the batch request
    will be considered successful once the requested node finishes sending the transactions.
- **Stage** - All transactions in the staging area will be sorted by dependency. This is done by
    executing a special staging query multiple times, until all transactions in the staging area are
    sorted and validated.
- **Sync** - Once the staging process is done, the transactions are copied to the main database - by
    utilising the normal /push. During the sync, enhanced-privacy transactions are checked and
    validated the same way they were before.

Tessera recovery process will stop and shutdown once the above steps are executed. Each stage result
will be reported as SUCCESS(0), PARTIAL_SUCCESS(1), or FAILURE(2). The result code would be useful
for scripting purpose (for example automatically start Tessera in normal mode if recovery
successfully completed).

To trigger the recovery process, Tessera will need to be started in recovery mode by using the
command line:

```bash
    tessera -r or tessera --recover
```

 During the recovery process, Tessera won’t accept any new enhanced-privacy transactions but will
 continue to accept 'standard' private transactions.
