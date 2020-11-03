---
description: Configuring peer discovery
---

# Configure peer discovery

Configure peer discovery in the [Tessera configuration file](Tessera.md). Options for peer discovery are:

* [`disablePeerDiscovery`](#disable-peer-discovery)
* [`peer`](#specify-peers)
* [`useWhiteList`](#enable-whitelist)
* [`enableRemoteKeyValidation`](#enable-remote-key-validation)

## Disable peer discovery

If peer discovery is disabled, communication is limited to peers listed in the configuration file.
Communication from nodes not listed as a peer is ignored.
Disable peer discovery to limit Tessera to communicating with known set of peers.

!!! example "Disable peer discovery"

    ```json
    "disablePeerDiscovery": true
    ```

!!! important

    Disabling peer discovery does not stop incoming transactions from nodes that are not in the peer list.
    To stop transactions being received from nodes that are not in the peer list, [enable the whitelist
    option](#enable-whitelist).

## Specify peers

Specify the list of Tessera node URLs used by Tessera to [discover other nodes](../../Concepts/p2p-discovery.md).

!!! example

    ```json
    "peer": [
      {
        "url": "http://myhost.com:9000"
      },
     {
        "url": "http://myhost.com:9001"
     },
     {
        "url": "http://myhost.com:9002"
     }
    ]
    ```

!!! tip
    Include multiple peers in the peer list in case any of them are offline or unreachable.

## Enable whitelist

The Tessera whitelist restricts connections for Tessera in the same way as the [`permissioned-nodes.json`
file does for GoQuorum](https://docs.goquorum.consensys.net/en/stable/Concepts/Permissioning/BasicNetworkPermissions/).

Set to true to specify only URLs listed in the [`peer` list](#specify-peers) can connect or submit
transactions.

!!! example "Enable whitelist"

    ```json
    "useWhiteList": true,
    ```

### Enable remote key validation

!!! important

    We recommend enabling remote key validation to prevent malicious attacks. The default configuration
    is false because this is a breaking change for Tessera versions before v0.10.0.

Remote key validation checks a remote node owns the public keys being advertised. To validate the
remote keys before adding a node to the peer list, enable remote key validation.

!!! example "Enable remote key validation"

    ```json
     "features": {
       "enableRemoteKeyValidation": true
     }
    ```


