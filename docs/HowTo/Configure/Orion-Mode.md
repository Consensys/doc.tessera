---
description: Configure Tessera to use the Besu in a non-GoQuorum privacy mode.
---

# Hyperledger Besu support

Tessera provides out-of-the-box support for Hyperledger Besu; however, additional configuration
is required if **not** running Besu in GoQuorum privacy mode.

Enable `orion` mode in the configuration file if GoQuorum privacy mode is not enabled in Besu.

```json
"mode": "orion",
```

The configuration can also be enabled using command line overrides:

```shell
java -jar tessera.jar --configfile config.json -o mode="orion"
```

Enabling `orion` mode changes Tessera's behaviour in the following ways:

* Will attempt to retrieve privacy group and its associated members for transactions sent with `privacyGroupId`.
* Creates a legacy privacy group for transactions sent with `privateFor` containing a list of recipient keys.
* Will use SHA-512/256 to generate 32 byte hash of encrypted payload to be returned to Besu.
* Adds support for `/receive` `POST` requests using `application/json` media type.
* Responses to `/receive` requests will include the `senderKey` (for Besu sender authentication), and the transaction’s associated `privacyGroupId`.

<!--links-->
[Besu-extended privacy]: https://besu.hyperledger.org/en/stable/HowTo/Use-Privacy/Privacy/
