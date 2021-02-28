---
description: Tessera API 
---

# Tessera API

The [Tessera API](https://consensys.github.io/tessera/) consists of the following parts:

* [`quorum-to-tessera`](#quorum-to-tessera-api)
* [`peer-to-peer`](#peer-to-peer-api)
* [`third-party`](#third-party-api).

## Quorum to Tessera API

The privacy-enabled Ethereum client uses the Quorum to Tessera API to:

* Check if the associated Tessera node is running.
* Send and receive private transactions.

## Peer to peer API

Tessera uses the Peer to peer API to:

* Perform discovery.
* Send and receive encrypted payloads.

## Third party API

Tessera uses the third party API to store encrypted payloads for external applications. For example,
[Quorum.js](https://github.com/consenSys/quorum.js).

[Configure the Tessera API servers in `serverConfigs` in the Tessera configuration file.](../HowTo/Configure/TesseraAPI.md)
