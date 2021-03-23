---
description: Migrating from Constellation to Tessera
---

# Migration Utilities

Tessera provides utilities to migrate existing Constellation configurations and data stores for use
with Tessera.

!!! important

    The utilities are available when [building Tessera from source].

The full migration workflow is as follows:

1. Shut down Constellation and GoQuorum nodes
1. [Migrate the database](#data-migration)
1. [Migrate the configuration](#configuration-migration)
1. Start Tessera and GoQuorum nodes

## Migrate data

Use the data migration utility to migrate a Constellation data store
(BerkeleyDB or directory/file storage) to a Tessera compatible one (H2, SQLITE). By default Tessera
uses an H2 database, however alternatives can be configured.

[DDLs](https://github.com/jpmorganchase/tessera/tree/master/ddls/create-table) are available to help
define other databases.

Create an `alias` to simplify running the utility commands:

```bash
alias tessera-data-migration="java -jar /path/to/tessera/data-migration/target/data-migration-${version}-cli.jar"
```

To access the CLI help, run:

```text
tessera-data-migration help

usage: tessera-data-migration
-exporttype <TYPE>   Export DB type i.e. h2, sqlite
-inputpath <PATH>    Path to input file or directory
-outputfile <PATH>   Path to output file
-storetype <TYPE>    Store type i.e. bdb, dir
-dbuser              Set a username on the migrated database (only applies to H2)
-dbpass              Set a password for the specified user (only applies to H2)
```

### Migrate a BerkeleyDB database

To migrate a BerkeleyDB (`bdb`) database for use with Tessera, first export your existing store
using `db_dump`:

```bash
db_dump -f exported.txt c1/cn§.db/payload.db
```

Then run the following command to perform the migration:

```bash
tessera-data-migration -storetype bdb -inputpath exported.txt -dbuser <username> -dbpass <password> -outputfile <PATH> -exporttype <TYPE>
```

### Migrate directory/file storage

To migrate directory/file storage, run:

```bash
tessera-data-migration -storetype dir -inputpath /path/to/dir -dbuser <username> -dbpass <password> -outputfile <PATH> -exporttype <TYPE>
```

## Output types

To use H2 as the output storage, specify:

```bash
-exporttype h2 -outputfile /path/to/h2database
```

To use SQLite as the output storage, specify:

```bash
-exporttype sqlite -outputfile /path/to/sqlitedb
```

### Database usernames and passwords

Run the following command to set a username and password on the migrated database:

```bash
-dbuser <username> -dbpass <password>
```

To set the database without a username and password, specify the arguments without parameters:

```bash
-dbuser -dbpass
```

!!! note

    Although SQLite does not have usernames and passwords, you must at least specify
    the empty configuration.

### After migration

Place the output file in the location specified in the [configuration file]
(without the file extension).

```json
"jdbc": {
    "url": "jdbc:h2:./c1/migratedfile;MODE=Oracle;TRACE_LEVEL_SYSTEM_OUT=0"
}
```

!!! note

    The database is migrated without user credentials, so if using the file directly then the
    username and password should not be specified in the configuration.

The Constellation files can now be cleaned, since they are no longer used.

## Configuration Migration

Use the configuration migration utility to generate a Tessera compatible `.json` configuration file
locally from an existing Constellation `.toml` configuration file. Individual configuration
parameters can be overridden during the migration process if required.

Create an `alias` to simplify running the utility commands::

```bash
alias tessera-config-migration="java -jar /path/to/tessera/config-migration/target/config-migration-${version}-cli.jar"
```

Most of the Constellation configuration command line parameters are supported.

To view the CLI help which provides details on overriding specific configuration items from a
`.toml` file, run:

```bash
tessera-config-migration help
```

To migrate a `.toml` file to `.json` with no overrides, run:

```bash
tessera-config-migration --tomlfile="/path/to/constellation-config.toml"
```

By default, the generated `.json` configuration is printed to the console and saved to
`./tessera-config.json`. To save to another location, with a different filename use the
`--outputfile <PATH>` CLI option.

!!! important

    Unlike Constellation, Tessera does not use a separate `ipwhitelist`. If `useWhiteList` is set to
    `true` in the `.json` configuration, then the `peers` list is used as the whitelist.

    If `ipwhitelist` is provided in the `.toml` configuration file, then `useWhiteList` is set to
    `true`, but nodes included in the list are not be added to the Tessera configuration. Ensure
    you add nodes that were included in `ipwhitelist` to `peers` after using the utility.

### Validation

The generated configuration is validated, and messages are printed to the terminal if validation
identifies issues. For example, if a `hostname` is not provided then the following
message displays:

```text
Warning: may not be null on property serverConfig.hostName
```

Any validation violations must be addressed before the configuration can be used with Tessera.

<!--links-->
[building Tessera from source]: https://github.com/ConsenSys/tessera#building-tessera-from-source
[configuration file]: ../../Reference/SampleConfiguration.md#jdbc
