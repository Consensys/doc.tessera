---
description: Tessera API 
---

# Tessera API

The Tessera API consists of three parts:

* [GoQuorum to Tessera](#goquorum-to-tessera-api)
* [Peer to peer](#peer-to-peer-api)
* [Third party](#third-party-api).

## GoQuorum to Tessera API

GoQuorum uses the GoQuorum to Tessera API to:

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
