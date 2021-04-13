---
description: Migrating from Orion to Tessera
---

# Migration Utility

The migration tool reads all existing Orion configuration including any environment variables to create a Tessera configuration file and migrate data from an existing Orion database to Tessera.

The encryption algorithm etc are replicated in tessera this means no re-encryption is required. The tool doesn't provide a means for migrating from one set of keys to another. Rather it allows you to use your existing keys for Orion deployments.

## Migration

Download zip or tar distribution [link to be added later]

```bash
   The migration tool is built as a separate executable dist using gradle only.

   Unzip it run the executable.. 

   ./orion-to-tessera/bin/migrate --help to see command line usage.

   Required options:
   Orion config file options : [-f,orionfile, orionconfig]
   Tessera config output path : [-o,outputfile]
   Tessera jdbc options:
        tessera.jdbc.user=[Target Tessera DB username ]
        tessera.jdbc.password=[Target Tessera DB password ]
        tessera.jdbc.url=[Target Tessera DB JDBC connection string]
 ```

!!! important

     If migrating from a sql database to tessera then the driver must be added to the classpath
     and added to the start script [orion-to-tessera/bin/migrate].

[DDLs](https://github.com/jpmorganchase/tessera/tree/master/ddls/create-table) are available to help define Tessera databases ahead of migration.

### After migration Validation

At the end of migration number of encrypted transactions and privacy group data will be reported

```text
Example:

=== Migration report ===
Migrated 2156 of 2156 transactions
Migrated 56 of 56 privacy groups
```

If there is an error in migration the process will stop for the user to investigate and fix error before
restarting migration. The db needs to be empty before restart or else the migration will throw an exception.

<!--links-->
[building Tessera from source]: https://github.com/ConsenSys/tessera#building-tessera-from-source
[configuration file]: ../../Reference/SampleConfiguration.md#jdbc
