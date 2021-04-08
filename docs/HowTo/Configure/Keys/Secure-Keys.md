---
description: Secure private keys using Argon2
---

# Secure private keys using Argon2

Private keys can be encrypted with a password during key generation.

After generating password-protected keys, the password must be added to the configuration file
to ensure it can be decrypted.

Passwords can be added inline using `"passwords":[]`, or stored in an external file that is
referenced by `"passwordFile": "Path"`.

!!!note
    The number of arguments/file-lines provided must equal the total number of private keys.
    For example, if there are 3 total keys and the second is not password secured,
    the 2nd argument/line must be blank or contain dummy data.

Tessera uses [Argon2] to encrypt private keys. By default, Argon2 is configured as follows:

```json
{
    "variant": "id",
    "memory": 1048576,
    "iterations": 10,
    "parallelism": 4
}
```

The Argon2 configuration can be altered by using the
[`-keygenconfig`](../../../Reference/CLI/CLI-Subcommands.md#argonconfig-keygenconfig) option. Any
override file must have the same format as the default configuration above, and all options must be
provided.

```bash
tessera -keygen -filename /path/to/key1 -keygenconfig /path/to/argonoptions.json
```

[Argon2]: https://github.com/P-H-C/phc-winner-argon2
