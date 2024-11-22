---
title: File based keys
description: How to generate file-stored keys
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store keys in files

You can generate a private and public key pair and store it in files.

The following command generates a key pair in the `new.pub` and `new.key` files. Provide the passwords at the interactive prompt that displays. Alternatively, leave the password empty to create an unencrypted (unlocked) private key file.

:::danger Security warning

Don't use unlocked private key files in production environments, as the private keys are exposed.

:::

```bash
tessera -keygen -filename new
```

Generate multiple key pairs by providing a comma-separated list of values:

```bash
tessera -keygen -filename /path/to/key1,/path/to/key2
```

:::tip

You can use the following command to automatically generate an unlocked private key file.

```bash
tessera -keygen -filename new < /dev/null
```

:::

You can [configure Tessera to use file-based keys](../Configure/Keys/File-Based-Key-Pairs.md).

## Update password protected private keys

You can update the password of a file-based private key using the [`--keys.keyData.privateKeyPath`](../../Reference/CLI/CLI-Subcommands.md#keyskeydataprivatekeypath) command line option.

Run any of the following commands to set a new password:

- Add a password to an unlocked key:

```bash
tessera -updatepassword --keys.keyData.privateKeyPath /path/to/.key
```

- Change the password of a locked key. This requires providing the current password for the key (either inline or as a file):

<Tabs>

  <TabItem value="Inline" label="Inline" default>

```bash
tessera -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwords <password>
```

  </TabItem>
  <TabItem value="File" label="File" >

```bash
tessera -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwordFile /path/to/pwds
```

  </TabItem>
</Tabs>

- Use different Argon2 options from the defaults when updating the password. You only need to provide options if you wish to override their defaults:

```bash
tessera --keys.keyData.privateKeyPath <path to keyfile> --keys.keyData.config.data.aopts.algorithm <algorithm> --keys.keyData.config.data.aopts.iterations <iterations> --keys.keyData.config.data.aopts.memory <memory> --keys.keyData.config.data.aopts.parallelism <parallelism>
```
