---
description: Tessera and GoQuorum multi-tenancy
---

# Multi-tenancy via multiple private states

In a typical [GoQuorum](https://consensys.net/docs/goquorum/en/stable/) network, each participant (tenant) uses its own
GoQuorum and Tessera node.
Tessera can be configured to manage multiple key pairs owned by one tenant.
This model is costly to run and scale as more tenants join the network.

Multi-tenancy via multiple private states (MPS) allows multiple tenants to use the same GoQuorum node, with each
tenant having its own private state(s).
Each tenant can perform all operations (create, read, and write) on any contract in its private state, and a single
tenant can have access to multiple private states.
Multi-tenancy provides a user experience similar to a user running their own managed node.

The public state remains publicly available to all tenants, and private states are logically separated.

For more information about multi-tenancy and MPS, see the [GoQuorum documentation](https://consensys.net/docs/goquorum/en/latest/concepts/multi-tenancy/).

## Using multi-tenancy via multiple private states

To use multi-tenancy via multiple private states, you must have:

- Tessera version `21.4.0` or later installed.
- GoQuorum version `21.4.2` or later installed.

!!! important

    If running an earlier GoQuorum or Tessera version, upgrade your existing nodes to enable MPS and multi-tenancy using
    the [GoQuorum MPS migration guide](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/manage/multi-tenancy/migration/).
    As described in the migration guide, you must run the [Tessera multi-tenancy migration tool](../HowTo/Migrate/Migration-Multitenancy.md)
    to upgrade Tessera to support multi-tenancy.

Configure multi-tenancy via multiple private states according to the [GoQuorum multi-tenancy guide](https://consensys.net/docs/goquorum/en/stable/configure-and-manage/manage/multi-tenancy/multi-tenancy/).

!!! note

    As described in the multi-tenancy guide, you must [configure MPS in Tessera](../HowTo/Configure/Multiple-private-state.md)
    to use multi-tenancy.

The multi-tenancy guide also describes how to add a new tenant to a multi-tenant node.
