---
description: Tessera and GoQuorum multi-tenancy
---

# Multi-tenancy

In a typical [GoQuorum](https://consensys.net/docs/goquorum/en/stable/) or
[Hyperledger Besu privacy-enabled](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Overview/) network,
each participant (tenant) uses their own GoQuorum or Besu node and Tessera node.
Tessera can be configured to manage multiple key pairs owned by one tenant.
This model is costly to run and scale as more tenants join the network.

Multi-tenancy allows multiple tenants to use the same GoQuorum or Besu node, with each tenant having its own private state.
Each tenant can perform all operations (create, read, and write) on any contract in its private state.
Multi-tenancy provides a user experience similar to a user running their own managed node.

In GoQuorum, you can enable multi-tenancy via multiple private states (MPS), which allows each tenant to have access to
multiple private states.

The public state remains publicly available to all tenants, and private states are logically separated.

For more information about GoQuorum multi-tenancy via MPS, see the [GoQuorum multi-tenancy documentation](https://consensys.net/docs/goquorum/en/stable/concepts/multi-tenancy/).
For more information about Besu multi-tenancy, see the [Besu multi-tenancy documentation](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Multi-Tenancy/).

## Using GoQuorum multi-tenancy

To use GoQuorum multi-tenancy via MPS:

1. You must have:

    - Tessera version `21.4.0` or later installed.
    - GoQuorum version `21.4.2` or later installed.

    If running an earlier GoQuorum or Tessera version, [upgrade your existing nodes to enable MPS and multi-tenancy](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/manage/multi-tenancy/migration/).
    This includes running the [Tessera multi-tenancy migration tool](../HowTo/Migrate/Migration-Multitenancy.md) to
    upgrade Tessera to support multi-tenancy.

2. [Configure multi-tenancy via MPS](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/manage/multi-tenancy/multi-tenancy/).
   This includes [configuring MPS in Tessera](../HowTo/Configure/Multiple-private-state.md).

3. You can also [add a new tenant to a multi-tenant node](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/manage/multi-tenancy/multi-tenancy/).

## Using Besu multi-tenancy

To use Besu multi-tenancy, you must [create a privacy-enabled network](https://besu.hyperledger.org/en/stable/Tutorials/Privacy/Configuring-Privacy/).

Configure multi-tenant Besu and Tessera nodes according to the [Besu multi-tenancy configuration tutorial](https://besu.hyperledger.org/en/stable/Tutorials/Privacy/Configuring-Multi-Tenancy/).
