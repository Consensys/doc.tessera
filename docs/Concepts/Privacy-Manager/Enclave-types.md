---
description: Enclave types
---

# Enclave types

Tessera supports local and remote HTTP enclaves.

## Local enclave

The local enclave runs in the same process as the transaction manager. Logical separation still
exists between the enclave and transaction manager.

## Remote HTTP enclave

The remote HTTP enclave serves RESTful endpoints over HTTP and runs as a separate process to the
transaction manager. This provides a clear separation between the enclave and transaction manager.

For additional security, the remote HTTP Enclave can be deployed in a secure environment separate
from the transaction manager.

The enclave must be present and running at transaction manager startup. Specify the connection
details for the remote enclave server in the [Tessera configuration file](../../Reference/SampleConfiguration.md#enclave).
