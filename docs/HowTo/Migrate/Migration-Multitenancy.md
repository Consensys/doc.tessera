---
title: Tessera Multi-tenancy Migration
description: Migrate two Tessera nodes into a single multi-tenancy node
---

# Multi-tenancy migration

Use the multi-tenancy migration tool to merge the databases of two existing nodes to operate under
a single Tessera instance.

The resulting database stores the transactions as though they were all sent to the primary node's
database.

The tool migrates both Tessera's raw transactions and regular transactions.

!!! warning

    Ensure to backup the primary database because the tool overwrites transactions with updated
    payloads, and does not recover gracefully if errors occur during the migration; the
    secondary database is only read from.

## Usage

The tool takes both nodes (named "primary" and "secondary") configuration files as input, which
contain the database credentials to connect; no other details in the configuration file is
used.

To run the migration tool, run the following command:

```bash
java -jar multitenancy_migration.jar --primary <primary node configuration file> --secondary <secondary node configuration file>
```

After performing the migration, the primary node can be started with both nodes key pairs, and can
decrypt the existing transactions using those keys.
