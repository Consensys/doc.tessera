---
description: Tessera command line interface subcommands
---

# Subcommands

## `keygen`

Use the `keygen` subcommand to [generate one or more key pairs] to store in files or a supported
key vault.

### `argonconfig`, `keygenconfig`

=== "Syntax"

    ```bash
    --argonconfig <FILE>
    ```

=== "Example"

    ```bash
    --argonconfig /home/me/node1/argonoptions.json
    ```

JSON file containing settings to override the [default Argon2 configuration].

Alternate syntax for this option is `-keygenconfig <FILE>`.

### `debug`

=== "Syntax"

    ```bash
    --debug
    ```

Prints full exception stack traces to STDOUT.

### `encryptor.ellipticCurve`

=== "Syntax"

    ```bash
    --encryptor.ellipticCurve <STING>
    ```

=== "Example"

    ```bash
    --encryptor.ellipticCurve secp384r1
    ```

The elliptic curve to use for key generation. Defaults to `secp256r1`.

### `encryptor.nonceLength`

=== "Syntax"

    ```bash
    --encryptor.nonceLength <INTEGER>
    ```

=== "Example"

    ```bash
    --encryptor.nonceLength 38
    ```

The nonce length used as the initialization vector (IV) for symmetric encryption. Defaults to 24.

### `encryptor.sharedKeyLength`

=== "Syntax"

    ```bash
    --encryptor.sharedKeyLength <INTEGER>
    ```

=== "Example"

    ```bash
    --encryptor.sharedKeyLength 48
    ```

The key length used for symmetric encryption when generating keys. Defaults to 32.

### `encryptor.symmetricCipher`

=== "Syntax"

    ```bash
    --encryptor.symmetricCipher <STRING>
    ```

=== "Example"

    ```bash
    --encryptor.symmetricCipher AES/CTR/NoPadding
    ```

The symmetric cipher to use for encrypting data. Defaults to `AES/GCM/NoPadding`.

### `encryptor.type`

=== "Syntax"

    ```bash
    --encryptor.type <STRING>
    ```

=== "Example"

    ```bash
    --encryptor.type EC
    ```

The [encryption type]. Possible values are `EC`, `NACL`, and `CUSTOM`. Defaults to `NACL`

### `keyout`, `filename`

=== "Syntax"

    ```bash
    --keyout <FILE>[,<FILE>...]
    ```

=== "Example"

    ```bash
    --keyout /Users/me/keys/nodeKey1,/Users/me/keys/nodeKey2
    ```

Comma-separated list of key files to generate. The number of arguments determines the number key
pairs to generate. Defaults to `null`.

### `vault.hashicorp.approlepath`

=== "Syntax"

    ```bash
    --vault.hashicorp.approlepath <PATH>
    ```

=== "Example"

    ```bash
    --vault.hashicorp.approlepath auth/approle/login
    ```

The [AppRole] path for HashiCorp Vault authentication. Defaults to `approle`.

Alternate syntax for this option is `-keygenvaultapprole <PATH>`

### `vault.hashicorp.tlskeystore`

=== "Syntax"

    ```bash
    --vault.hashicorp.tlskeystore <FILE>
    ```

=== "Example"

    ```bash
    --vault.hashicorp.tlskeystore /Users/me/auth/keystore.jks
    ```

Path to JKS keystore for TLS communication with HashiCorp Vault.

Alternate syntax for this option is `-keygenvaultkeystore <FILE>`.

### `vault.hashicorp.secretenginepath`

=== "Syntax"

    ```bash
    --vault.hashicorp.secretenginepath <PATH>
    ```

=== "Example"

    ```bash
    --vault.hashicorp.secretenginepath /engine/secret
    ```

Path to the v2 HashiCorp Vault secret engine.

Alternate syntax for this option is `-keygenvaultsecretengine <PATH>`.

### `vault.hashicorp.tlstruststore`

=== "Syntax"

    ```bash
    --vault.hashicorp.tlstruststore <FILE>
    ```

=== "Example"

    ```bash
    --vault.hashicorp.tlstruststore /Users/me/auth/truststore.jks
    ```

Path to JKS truststore for TLS communication with HashiCorp Vault.

Alternate syntax for this option is `-keygenvaulttruststore <FILE>`.

### `vault.type`

=== "Syntax"

    ```bash
    --vault.type <STRING>
    ```

=== "Example"

    ```bash
    --vault.type HASHICORP
    ```

The key vault provider in which to save the generated key.

If not specified, keys are encrypted and stored on the local filesystem. Valid options are
`AZURE`, `AWS`, and `HASHICORP`.

Alternate syntax for this option is `keygenvaulttype <STRING>`.

### `vault.url`

=== "Syntax"

    ```bash
    --vault.url <STRING>
    ```

=== "Example"

    ```bash
    --vault.url https://secretsmanager.us-west-2.amazonaws.com
    ```

Key vault base URL.

Alternate syntax for this option is `-keygenvaulturl <STRING>`.

### `configfile`

=== "Syntax"

    ```bash
    --configfile <FILE>
    ```

=== "Example"

    ```bash
    --config-file /home/me/me_node/tessera.conf
    ```

The path to the [Node's configuration file](../../HowTo/Configure/Tessera.md).

### `configout`

=== "Syntax"

    ```bash
    --configout <FILE>
    ```

=== "Example"

    ```bash
    --configout /home/me/me_node/update/tessera.conf
    ```

Path to save the updated configuration file to. You must supply the [`--configfile`](#configfile)
option.

Alternate syntax for this option is `-output <FILE>`.

### `pwdout`

=== "Syntax"

    ```bash
    --pwdout <FILE>
    ```

=== "Example"

    ```bash
    --pwdout /home/me/me_node/passwordFile
    ```

Path to save updated password list to. You must supply the [`--configout`](#configout) and
[`--configfile`](#configfile) options.

## `keyupdate`, `updatepassword`

[Update the password or encryption options] for an already locked key, or apply a new password to an
unlocked key.

### `configfile`

=== "Syntax"

    ```bash
    --configfile <FILE>
    ```

=== "Example"

    ```bash
    --config-file /home/me/me_node/tessera.conf
    ```

The path to the [Node's configuration file](../../HowTo/Configure/Tessera.md).

### `debug`

=== "Syntax"

    ```bash
    --debug
    ```

Prints full exception stack traces to STDOUT.

### `encryptor.ellipticCurve`

=== "Syntax"

    ```bash
    --encryptor.ellipticCurve <STING>
    ```

=== "Example"

    ```bash
    --encryptor.ellipticCurve secp384r1
    ```

The elliptic curve to use for the updated keys. Defaults to `secp256r1`.

### `encryptor.nonceLength`

=== "Syntax"

    ```bash
    --encryptor.nonceLength <INTEGER>
    ```

=== "Example"

    ```bash
    --encryptor.nonceLength 38
    ```

The nonce length used as the initialization vector (IV) for symmetric encryption. Defaults to 24.

### `encryptor.sharedKeyLength`

=== "Syntax"

    ```bash
    --encryptor.sharedKeyLength <INTEGER>
    ```

=== "Example"

    ```bash
    --encryptor.sharedKeyLength 48
    ```

The key length used for symmetric encryption when updating keys. Defaults to 32.

### `encryptor.symmetricCipher`

=== "Syntax"

    ```bash
    --encryptor.symmetricCipher <STRING>
    ```

=== "Example"

    ```bash
    --encryptor.symmetricCipher AES/CTR/NoPadding
    ```

The symmetric cipher to use for encrypting data. Defaults to `AES/GCM/NoPadding`.

### `encryptor.type`

=== "Syntax"

    ```bash
    --encryptor.type <STRING>
    ```

=== "Example"

    ```bash
    --encryptor.type EC
    ```

The [encryption type]. Possible values are `EC`, `NACL`, and `CUSTOM`. Defaults to `NACL`

### `keys.keyData.config.data.aopts.algorithm`

=== "Syntax"

    ```bash
    --keys.keyData.config.data.aopts.algorithm <STRING>
    ```

=== "Example"

    ```bash
    --keys.keyData.config.data.aopts.algorithm id
    ```

The [Argon2] variant to use. Defaults to `i`.

Valid options are `i`, `d`, and `id`.

### `keys.keyData.config.data.aopts.iterations`

=== "Syntax"

    ```bash
    --keys.keyData.config.data.aopts.iterations <INTEGER>
    ```

=== "Example"

    ```bash
    --keys.keyData.config.data.aopts.iterations 4
    ```

The number of [Argon2] iterations to perform. Defaults to 10.

### `keys.keyData.config.data.aopts.memory`

=== "Syntax"

    ```bash
    --keys.keyData.config.data.aopts.memory <INTEGER>
    ```

=== "Example"

    ```bash
    --keys.keyData.config.data.aopts.memory 1248480
    ```

Sets the [Argon2] memory usage. Defaults to 1048576.

### `keys.keyData.config.data.aopts.parallelism`

=== "Syntax"

    ```bash
    --keys.keyData.config.data.aopts.parallelism <INTEGER>
    ```

=== "Example"

    ```bash
    --keys.keyData.config.data.aopts.parallelism 6
    ```

Set the number of parallel [Argon2] threads. Defaults to 4.

### `keys.keyData.privateKeyPath`

=== "Syntax"

    ```bash
    --keys.keyData.privateKeyPath <PATH>
    ```

=== "Example"

    ```bash
    --keys.keyData.privateKeyPath /Users/me/mynode/nodekey.key
    ```

Path to the private key file to update. This option is mandatory.

### `keys.passwordFile`

=== "Syntax"

    ```bash
    --keys.passwordFile <FILE>
    ```

=== "Example"

    ```bash
    --keys.passwordFile /Users/me/mynode/passwordFile
    ```

File containing the password to unlock the private key specified using
[`keys.keyData.privateKeyPath`](#keys.keyData.privateKeyPath).

### `keys.password`

=== "Syntax"

    ```bash
    --keys.passwordFile <STRING>
    ```

=== "Example"

    ```bash
    --keys.passwordFile changeme
    ```

Password to unlock the private key specified using
[`keys.keyData.privateKeyPath`](#keys.keyData.privateKeyPath).

<!-- links -->
[default Argon2 configuration]: ../../HowTo/Configure/Keys/Secure-Keys.md
[encryption type]: ../../HowTo/Configure/Cryptographic-elliptic-curves.md
[generate one or more key pairs]: ../../HowTo/Generate-Keys/Generate-Keys.md
[AppRole]: https://www.vaultproject.io/docs/auth/approle
[Argon2]: https://github.com/P-H-C/phc-winner-argon2
[Update the password or encryption options]: ../../HowTo/Generate-Keys/File-Stored-Keys.md#updating-password-protected-private-keys
