---
title: Upgrade the database
description: Upgrading the database
sidebar_position: 3
---

# Upgrade the database

If you are running on [21.10.0](https://github.com/ConsenSys/tessera/releases/tag/tessera-21.10.0) or previous versions, perform a database upgrade to work with the latest version of Tessera.

- For non-H2 users, update the existing database schema by executing the appropriate [alter script](https://github.com/ConsenSys/tessera/tree/master/ddls/add-codec).

- For H2 users, a complete database migration is required before running the [alter script](https://github.com/ConsenSys/tessera/tree/master/ddls/add-codec). See more details from the [H2 release](https://github.com/h2database/h2database/releases/tag/version-2.0.202) and their recommended [upgrade process](https://h2database.com/html/tutorial.html#upgrade_backup_restore). You can also refer to the [example migration scripts](https://github.com/ConsenSys/tessera/blob/master/ddls/scripts/h2-upgrade.sh).
