---
title: Multi-tenancy migration
description: Migrate two Tessera nodes into a single multi-tenancy node
sidebar_position: 2
---

# Multi-tenancy migration

Use the [multi-tenancy](../../Concepts/Multitenancy.md) migration tool to merge the databases of two existing nodes to operate under a single Tessera instance. This is a prerequisite to [using GoQuorum multi-tenancy](https://docs.goquorum.consensys.net/en/latest/HowTo/Use/Multitenancy/Multitenancy/).

The resulting database stores the transactions as though they were all sent to the primary node's database.

The tool migrates both Tessera's raw transactions and regular transactions.

:::caution Important

We recommend backing up the primary database because the migration tool overwrites transactions with updated payloads and may not recover if errors occur during the migration. The secondary database is read only.

:::

## Usage

The tool takes both nodes' (named `primary` and `secondary`) configuration files as input, which contain the database credentials to connect; no other details in the configuration file is used.

To run the migration tool, run the following command:

```bash
./multitenancy-[version]/bin/multitenancy --primary <primary node configuration file> --secondary <secondary node configuration file>
```

After performing the migration, the primary node can be started with both nodes key pairs, and can decrypt the existing transactions using those keys.
