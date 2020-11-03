---
description: P2P Tessera Node Discovery
---

# Node discovery

Tessera uses peer discovery to discover Tessera nodes in the network. Tessera nodes share their
entire peer list, enabling new nodes to discover all nodes in the network. When sharing their peer list,
Tessera broadcasts the public keys for that node and the list of URLS with which the node has
direct contact.

The [`partyinfo` API method](https://consensys.github.io/doc.tessera/#operation/getPartyInfo) returns nodes
with which Tessera has a current active connection. If a
peer is down or unreachable, Tessera removes the node from the peer list. If all peers are removed from the peer list,
the peer list is repopulated from the [`peer` entry in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md#specify-peers).

[Configure peer discovery in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md).
