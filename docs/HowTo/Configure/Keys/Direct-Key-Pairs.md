---
description: Configure direct key pairs.
---

# Direct key pairs

!!! warning

    Direct key pairs are not secure because the private key is exposed in the configuration file.

The key pair data is provided in plain text in the [configuration file](../../../Reference/SampleConfiguration.md#keys).

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
