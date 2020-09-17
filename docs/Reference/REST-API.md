---
description: REST API overview
---

# REST API

The Tessera REST API consists of:

* Peer-to-peer APIs
   Tessera nodes communicate with each other using this API to:
   - Perform discovery
   - Send and receive encrypted payloads

!!! Warning "Defining First API Version"

    From version 0.11.0, for every client side request i.e., `/push` and `/partyinfo`, Tessera will now include a parameter which is a list of API versions that it
    supports into the http header called `supportedApiVersions`. Release 0.11.0 defines the first API version and during the partyinfo exchange these values will be
    stored against the node in the `NetworkStore` so that a Tessera node at any time will be aware of the versions that its peers currently support. This can later
    be used to ensure that a remote peer is actively supporting a certain feature before forwarding a transaction. Refer [API Reference site]
    (https://consensys.github.io/doc.tessera/) for more information.

* Third party APIs
   Tessera nodes communicate with third parties using this API to:
   - Store encrypted payloads for external applications

* GoQuorum to Tessera APIs (default)

    GoQuorum uses this API to:

    - Check if the local Tessera node is running
    - Send and receive details of private transactions

    This API is described in the OpenAPIv3 format available on
    [Tessera API reference site](https://consensys.github.io/doc.tessera/).
