---
description: Tessera API
---

# Tessera API

The [Tessera API](https://consensys.github.io/tessera/) consists of the following parts:

* [Quorum to Tessera](#quorum-to-tessera-api)
* [Peer to peer](#peer-to-peer-api)
* [Third party](#third-party-api).

[Configure the API servers in the Tessera configuration file.](../HowTo/Configure/TesseraAPI.md)

## Quorum to Tessera API

The privacy-enabled Ethereum client uses the Quorum to Tessera API to:

* Check if the associated Tessera node is running.
* Send and receive private transactions.

## Peer to peer API

Tessera uses the peer to peer API to:

* Perform discovery.
* Send and receive encrypted payloads.

## Third party API

Tessera uses the third party API to store encrypted payloads for external applications. For example,
[Quorum.js](https://github.com/consenSys/quorum.js).

## Define API versions

Every client side request (such as `/push` and [`/partyinfo`](https://consensys.github.io/tessera/#operation/broadcastPartyInfo))
includes a header parameter called `tesseraSupportedApiVersions` that lists the supported API versions.

Exchanging and storing the supported API versions enables Tessera nodes to know which API
versions are supported by peers.
