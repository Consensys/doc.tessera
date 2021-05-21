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
    tessera keygen --argonconfig <FILE>
    ```

=== "Example"

    ```bash
    tessera keygen --argonconfig /home/me/node1/argonoptions.json
    ```

JSON file containing settings to override the [default Argon2 configuration].

Legacy syntax for this option is `-keygenconfig <FILE>`.

### `configfile`

=== "Syntax"

    ```bash
    tessera keygen --configfile <FILE>
    ```

=== "Example"

    ```bash
    tessera keygen --configfile /home/me/me_node/tessera.conf
    ```

Path to the node's [configuration file](../../HowTo/Configure/Tessera.md).

Provide this option when
[updating a configuration file with new keys](../../HowTo/Configure/Keys/Overview.md#update-a-configuration-file-with-new-keys).
If [`configout`](#configout) and [`pwdout`](#pwdout) are not provided, the updated configuration
file prints to the terminal.

### `configout`

=== "Syntax"

    ```bash
    tessera keygen --configout <FILE>
    ```

=== "Example"

    ```bash
    tessera keygen --configfile /home/me/me_node/tessera.conf --configout /home/me/me_node/update/tessera.conf
    ```

Path to save the updated configuration file to.
To use this option, you must supply the [`--configfile`](#configfile) option.

Legacy syntax for this option is `-output <FILE>`.

### `debug`

=== "Syntax"

    ```bash
    tessera keygen --debug
    ```

Prints full exception stack traces to `stdout`.

### `encryptor.ellipticCurve`

=== "Syntax"

    ```bash
    tessera keygen --encryptor.ellipticCurve <STRING>
    ```

=== "Example"

    ```bash
    tessera keygen --encryptor.ellipticCurve secp384r1
    ```

Elliptic curve to use for key generation.
Defaults to `secp256r1`.

### `encryptor.nonceLength`

=== "Syntax"

    ```bash
    tessera keygen --encryptor.nonceLength <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keygen --encryptor.nonceLength 38
    ```

Nonce length to use as the initialization vector (IV) for symmetric encryption.
Defaults to 24.

### `encryptor.sharedKeyLength`

=== "Syntax"

    ```bash
    tessera keygen --encryptor.sharedKeyLength <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keygen --encryptor.sharedKeyLength 48
    ```

Key length to use for symmetric encryption when generating keys.
Defaults to 32.

### `encryptor.symmetricCipher`

=== "Syntax"

    ```bash
    tessera keygen --encryptor.symmetricCipher <STRING>
    ```

=== "Example"

    ```bash
    tessera keygen --encryptor.symmetricCipher AES/CTR/NoPadding
    ```

Symmetric cipher to use for encrypting data.
Defaults to `AES/GCM/NoPadding`.

### `encryptor.type`

=== "Syntax"

    ```bash
    tessera keygen --encryptor.type <STRING>
    ```

=== "Example"

    ```bash
    tessera keygen --encryptor.type EC
    ```

[Encryption type].
Possible values are `EC`, `NACL`, and `CUSTOM`.
Defaults to `NACL`

### `keyout`, `filename`

=== "Syntax"

    ```bash
    tessera keygen --keyout <FILE>[,<FILE>...]
    ```

=== "Example"

    ```bash
    tessera keygen --keyout /Users/me/keys/nodeKey1,/Users/me/keys/nodeKey2
    ```

Comma-separated list of key files to generate.
The number of arguments determines the number of key pairs to generate.
Defaults to `null`.

Legacy syntax for this option is `-filename <FILE>[,<FILE>...]`.

### `pwdout`

=== "Syntax"

    ```bash
    tessera keygen --pwdout <FILE>
    ```

=== "Example"

    ```bash
    tessera keygen --pwdout /home/me/me_node/passwordFile
    ```

Path to save updated password list to.
To use this option, you must supply the [`--configout`](#configout) and [`--configfile`](#configfile) options.

### `vault.hashicorp.approlepath`

=== "Syntax"

    ```bash
    tessera keygen --vault.hashicorp.approlepath <PATH>
    ```

=== "Example"

    ```bash
    tessera keygen --vault.hashicorp.approlepath auth/approle/login
    ```

[AppRole] path for HashiCorp Vault authentication.
Defaults to `approle`.

Legacy syntax for this option is `-keygenvaultapprole <PATH>`.

### `vault.hashicorp.secretenginepath`

=== "Syntax"

    ```bash
    tessera keygen --vault.hashicorp.secretenginepath <PATH>
    ```

=== "Example"

    ```bash
    tessera keygen --vault.hashicorp.secretenginepath /engine/secret
    ```

Path to the v2 HashiCorp Vault secret engine.

Legacy syntax for this option is `-keygenvaultsecretengine <PATH>`.

### `vault.hashicorp.tlskeystore`

=== "Syntax"

    ```bash
    tessera keygen --vault.hashicorp.tlskeystore <FILE>
    ```

=== "Example"

    ```bash
    tessera keygen --vault.hashicorp.tlskeystore /Users/me/auth/keystore.jks
    ```

Path to JKS keystore for TLS communication with HashiCorp Vault.

Legacy syntax for this option is `-keygenvaultkeystore <FILE>`.

### `vault.hashicorp.tlstruststore`

=== "Syntax"

    ```bash
    tessera keygen --vault.hashicorp.tlstruststore <FILE>
    ```

=== "Example"

    ```bash
    tessera keygen --vault.hashicorp.tlstruststore /Users/me/auth/truststore.jks
    ```

Path to JKS truststore for TLS communication with HashiCorp Vault.

Legacy syntax for this option is `-keygenvaulttruststore <FILE>`.

### `vault.type`

=== "Syntax"

    ```bash
    tessera keygen --vault.type <STRING>
    ```

=== "Example"

    ```bash
    tessera keygen --vault.type HASHICORP
    ```

Key vault provider in which to save the generated key.

If not specified, keys are encrypted and stored on the local filesystem.
Valid options are `AZURE`, `AWS`, and `HASHICORP`.

Legacy syntax for this option is `keygenvaulttype <STRING>`.

### `vault.url`

=== "Syntax"

    ```bash
    tessera keygen --vault.url <STRING>
    ```

=== "Example"

    ```bash
    tessera keygen --vault.url https://secretsmanager.us-west-2.amazonaws.com
    ```

Key vault base URL.

Legacy syntax for this option is `-keygenvaulturl <STRING>`.

## `keyupdate`, `-updatepassword`

[Update the password or encryption options] for an already locked key, or apply a new password to an unlocked key.

Legacy syntax for this subcommand is `-updatepassword [COMMAND OPTIONS]`.

### `configfile`

=== "Syntax"

    ```bash
    tessera keyupdate --configfile <FILE>
    ```

=== "Example"

    ```bash
    tessera keyupdate --configfile /home/me/me_node/tessera.conf
    ```

Path to the node's [configuration file](../../HowTo/Configure/Tessera.md).

### `debug`

=== "Syntax"

    ```bash
    tessera keyupdate --debug
    ```

Prints full exception stack traces to `stdout`.

### `encryptor.ellipticCurve`

=== "Syntax"

    ```bash
    tessera keyupdate --encryptor.ellipticCurve <STING>
    ```

=== "Example"

    ```bash
    tessera keyupdate --encryptor.ellipticCurve secp384r1
    ```

Elliptic curve to use for the updated keys.
Defaults to `secp256r1`.

### `encryptor.nonceLength`

=== "Syntax"

    ```bash
    tessera keyupdate --encryptor.nonceLength <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keyupdate --encryptor.nonceLength 38
    ```

Nonce length to use as the initialization vector (IV) for symmetric encryption.
Defaults to 24.

### `encryptor.sharedKeyLength`

=== "Syntax"

    ```bash
    tessera keyupdate --encryptor.sharedKeyLength <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keyupdate --encryptor.sharedKeyLength 48
    ```

Key length to use for symmetric encryption when updating keys.
Defaults to 32.

### `encryptor.symmetricCipher`

=== "Syntax"

    ```bash
    tessera keyupdate --encryptor.symmetricCipher <STRING>
    ```

=== "Example"

    ```bash
    tessera keyupdate --encryptor.symmetricCipher AES/CTR/NoPadding
    ```

Symmetric cipher to use for encrypting data.
Defaults to `AES/GCM/NoPadding`.

### `encryptor.type`

=== "Syntax"

    ```bash
    tessera keyupdate --encryptor.type <STRING>
    ```

=== "Example"

    ```bash
    tessera keyupdate --encryptor.type EC
    ```

[Encryption type].
Possible values are `EC`, `NACL`, and `CUSTOM`.
Defaults to `NACL`.

### `keys.keyData.config.data.aopts.algorithm`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.algorithm <STRING>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.algorithm id
    ```

[Argon2] variant to use.
Defaults to `i`.

Valid options are `i`, `d`, and `id`.

### `keys.keyData.config.data.aopts.iterations`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.iterations <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.iterations 4
    ```

Number of [Argon2] iterations to perform.
Defaults to 10.

### `keys.keyData.config.data.aopts.memory`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.memory <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.memory 1248480
    ```

Sets the [Argon2] memory usage.
Defaults to 1048576.

### `keys.keyData.config.data.aopts.parallelism`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.parallelism <INTEGER>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.keyData.config.data.aopts.parallelism 6
    ```

Sets the number of parallel [Argon2] threads.
Defaults to 4.

### `keys.keyData.privateKeyPath`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.keyData.privateKeyPath <PATH>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.keyData.privateKeyPath /Users/me/mynode/nodekey.key
    ```

Path to the private key file to update.
This option is required.

### `keys.password`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.passwordFile <STRING>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.passwordFile changeme
    ```

Password to unlock the private key specified using [`keys.keyData.privateKeyPath`](#keys.keyData.privateKeyPath).

### `keys.passwordFile`

=== "Syntax"

    ```bash
    tessera keyupdate --keys.passwordFile <FILE>
    ```

=== "Example"

    ```bash
    tessera keyupdate --keys.passwordFile /Users/me/mynode/passwordFile
    ```

File containing the password to unlock the private key specified using
[`keys.keyData.privateKeyPath`](#keys.keyData.privateKeyPath).

## `version`

=== "Syntax"

    ```bash
    tessera version
    ```

Prints version information and exits.

<!-- links -->
[default Argon2 configuration]: ../../HowTo/Configure/Keys/Secure-Keys.md
[Encryption type]: ../../HowTo/Configure/Cryptographic-elliptic-curves.md
[generate one or more key pairs]: ../../HowTo/Generate-Keys/Generate-Keys.md
[AppRole]: https://www.vaultproject.io/docs/auth/approle
[Argon2]: https://github.com/P-H-C/phc-winner-argon2
[Update the password or encryption options]: ../../HowTo/Generate-Keys/File-Stored-Keys.md#updating-password-protected-private-keys
