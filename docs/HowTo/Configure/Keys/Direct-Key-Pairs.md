---
description: Configure direct key pairs.
---

# Direct key pairs

!!! critical "Security warning"

    Direct key pairs are not secure because the private key is exposed in the configuration file.
    Do not use direct key pairs in production environments.

To configure direct [key pairs](Overview.md), provide the key pair data in plain text in the
[configuration file](../../../Reference/SampleConfiguration.md#keydata).

!!! example "Direct key pair configuration"

    ```json
    "keys": {
        "keyData": [
            {
            "privateKey": "yAWAJjwPqUtNVlqGjSrBmr1/iIkghuOh1803Yzx9jLM=",
            "publicKey": "/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="
            }
        ]
    }
    ```
