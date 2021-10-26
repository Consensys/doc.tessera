---
description: Configure Tessera to support GoQuorum multiple private states feature
---

# Configure multiple private states

You can enable support for multiple GoQuorum private states by setting
[`enableMultiplePrivateStates`](../../Reference/SampleConfiguration.md#features) in the [configuration file](Tessera.md)
to `true`.

!!! example "Enable multiple private states configuration"

    ```json
    "features" : {
        "enableMultiplePrivateStates" : "true"
    }
    ```

## Resident groups

When multiple private states is enabled, all keys configured must belong to a resident group.
Specify `residentGroups` in the configuration file as shown in the following example.

!!! example "Resident group configuration"

    ```json
     "residentGroups": [
      {
        "name": "PS1",
        "members": ["publicKey1", "publicKey2"],
        "description": "Private state 1"
      },
      {
        "name": "PS2",
        "members": ["publicKey3", "publicKey4"],
        "description": "Private State 2"
      }
     ]
    ```

Tessera loads the resident group configuration, performs the necessary validations during application startup, and
persists relevant data to its database.

!!! important

    Tessera won't start with `enableMultiplePrivateStates` set to `true` AND an invalid resident group configuration.
