---
description: Tessera API
---

# Tessera API

The [Tessera API](https://consensys.github.io/tessera/) consists of the following parts:

* [`quorum-to-tessera`](https://consensys.github.io/tessera/#tag/quorum-to-tessera) - The privacy-enabled
    Ethereum client uses the `quorum-to-tessera` API to check if the associated Tessera node is running, and
    to send and receive private transactions.
* [`peer-to-peer`](https://consensys.github.io/tessera/#tag/peer-to-peer) - Tessera uses the `peer-to-peer`
    API to perform discovery, and to send and receive encrypted payloads.
* [`third-party`](https://consensys.github.io/tessera/#tag/third-party) - Tessera uses the `third-party`
    API to store encrypted payloads for external applications, for example,
    [`web3js-quorum.js`](https://github.com/consenSys/web3js-quorum).

[Configure the API servers in the Tessera configuration file.](../HowTo/Configure/TesseraAPI.md)

## Define API versions

Every client side request (such as [`/push`](https://consensys.github.io/tessera/#operation/pushPayload) and [`/partyinfo`](https://consensys.github.io/tessera/#operation/broadcastPartyInfo))
includes a header parameter called `tesseraSupportedApiVersions` that lists the supported API versions.

Exchanging and storing the supported API versions enables Tessera nodes to know which API
versions are supported by peers.
