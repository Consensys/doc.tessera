---
description: Configure Tessera to support GoQuorum multiple private states feature
---

# Configure multiple private states

To use [multi-tenancy](../../Concepts/Multitenancy.md), you must enable
[GoQuorum multiple private states (MPS)](https://docs.goquorum.consensys.net/en/latest/Concepts/Multitenancy/#multiple-private-states).

To do this, set [`enableMultiplePrivateStates`](../../Reference/SampleConfiguration.md#features) in the Tessera
[configuration file](Tessera.md) to `true`.

!!! example "Enable MPS configuration"

    ```json
    "features" : {
        "enableMultiplePrivateStates" : "true"
    }
    ```

## Resident groups

When MPS is enabled, all keys configured must belong to a [resident privacy group](../../Concepts/Privacy-Groups.md#resident),
or resident group.
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

Tessera loads the resident group configuration, performs the following validations during startup (when
`enableMultiplePrivateStates` is set to `true`), and persists relevant data to its database:

* All members of resident groups must be locally managed by the node.
* A member can't be configured to belong to more than one resident group at any time (all history considered).
* All keys configured must belong to a resident group and no key can be left out.

!!! important

    Tessera can't start with `enableMultiplePrivateStates` set to `true` AND an invalid resident group configuration.
