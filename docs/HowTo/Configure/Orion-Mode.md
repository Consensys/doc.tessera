---
description: Configure Tessera to use Besu.
---

# Configure Hyperledger Besu support

Tessera provides support for [Hyperledger Besu](https://besu.hyperledger.org/en/stable/HowTo/Use-Privacy/Privacy/).

To enable Besu support in Tessera, set [`mode`](../../Reference/SampleConfiguration.md#mode) in the
Tessera [configuration file](Tessera.md) to `orion`.

!!! example "Orion mode configuration"

    ```json
    "mode": "orion",
    ```

The configuration can also be enabled using [command line overrides](Override-config.md):

```bash
tessera --configfile config.json -o mode="orion"
```

If you enable `orion` mode, Tessera:

* Attempts to retrieve the [privacy group](../../Concepts/Privacy-Groups.md) and its associated members for transactions
  sent with `privacyGroupId`.
* Creates a legacy privacy group for transactions sent with `privateFor` containing a list of recipient keys.
* Uses SHA-512/256 to generate 32-byte hashes of encrypted payloads to be returned to Besu.
* Adds support for `/receive` `POST` requests using the `application/json` media type.
* Includes the `senderKey` (for Besu sender authentication) and the transaction's associated `privacyGroupId` in
  responses to `/receive` requests.
