---
description: Enclave types
---

# Enclave types

Tessera support local and HTTP enclaves. [Configure the enclave in the Tessera configuration file](../HowTo/Configure/Enclave.md).

## Local

The local enclave is inside the same process as the transaction manager. For local enclaves, the
enclave configuration is inside the [same configuration file as the transaction manager configuration](../HowTo/Configure/Enclave.md).

## HTTP Enclave

The HTTP enclave is a remote enclave that serves RESTful endpoints over HTTP. The HTTP enclave enables
a clear separation between the enclave process and transaction manager process. The enclave must be present
and running at transaction manager startup.

The private keys are only accessible from HTTP Enclave. For additional security, deploy the HTTP Enclave
in a secure environment separate from the machine where the transaction manager process runs.
