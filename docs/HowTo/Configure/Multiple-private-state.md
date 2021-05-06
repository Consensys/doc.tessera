---
description: Configure Tessera to support GoQuorum multiple private states feature
---

# Multiple private states

In order to enable support for *multiple private states* feature in GoQuorum, this configuration flag has to be switched on in Tessera.

```json
"features" : {
    "enableMultiplePrivateStates" : "true"
}
```

# Resident groups

When the feature flag is enabled, all keys configured will need to belong to a resident group.

Tessera will load resident group configuration, perform the necessary validations during application startup, and persist relevant data to its database.

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

!!! info
    Tessera will not start with `enableMultiplePrivateStates` but invalid resident group config
