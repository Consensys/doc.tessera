---
description: REST API overview
---

# REST API

The Tessera REST API consists of:

* Admin APIs
    Use this API to:
    - Access information about the Tessera node
    - Make changes to the configuration of the Tessera node

* Peer-to-peer APIs
   Tessera nodes communicate with each other using this API to:
   - Perform discovery
   - Send and receive encrypted payloads

* Third party APIs
   Tessera nodes communicate with third parties using this API to:
   - Store encrypted payloads for external applications

* GoQuorum to Tessera APIs (default)

    GoQuorum uses this API to:

    - Check if the local Tessera node is running
    - Send and receive details of private transactions

    This API is described in the OpenAPIv3 format available on
    [Tessera API reference site](https://consensys.github.io/doc.tessera/).
