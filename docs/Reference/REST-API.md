---
description: REST API reference
---

# REST API

The Rest API consists of three parts: [Peer to Peer, GoQuorum to Tessera, and Third Party](../Concepts/TesseraAPI.md). 

[Configure the API servers in the Tessera configuration file](../HowTo/Configure/TesseraAPI.md). 

For the API methods, refer to the [API reference](https://consensys.github.io/doc.tessera/). 

## Defining API versions

Every client side request (that is, `/push` and [`/partyinfo`](https://consensys.github.io/tessera/#operation/broadcastPartyInfo))
includes a header parameter listing the supported API versions. The parameter is called `tesseraSupportedApiVersions`.

Exchanging and storing the supported API versions enables Tessera nodes to know which API
versions are supported by peers.
