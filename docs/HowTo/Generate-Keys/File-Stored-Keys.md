---
description: How to generate file-stored keys
---

# Store keys in files 

You can generate a private and public key pair and store it in files. 

The following command generates a key pair in the `new.pub` and `new.key` files. 
Provide the passwords at the interactive prompt that displays. Alternatively, leave the password
empty to create an unencrypted private key file.

```bash
tessera -keygen -filename new
```

Generate multiple key pairs by providing a comma-separated list of values:

```bash
tessera -keygen -filename /path/to/key1,/path/to/key2
```

!!! tip

    The following can be used to automatically generate an unencrypted (unlocked) private key file:
    
    ```bash
    tessera -keygen -filename new < /dev/null
    ```

## Updating password protected private keys

The password of a private key stored in a file can be updated using the
`--keys.keyData.privateKeyPath` CLI option.

Running any of the following commands allow you to set a new password.

* Add a password to an unlocked key

    ```bash
    tessera -updatepassword --keys.keyData.privateKeyPath /path/to/.key
    ```

* Change the password of a locked key. This requires providing the current password for the
    key (either inline or as a file):

    === "Inline"

        ```bash
        tessera -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwords <password>
        ```

    === "File"

        ```bash
        tessera -updatepassword --keys.keyData.privateKeyPath /path/to/.key --keys.passwordFile /path/to/pwds
        ```

* Use different Argon2 options from the defaults when updating the password

    ```bash
    tessera --keys.keyData.privateKeyPath <path to keyfile> --keys.keyData.config.data.aopts.algorithm <algorithm> --keys.keyData.config.data.aopts.iterations <iterations> --keys.keyData.config.data.aopts.memory <memory> --keys.keyData.config.data.aopts.parallelism <parallelism>
    ```

    All options have been overridden here but only the options you wish to alter from their defaults
    need to be provided.