---
description: P2P Tessera Node Discovery
---

# Node discovery

Tessera uses peer discovery to discover Tessera nodes in the network. Tessera nodes share their
entire peer list, enabling new nodes to discover all nodes in the network. When sharing their peer list,
Tessera broadcasts the public keys for that node and the list of URLS with which the node has
current active communication.

Tessera maintains two node lists, `PartyStore` and `NetworkStore`. `NetworkStore` lists nodes with
which an active connection has been established. `PartyStore` lists URLs from the [`peer` entry in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md#specify-peers)
and URLs discovered from remote nodes. If Tessera can no communicate with a node, the peer is
removed from both the `PartyStore` and `NetworkStore` lists.

If all peers are removed from the `PartyStore` and `NetworkStore` lists, the `PartyStore` list is repopulated
from the [`peer` entry in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md#specify-peers).
A dropped remote peer is added to the `NetworkStore` list only after establishing direct communication with
the peer. That is, discovering a dropped remote peer is not enough for a node to be added to the active peer list.

The [`partyinfo` API method](https://consensys.github.io/doc.tessera/#operation/getPartyInfo) returns nodes
with which Tessera has a current active connection (that is, nodes listed in `NetworkStore`).  

[Configure peer discovery in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md).
