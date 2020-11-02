---
description: Enclave types
---

# Enclave types

Tessera supports local and remote HTTP enclaves. [Configure the enclave in the Tessera configuration file](../HowTo/Configure/Enclave.md).

## Local enclave

The local enclave is inside the same process as the transaction manager. For local enclaves the
enclave configuration is inside the same configuration file as the transaction manager configuration.

## Remote HTTP enclave

The remote HTTP enclave serves RESTful endpoints over HTTP. This enclave enables
a clear separation between the enclave process and transaction manager process. The enclave must be present
and running at transaction manager startup.

The private keys are only accessible from the remote HTTP Enclave. For additional security, deploy the remote HTTP Enclave
in a secure environment separate from the machine where the transaction manager process runs.
