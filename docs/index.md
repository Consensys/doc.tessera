---
title: Tessera Private Transaction Manager
description: Tessera is an open-source private transaction manager developed under the Apache 2.0 license and written in Java.
sidebar_position: 1
---

# Tessera private transaction manager

## What is Tessera?

Tessera is an open-source private transaction manager developed under the Apache 2.0 license and written in Java. The primary application of Tessera is as the privacy manager for privacy-enabled Ethereum clients such as [GoQuorum](https://docs.goquorum.consensys.net) and [Hyperledger Besu](https://besu.hyperledger.org/en/stable/).

## What can you do with Tessera?

Tessera:

- Generates and maintains private/public key pairs.

- [Self-manages](Concepts/Privacy-Manager/Privacy-manager.md) and [discovers](Concepts/p2p-discovery.md) all nodes in the network.

- Provides [an API](Reference/TesseraAPI.md) for communicating between Tessera nodes and with privacy-enabled Ethereum clients.

- Provides two-way SSL using [TLS certificates](HowTo/Configure/TLS.md) and various trust models such as [trust on first use (TOFU)](HowTo/Configure/TLS.md#tofu-trust-on-first-use), [allowlist](HowTo/Configure/TLS.md#whitelist), and [certificate authority](HowTo/Configure/TLS.md#ca).

- Supports [IP allowlist](HowTo/Configure/Peer-discovery.md#enable-allowlist).

- Connects to any [SQL DB](HowTo/Configure/Database.md) which supports the JDBC client.

## Is Tessera part of ConsenSys Quorum?

Yes. [ConsenSys Quorum](https://consensys.net/quorum/developers) is the complete open source blockchain layer with enterprise support available from ConsenSys.

## New to ConsenSys Quorum?

Get started with the [Quorum Developer Quickstart](Tutorials/Quorum-Dev-Quickstart.md). Use the quickstart to rapidly generate local Quorum blockchain networks.

Learn about [use cases for Enterprise Ethereum](https://consensys.net/blockchain-use-cases/case-studies/).
