---
description: P2P Tessera Node Discovery
---

# Tessera Party Info Polling

Until version 0.11, Tessera P2P polling is indefinite with all configured/discovered nodes at the
defined interval irrespective of whether the remote node is active/down or retired.

From Version 0.11, the `partyinfo` discovery has changed to only keep active connections to assist
with better debugging of network issues.

The changes are summarised below:

- Introduction of `NetworkStore` that keeps track of `ActiveNodes` in the network.
    If a remote node is present in this list it means there is currently active direct communication
    with that node, meaning the local node is aware of remote node's keys and supportedApiVersions.
- `PartyStore` maintains a list of URLs that we use to broadcast our own `partyinfo`.
    If there is a connection exception during an attempt to broadcast `partyinfo` (a peer temporarily being down),
    we will remove this peer from both our PartyStore and NetworkStore.
- At any point in time there must be `at least one active node in the Tessera's configured peer list`.
    If all connections fail and the URLs are subsequently removed, resulting in the PartyStore having
    none of the URLs configured left, Tessera will re-populate the URLs from `configured peer list`
    to PartyStore and try again until at least one configured peer is back up online.
- Tessera will add URLs of remote nodes discovered from other nodes into `PartyStore`.
    It will add the URL with key into `NetworkStore` only after establishing direct communication with the remote node.
- When broadcasting `partyinfo` to peers, Tessera will now only broadcast its own public keys, and a
    list of URLs that it already has direct contact with.
    This will improve security and make communications between nodes much cleaner
    (dead nodes will no longer be broadcasted to peers like in past, only `ActiveNodes`).
- Get `/partyinfo` is amended to return only `ActiveNodes`.
