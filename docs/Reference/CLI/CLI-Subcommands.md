---
title: Subcommands
description: Tessera command line interface subcommands
sidebar_position: 2
---

# Subcommands

This reference describes the syntax of the Tessera command line interface (CLI) subcommands.

To start a Tessera node using subcommands, run:

```bash
tessera [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]
```

## `keygen`

Use the `keygen` subcommand to [generate one or more key pairs] to store in files or a supported key vault.

### `argonconfig`, `keygenconfig`

<!--tabs-->

# Syntax

```bash
tessera keygen --argonconfig <FILE>
```

# Example

```bash
tessera keygen --argonconfig /home/me/node1/argonoptions.json
```

<!--/tabs-->

JSON file containing settings to override the [default Argon2 configuration].

Legacy syntax for this option is `-keygenconfig <FILE>`.

### `configfile`, `config-file`

<!--tabs-->

# Syntax

```bash
tessera keygen --configfile <FILE>
```

# Example

```bash
tessera keygen --configfile /home/me/me_node/tessera.conf
```

<!--/tabs-->

Path to the node [configuration file](../../HowTo/Configure/Tessera.md).

Provide this option when [updating a configuration file with new keys](../../HowTo/Configure/Keys/Overview.md#update-a-configuration-file-with-new-keys). If [`configout`](#configout) and [`pwdout`](#pwdout) are not provided, the updated configuration file prints to the terminal.

### `configout`

<!--tabs-->

# Syntax

```bash
tessera keygen --configout <FILE>
```

# Example

```bash
tessera keygen --configfile /home/me/me_node/tessera.conf --configout /home/me/me_node/update/tessera.conf
```

<!--/tabs-->

Path to save the updated configuration file to. To use this option, you must supply the [`--configfile`](#configfile-config-file) option.

Legacy syntax for this option is `-output <FILE>`.

### `debug`

```bash
tessera keygen --debug
```

Prints full exception stack traces to `stdout`.

### `encryptor.ellipticCurve`

<!--tabs-->

# Syntax

```bash
tessera keygen --encryptor.ellipticCurve <STRING>
```

# Example

```bash
tessera keygen --encryptor.ellipticCurve secp384r1
```

<!--/tabs-->

Elliptic curve to use for key generation. Defaults to `secp256r1`.

### `encryptor.nonceLength`

<!--tabs-->

# Syntax

```bash
tessera keygen --encryptor.nonceLength <INTEGER>
```

# Example

```bash
tessera keygen --encryptor.nonceLength 38
```

<!--/tabs-->

Nonce length to use as the initialization vector (IV) for symmetric encryption. Defaults to 24.

### `encryptor.sharedKeyLength`

<!--tabs-->

# Syntax

```bash
tessera keygen --encryptor.sharedKeyLength <INTEGER>
```

# Example

```bash
tessera keygen --encryptor.sharedKeyLength 48
```

<!--/tabs-->

Key length to use for symmetric encryption when generating keys. Defaults to 32.

### `encryptor.symmetricCipher`

<!--tabs-->

# Syntax

```bash
tessera keygen --encryptor.symmetricCipher <STRING>
```

# Example

```bash
tessera keygen --encryptor.symmetricCipher AES/CTR/NoPadding
```

<!--/tabs-->

Symmetric cipher to use for encrypting data. Defaults to `AES/GCM/NoPadding`.

### `encryptor.type`

<!--tabs-->

# Syntax

```bash
tessera keygen --encryptor.type <STRING>
```

# Example

```bash
tessera keygen --encryptor.type EC
```

<!--/tabs-->

[Encryption type]. Possible values are `EC`, `NACL`, and `CUSTOM`. Defaults to `NACL`

### `keyout`, `filename`

<!--tabs-->

# Syntax

```bash
tessera keygen --keyout <FILE>[,<FILE>...]
```

# Example

```bash
tessera keygen --keyout /Users/me/keys/nodeKey1,/Users/me/keys/nodeKey2
```

<!--/tabs-->

Comma-separated list of key files to generate. The number of arguments determines the number of key pairs to generate. Defaults to `null`.

Legacy syntax for this option is `-filename <FILE>[,<FILE>...]`.

### `pwdout`

<!--tabs-->

# Syntax

```bash
tessera keygen --pwdout <FILE>
```

# Example

```bash
tessera keygen --pwdout /home/me/me_node/passwordFile
```

<!--/tabs-->

Path to save updated password list to. To use this option, you must supply the [`--configout`](#configout) and [`--configfile`](#configfile-config-file) options.

### `vault.hashicorp.approlepath`

<!--tabs-->

# Syntax

```bash
tessera keygen --vault.hashicorp.approlepath <PATH>
```

# Example

```bash
tessera keygen --vault.hashicorp.approlepath auth/approle/login
```

<!--/tabs-->

[AppRole] path for HashiCorp Vault authentication. Defaults to `approle`.

Legacy syntax for this option is `-keygenvaultapprole <PATH>`.

### `vault.hashicorp.secretenginepath`

<!--tabs-->

# Syntax

```bash
tessera keygen --vault.hashicorp.secretenginepath <PATH>
```

# Example

```bash
tessera keygen --vault.hashicorp.secretenginepath /engine/secret
```

<!--/tabs-->

Path to the v2 HashiCorp Vault secret engine.

Legacy syntax for this option is `-keygenvaultsecretengine <PATH>`.

### `vault.hashicorp.tlskeystore`

<!--tabs-->

# Syntax

```bash
tessera keygen --vault.hashicorp.tlskeystore <FILE>
```

# Example

```bash
tessera keygen --vault.hashicorp.tlskeystore /Users/me/auth/keystore.jks
```

<!--/tabs-->

Path to JKS keystore for TLS communication with HashiCorp Vault.

Legacy syntax for this option is `-keygenvaultkeystore <FILE>`.

### `vault.hashicorp.tlstruststore`

<!--tabs-->

# Syntax

```bash
tessera keygen --vault.hashicorp.tlstruststore <FILE>
```

# Example

```bash
tessera keygen --vault.hashicorp.tlstruststore /Users/me/auth/truststore.jks
```

<!--/tabs-->

Path to JKS truststore for TLS communication with HashiCorp Vault.

Legacy syntax for this option is `-keygenvaulttruststore <FILE>`.

### `vault.type`

<!--tabs-->

# Syntax

```bash
tessera keygen --vault.type <STRING>
```

# Example

```bash
tessera keygen --vault.type HASHICORP
```

<!--/tabs-->

Key vault provider in which to save the generated key.

If not specified, keys are encrypted and stored on the local filesystem. Valid options are `AZURE`, `AWS`, and `HASHICORP`.

Legacy syntax for this option is `keygenvaulttype <STRING>`.

### `vault.url`

<!--tabs-->

# Syntax

```bash
tessera keygen --vault.url <STRING>
```

# Example

```bash
tessera keygen --vault.url https://secretsmanager.us-west-2.amazonaws.com
```

<!--/tabs-->

Key vault base URL.

Legacy syntax for this option is `-keygenvaulturl <STRING>`.

## `keyupdate`, `-updatepassword`

[Update the password or encryption options] for an already locked key, or apply a new password to an unlocked key.

Legacy syntax for this subcommand is `-updatepassword [COMMAND OPTIONS]`.

### `configfile`, `config-file`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --configfile <FILE>
```

# Example

```bash
tessera keyupdate --configfile /home/me/me_node/tessera.conf
```

<!--/tabs-->

Path to the node's [configuration file](../../HowTo/Configure/Tessera.md).

### `debug`

```bash
tessera keyupdate --debug
```

Prints full exception stack traces to `stdout`.

### `encryptor.ellipticCurve`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --encryptor.ellipticCurve <STING>
```

# Example

```bash
tessera keyupdate --encryptor.ellipticCurve secp384r1
```

<!--/tabs-->

Elliptic curve to use for the updated keys. Defaults to `secp256r1`.

### `encryptor.nonceLength`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --encryptor.nonceLength <INTEGER>
```

# Example

```bash
tessera keyupdate --encryptor.nonceLength 38
```

<!--/tabs-->

Nonce length to use as the initialization vector (IV) for symmetric encryption. Defaults to 24.

### `encryptor.sharedKeyLength`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --encryptor.sharedKeyLength <INTEGER>
```

# Example

```bash
tessera keyupdate --encryptor.sharedKeyLength 48
```

<!--/tabs-->

Key length to use for symmetric encryption when updating keys. Defaults to 32.

### `encryptor.symmetricCipher`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --encryptor.symmetricCipher <STRING>
```

# Example

```bash
tessera keyupdate --encryptor.symmetricCipher AES/CTR/NoPadding
```

<!--/tabs-->

Symmetric cipher to use for encrypting data. Defaults to `AES/GCM/NoPadding`.

### `encryptor.type`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --encryptor.type <STRING>
```

# Example

```bash
tessera keyupdate --encryptor.type EC
```

<!--/tabs-->

[Encryption type]. Possible values are `EC`, `NACL`, and `CUSTOM`. Defaults to `NACL`.

### `keys.keyData.config.data.aopts.algorithm`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.keyData.config.data.aopts.algorithm <STRING>
```

# Example

```bash
tessera keyupdate --keys.keyData.config.data.aopts.algorithm id
```

<!--/tabs-->

[Argon2] variant to use. Defaults to `i`.

Valid options are `i`, `d`, and `id`.

### `keys.keyData.config.data.aopts.iterations`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.keyData.config.data.aopts.iterations <INTEGER>
```

# Example

```bash
tessera keyupdate --keys.keyData.config.data.aopts.iterations 4
```

<!--/tabs-->

Number of [Argon2] iterations to perform. Defaults to 10.

### `keys.keyData.config.data.aopts.memory`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.keyData.config.data.aopts.memory <INTEGER>
```

# Example

```bash
tessera keyupdate --keys.keyData.config.data.aopts.memory 1248480
```

<!--/tabs-->

Sets the [Argon2] memory usage. Defaults to 1048576.

### `keys.keyData.config.data.aopts.parallelism`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.keyData.config.data.aopts.parallelism <INTEGER>
```

# Example

```bash
tessera keyupdate --keys.keyData.config.data.aopts.parallelism 6
```

<!--/tabs-->

Sets the number of parallel [Argon2] threads. Defaults to 4.

### `keys.keyData.privateKeyPath`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.keyData.privateKeyPath <PATH>
```

# Example

```bash
tessera keyupdate --keys.keyData.privateKeyPath /Users/me/mynode/nodekey.key
```

<!--/tabs-->

Path to the private key file to update. This option is required.

### `keys.password`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.passwordFile <STRING>
```

# Example

```bash
tessera keyupdate --keys.passwordFile changeme
```

<!--/tabs-->

Password to unlock the private key specified using [`keys.keyData.privateKeyPath`](#keys.keyData.privateKeyPath).

### `keys.passwordFile`

<!--tabs-->

# Syntax

```bash
tessera keyupdate --keys.passwordFile <FILE>
```

# Example

```bash
tessera keyupdate --keys.passwordFile /Users/me/mynode/passwordFile
```

<!--/tabs-->

File containing the password to unlock the private key specified using [`keys.keyData.privateKeyPath`](#keys.keyData.privateKeyPath).

## `version`

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
