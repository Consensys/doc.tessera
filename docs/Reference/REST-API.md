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

* GoQuorum to Tessera APIs (`default` in the [Swagger reference](https://jpmorganchase.github.io/tessera-swagger/index.html#/))
    GoQuorum uses this API to:
    - Check if the local Tessera node is running
    - Send and receive details of private transactions

Refer to the [Swagger reference for endpoint documentation](https://jpmorganchase.github.io/tessera-swagger/index.html#/). 
