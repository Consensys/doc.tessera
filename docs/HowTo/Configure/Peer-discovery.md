---
description: Configuring peer discovery
---

# Configure peer discovery

You can configure [peer discovery](../../Concepts/p2p-discovery.md) in the Tessera [configuration file](Tessera.md).
Configuration options for peer discovery are:

* [`disablePeerDiscovery`](#disable-peer-discovery).
* [`peer`](#specify-peers).
* [`useWhiteList`](#enable-allowlist).
* [`enableRemoteKeyValidation`](#enable-remote-key-validation).

## Disable peer discovery

You can disable peer discovery by setting `disablePeerDiscovery` in the configuration file to `true`.
If peer discovery is disabled, communication is limited to [specified peers](#specify-peers).
Communication from nodes not listed as a peer is ignored.
Peer discovery is enabled by default.

!!! example "Disable peer discovery configuration"

    ```json
    "disablePeerDiscovery": true
    ```

!!! important

    Disabling peer discovery does not stop incoming transactions from nodes that are not in the peer list.
    To stop transactions being received from nodes that are not in the peer list, [enable the whitelist
    option](#enable-whitelist).

## Specify peers

You can specify a list of Tessera node URLs used by Tessera to [discover other nodes](../../Concepts/p2p-discovery.md).
Specify the peer list using [`peer`](../../Reference/SampleConfiguration.md#peer) in the configuration file.

!!! example "Peer list configuration"

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

    When your node starts up, these are the peers it will search for. Include multiple peers in the peer list
    in case any of them are offline or unreachable.

## Enable allowlist

The Tessera allowlist (whitelist) restricts connections for Tessera in the same way the [`permissioned-nodes.json`
file does for GoQuorum](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/configure/permissioning/basic-permissions/).

Set [`useWhitelist`](../../Reference/SampleConfiguration.md#usewhitelist) in the configuration file to `true` to indicate
that only [specified peers](#specify-peers) can connect or submit transactions.

!!! example "Enable allowlist configuration"

    ```json
    "useWhiteList": true,
    ```

## Enable remote key validation

Remote key validation checks that a remote node owns the public keys being advertised.
Enable remote key validation by setting [`enableRemoteKeyValidation`](../../Reference/SampleConfiguration.md#features)
in the configuration file to `true`.
Remote key validation is disabled by default.

!!! example "Enable remote key validation configuration"

    ```json
     "features": {
       "enableRemoteKeyValidation": true
     }
    ```

!!! important

    We recommend enabling remote key validation to prevent malicious attacks.
    The default configuration is false because this is a breaking change for Tessera versions before v0.10.0.
