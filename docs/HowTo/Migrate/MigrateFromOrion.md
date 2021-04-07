---
description: Migrating from Orion to Tessera
---

# Migration Utilities

The migration tool reads all existing Orion config including any environment variables 
to create a tessera config file and migrate data from an existing orion database to tessera. 
 

The encryption algos etc are replicated in tessera this means no re-encryption is required. 
The tool doesn't provide a means from migrating from one set of keys to another. Rather is allows you to 
use your existing keys for current Orion deployments. 

!!! important

    The tool is for once only migrations from Orion to tessera, future versions on tessera might not 
    support the migration process.

The full migration workflow is as follows:

1. Shut down Besu and Orion nodes
1. Migrate Orion config and data to Tessera.
1. Start Besu with Tessera node

## Migrate data


Download zip or tar distribution [link assuming it will be some time this century]

./orion-to-tessera/bin/migrate

Required options: 
Orion config file options : [-f,orionfile, orionconfig]
Tessera config output path : [-o,outputfile]
Tessera jdbc options: 
	tessera.jdbc.user=[Target Tessera DB username ]
	tessera.jdbc.password=[Target Tessera DB password ]
	tessera.jdbc.url=[Target Tessera DB JDBC connection string]
  
  
If migration from a sql database to tessera then the driver must be added to the classpath 
and added to the start script [orion-to-tessera/bin/migrate]. 


Use the data migration utility to migrate a Constellation data store
(BerkeleyDB or directory/file storage) to a Tessera compatible one (H2, SQLITE). By default Tessera
uses an H2 database, however alternatives can be configured.

[DDLs](https://github.com/jpmorganchase/tessera/tree/master/ddls/create-table) are available to help
define other databases.


### After migration

Due to the private key file format differing between 
Orion and Tessera the private key file is updated to the tessera format and the Orion key is backed up 
during migration. 


### Validation

some text

Any validation violations must be addressed before the configuration can be used with Tessera.

<!--links-->
[building Tessera from source]: https://github.com/ConsenSys/tessera#building-tessera-from-source
[configuration file]: ../../Reference/SampleConfiguration.md#jdbc
