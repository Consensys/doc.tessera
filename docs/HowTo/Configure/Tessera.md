---
title: Overview
description: Configure Tessera
sidebar_position: 1
---

# Overview

Provide a [JSON configuration file] using the [`--configfile`](../../Reference/CLI/CLI-Syntax.md#configfile-config-file) command line option when [starting Tessera].

The configuration file must contain the options to start the transaction manager with a [local or remote enclave](Enclave.md).

You can also configure:

- Access to [keys](Keys/Overview.md).
- [Key vaults](KeyVault/Azure-Key-Vault.md).
- The [Tessera API servers](TesseraAPI.md).
- [Peer discovery](Peer-discovery.md).
- [TLS](TLS.md).
- An [external database](Database.md).
- Support for [multiple private states](Multiple-private-state.md) and [resident groups](Multiple-private-state.md#resident-groups).
- [Cryptographic elliptic curves](Cryptographic-elliptic-curves.md).
- Support for [Hyperledger Besu versions earlier than 25.1.0](Orion-Mode.md).
- [High availability](High-availability.md).

You can [override configuration options](Override-config.md) using the command line.

View an [example configuration file](../../Reference/SampleConfiguration.md#example-configuration-file) and [descriptions for each configuration item](../../Reference/SampleConfiguration.md#configuration-items).

[JSON configuration file]: ../../Reference/SampleConfiguration.md
[starting Tessera]: ../Get-started/Start-Tessera.md
