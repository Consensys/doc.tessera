---
description: Database configuration
---

# Database configuration

You can configure the [`jdbc`](../../Reference/SampleConfiguration.md#jdbc) item in the Tessera
[configuration file](Tessera.md) to connect to an external database.
You can specify any valid JDBC URL.
Refer to your provider's details to construct a valid JDBC URL.

!!! example "JDBC configuration"

    ```json
    "jdbc": {
      "url": "[JDBC URL]",
      "username": "[JDBC Username]",
      "password": "[JDBC Password]"
    }
    ```

## Database password encryption

We recommend encrypting your database password.
You can do this using [Jasypt](https://github.com/jasypt/jasypt).

To enable this feature, replace your plaintext database password with its encrypted value and wrap it inside an `ENC()` function.

!!! example "JDBC configuration with encrypted password"

    ```json
    "jdbc": {
        "username": "sa",
        "password": "ENC(ujMeokIQ9UFHSuBYetfRjQTpZASgaua3)",
        "url": "jdbc:h2:/qdata/c1/db1",
        "autoCreateTables": true
    }
    ```

Jasypt requires a secret key (password) and a configured algorithm to encrypt/decrypt this configuration entry.
This password can either be loaded into Tessera from the file system or user input.
For file system input, the location of this secret file must set in the `TESSERA_CONFIG_SECRET` environment variable.

If the database password isn't wrapped inside `ENC()`, Tessera treats it as a plaintext password.
This approach is not recommended for production environments.

!!! note

    Jasypt encryption is currently only available for the `jdbc.password` field.

### How to encrypt the database password

1. Download and unzip [Jasypt](https://github.com/jasypt/jasypt) and navigate to the `bin` directory.
1. Encrypt the password using the following command:

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

1. Place the wrapped output, `ENC(rJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb)`, in the configuration JSON file.

## Configure an alternate database

By default, Tessera uses an H2 file-based database, but you can use any JDBC-compatible database.

To do this, add the necessary drivers to the lib directory and start Tessera as usual.

```bash
cp some-jdbc-driver.jar tessera-[version]/lib/
./tessera-[version]/bin/tessera -configfile config.json
```

[DDL scripts] are available for more popular databases.
These can be adapted to whichever database you choose.

<!-- links -->
[DDL scripts]: https://github.com/ConsenSys/tessera/tree/master/ddls/create-table
