---
description: P2P Tessera Node Discovery
---

# Node discovery

Tessera peer discovery works in a similar way to peer discovery in [Hyperledger Besu](https://besu.hyperledger.org/en/stable/HowTo/Find-and-Connect/Managing-Peers/#manage-peers) and [GoQuorum](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/configure/bootnodes/). Tessera nodes share their list of peer URLs, as well as the public keys of those peers. In this way, nodes joining the network are able to discover other nodes in the network, as well as the public keys of other participants.

Nodes in the network do not all need to have the same list of [configured peers](../HowTo/Configure/Peer-discovery.md#specify-peers). You can think of this list as the starting point for discovering other nodes, similar to bootnodes in [Hyperledger Besu](https://besu.hyperledger.org/en/stable/HowTo/Find-and-Connect/Bootnodes/) or [GoQuorum](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/configure/bootnodes/).

The [`partyinfo` API method](https://consensys.github.io/doc.tessera/#operation/getPartyInfo) returns nodes
with which Tessera has a current active connection.

[Configure peer discovery](../HowTo/Configure/Peer-discovery.md) in the Tessera configuration file.

## Under the hood
Tessera maintains two node lists, `PartyStore` and `NetworkStore`. `NetworkStore` lists nodes with
which an active connection has been established. `PartyStore` lists URLs from the [`peer` entry in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md#specify-peers)
and URLs discovered from remote nodes. If Tessera can't communicate with a node, the peer is
removed from both the `PartyStore` and `NetworkStore` lists.

If all peers are removed from the `PartyStore` and `NetworkStore` lists, the `PartyStore` list is repopulated
from the [`peer` entry in the Tessera configuration file](../HowTo/Configure/Peer-discovery.md#specify-peers). 

A dropped remote peer is added to the `NetworkStore` list only after establishing direct communication with
the peer. That is, discovering a dropped remote peer is not enough for a node to be added to the active peer list.

## Multi-tenancy
Adding a new key to a multi-tenant Tessera node (and restarting that node) will result in the new key being propagated to other nodes in the network via peer discovery.