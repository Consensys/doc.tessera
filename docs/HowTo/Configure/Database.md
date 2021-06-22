---
description: Database configuration
---

# Database configuration

Tessera's database uses JDBC to connect to an external database.
Any valid JDBC URL may be specified, refer to your providers details to construct a valid JDBC URL.

```json
"jdbc": {
  "url": "[JDBC URL]",
  "username": "[JDBC Username]",
  "password": "[JDBC Password]"
}
```

## Encrypt the database password

Certain entries in the Tessera configuration file must be obfuscated to prevent any attempts from
attackers to gain access to critical parts of the application (for example the database).
The database password can be encrypted using [Jasypt](http://www.jasypt.org) to avoid it being
exposed as plain text in the configuration file.

To enable this feature, simply replace your plain-text database password with its encrypted value
and wrap it inside an `ENC()` function.

```json
"jdbc": {
    "username": "sa",
    "password": "ENC(ujMeokIQ9UFHSuBYetfRjQTpZASgaua3)",
    "url": "jdbc:h2:/qdata/c1/db1",
    "autoCreateTables": true
}
```

Being a Password-Based Encryptor, Jasypt requires a secret key (password) and a configured algorithm
to encrypt/decrypt this configuration entry. This password can either be loaded into Tessera from file system
or user input. For file system input, the location of this secret file needs to be set in environment
variable `TESSERA_CONFIG_SECRET`

If the database password is not wrapped inside `ENC()`, Tessera will simply treat it as a plain-text
password however this approach is not recommended for production environments.

!!! note
    Jasypt encryption is currently only available for the `jdbc.password` field

### How to encrypt database password

1. Download and unzip [Jasypt](http://www.jasypt.org) and redirect to the `bin` directory
1. Encrypt the password

    === "Command"

        ```bash
        ./encrypt.sh input=dbpassword password=quorum
        ```

    === "Output"

        ```bash
        ----ENVIRONMENT-----------------

        Runtime: Oracle Corporation Java HotSpot(TM) 64-Bit Server VM 25.171-b11

        ----ARGUMENTS-------------------

        input: dbpassword
        password: quorum

        ----OUTPUT----------------------

        rJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb
        ```

1. Place the wrapped output, `ENC(rJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb)`, in the configuration JSON file

## Configure an alternate database

By default, Tessera uses an H2 file-based database, but any JDBC compatible database can be used.

To do this, add the necessary drivers to the lib directory and start as usual

```bash
cp some-jdbc-driver.jar tessera-[version]/lib/
./tessera-[version]/bin/tessera -configfile config.json
```

[DDL scripts] are available for more popular databases, these can be adapted to whichever database
you choose.

<!-- links -->
[DDL scripts]: https://github.com/ConsenSys/tessera/tree/master/ddls/create-table
