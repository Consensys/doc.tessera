---
description: Enclave types
---

# Enclave types

Tessera supports [local](#local-enclave) and [remote HTTP](#remote-http-enclave) enclaves.

## Local enclave

The local enclave runs in the same process as the [transaction manager](Transaction-manager.md), but there is still
logical separation between the enclave and transaction manager.

You can [configure a local enclave](../../HowTo/Configure/Enclave.md#local-enclave).

## Remote HTTP enclave

The remote HTTP enclave serves RESTful endpoints over HTTP and runs as a separate process to the [transaction manager](Transaction-manager.md).
This provides greater separation between the enclave and transaction manager.

For additional security, the remote HTTP enclave can be deployed in a secure environment separate from the transaction manager.

The enclave must be present and running at transaction manager startup.
You can [configure a remote HTTP enclave](../../HowTo/Configure/Enclave.md#remote-http-enclave).
