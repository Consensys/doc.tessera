---
description: Configure file-based key pairs.
---

# File-based key pairs

To configure file-based [key pairs](Overview.md), provide the location of the files in the
[configuration file](../../../Reference/SampleConfiguration.md#keydata).
You can use Tessera to [generate file-based keys].

!!! example "File-based key pair configuration"

    ```json
    "keys": {
        "passwordFile": "/path/to/pwds.txt",
        "keyData": [
            {
                "privateKeyPath": "/path/to/privateKey.key",
                "publicKeyPath": "/path/to/publicKey.pub"
            }
        ]
    }
    ```

The contents of the public key file must contain the public key only.

!!! example "Public key file"

    ```text
    /+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc=
    ```

The contents of the private key file must contain the private key in the [inline key pair](Inline-Key-Pairs.md) format.

!!! example "Private key file"

    === "Password protected"

        ```json
        {
            "data": {
                "aopts": {
                    "variant": "id",
                    "memory": 1048576,
                    "iterations": 10,
                    "parallelism": 4,
                },
                "snonce": "x3HUNXH6LQldKtEv3q0h0hR4S12Ur9pC",
                "asalt": "7Sem2tc6fjEfW3yYUDN/kSslKEW0e1zqKnBCWbZu2Zw=",
                "sbox": "d0CmRus0rP0bdc7P7d/wnOyEW14pwFJmcLbdu2W3HmDNRWVJtoNpHrauA/Sr5Vxc"
            },
            "type": "argon2sbox"
        }
        ```

    === "Unprotected"

        !!! critical "Security warning"

            Inline unprotected keys are not secure because the private key is exposed.
            Do not use inline unprotected key pairs in production environments.

        ```json
        {
            "type" : "unlocked",
            "data" : {
                "bytes" : "DK0HDgMWJKtZVaP31mPhk6TJNACfVzz7VZv2PsQZeKM="
            }
        }
        ```

Provide passwords using the following methods to ensure Tessera can decrypt and use the private keys.

| Method | Description                                                                                                                                                                                                                                                                                     |
|:-------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File   | Supply a password file using the `passwordFile` field. The password file must contain only one password per line. Empty lines should be used for unlocked keys, and passwords must be provided in the order that key pairs are defined in the configuration file.                               |
| Direct | Supply an unencrypted password using the `passwords` field, for example `"passwords": ["pwd1", "pwd2", ...]`. Empty strings should be used for unlocked keys. Passwords must be provided in the order that key pairs are defined in the configuration file. Not recommended for production use. |
| CLI    | Tessera displays a prompt on the CLI for the passwords of encrypted keys that have not had passwords supplied in the configuration. This process only needs to be performed once, when starting the node.                                                                                       |

<!-- links -->
[generate file-based keys]: ../../Generate-Keys/File-Stored-Keys.md
