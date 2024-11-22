---
title: Migrate from Orion
description: Migrate your Orion configuration and data to Tessera.
sidebar_position: 1
---

# Migrating from Orion to Tessera

A utility is included in Tessera which enables migration of an Orion configuration file and database to a Tessera configuration file and database for Hyperledger Besu (versions prior to 25.1.0).

A full migration workflow would be as follows:

1. Download or build the migration utility.
1. Shut down the Orion and Hyperledger Besu (versions prior to 25.1.0) nodes.
1. Perform the migration.
1. Start Tessera with the new configuration and database files.
1. Start Hyperledger Besu (versions prior to 25.1.0) nodes.

A full tutorial including links to the utility and example code can be found [here](https://docs.orion.consensys.net/en/latest/Tutorials/Migrating-from-Orion-to-Tessera/).
