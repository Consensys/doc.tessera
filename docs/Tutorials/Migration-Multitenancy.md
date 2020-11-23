---
title: Tessera Multi-tenancy Migration
description: Migrate two Tessera nodes into a single multi-tenancy node
---

# Multitenancy migration

The multi-tenancy migration tool enables node operators to take two existing nodes databases that they wish to operate
under a single instance of Tessera, and merge them together.
The resulting database contains the transactions as though they were all sent to the primary node'a database in the
first place.

The tool migrates both Tessera's raw transactions and regular transactions. Backups of the primary database should be
taken, as the tool will overwrite transactions with updated payloads, and does not recover gracefully should any errors
occur during the migration; the secondary database is only read from.

## Usage

The tool takes both nodes (named "primary" and "secondary") configuration files as input, which contain the database
credentials in order to connect; no other details in the configuration file is used.

To run the migration tool, run the following command:

```bash
java -jar multitenancy_migration.jar --primary <primary node configuration file> --secondary <secondary node configuration file>
```

After the migration has been run, the primary node can be started up with both nodes key pairs and be able to
decrypt the existing transactions using those keys.
