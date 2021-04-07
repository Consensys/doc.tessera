---
description: Migrating from Orion to Tessera
---

# Migration Utility

The migration tool reads all existing Orion config including any environment variables 
to create a tessera config file and migrate data from an existing orion database to tessera. 
 

The encryption algorithm etc are replicated in tessera this means no re-encryption is required. 
The tool doesn't provide a means for migrating from one set of keys to another. Rather it allows you to 
use your existing keys for Orion deployments. 


## Migration

Download zip or tar distribution [link assuming it will be some time this century]


```
   ./orion-to-tessera/bin/migrate

   Required options: 
   Orion config file options : [-f,orionfile, orionconfig]
   Tessera config output path : [-o,outputfile]
   Tessera jdbc options:  
	   tessera.jdbc.user=[Target Tessera DB username ]
	   tessera.jdbc.password=[Target Tessera DB password ]
	   tessera.jdbc.url=[Target Tessera DB JDBC connection string]
 ```  

!!! important

     If migration from a sql database to tessera then the driver must be added to the classpath 
     and added to the start script [orion-to-tessera/bin/migrate]. 


[DDLs](https://github.com/jpmorganchase/tessera/tree/master/ddls/create-table) are available to help
define Tessera databases ahead of migration.


### After migration Validation

Due to the private key file format differing between Orion and Tessera the private key file is updated to the 
tessera format and the Orion key is backed up during migration. 


some text


<!--links-->
[building Tessera from source]: https://github.com/ConsenSys/tessera#building-tessera-from-source
[configuration file]: ../../Reference/SampleConfiguration.md#jdbc
